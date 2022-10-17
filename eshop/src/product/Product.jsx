import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { addToCard, getProduct } from "../common/requests";
import Card from "../common/components/Card";
import Counter from "../common/components/Counter";
import Button from "../common/components/Button";
import Spinner from "../common/components/Spinner";
import useApi from "../common/hooks/useAPI";
import useCounter from "../common/hooks/useCounter";

function Product() {
  const { id } = useParams();
  const { isLoading, data: product, call: getProductCall } = useApi();
  const { isLoading: isAddToCardLoading, call: addToCardCall } = useApi();
  const counterProps = useCounter();

  useEffect(() => {
    getProductCall(getProduct(id));
  }, [id]); //eslint-disable-line

  function handleAddToCard() {
    addToCardCall(addToCard(id, counterProps.count));
  }

  if (isLoading || !product) {
    return <Spinner text="Fetching product info" />;
  }

  return (
    <div className="flex m-auto" style={{ maxWidth: 1000 }}>
      <div className="flex-1 pl-2 pr-8">
        <Card>
          <img src={product.image} alt={product.title} />
        </Card>
      </div>

      <div className="flex-1 pr-2 pl-8">
        <h1 className="text-2xl font-semibold mb-4">{product.title}</h1>

        <div className="text-3xl font-bold mb-4">{product.price}$</div>

        <p className="mb-4">{product.description}</p>

        <div className="font-semibold mb-2">Quantity</div>

        <Counter className="mb-4" {...counterProps} />

        <Button
          type="primary"
          disabled={isAddToCardLoading}
          onClick={handleAddToCard()}
        >
          {isAddToCardLoading ? "ADDING TO CARD" : "ADD TO CARD"}
        </Button>
      </div>
    </div>
  );
}

export default Product;
