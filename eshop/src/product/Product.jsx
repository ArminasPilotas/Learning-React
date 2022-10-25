import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { addToCart, getProduct } from "../common/requests";
import Card from "../common/components/Card";
import Counter from "../common/components/Counter";
import Spinner from "../common/components/Spinner";
import useApi from "../common/hooks/useAPI";
import useCounter from "../common/hooks/useCounter";
import { notification } from "../common/components/Notification";
import AddToCardButton from "./components/AddToCardButton";

function Product() {
  const { id } = useParams();
  const { isLoading, data: product, call: getProductCall } = useApi();
  const { isLoading: isAddToCardLoading, call: addToCardCall } = useApi();
  const counterProps = useCounter();

  useEffect(() => {
    getProductCall(getProduct(id));
  }, [id]); //eslint-disable-line

  async function handleAddToCard() {
    await addToCardCall(addToCart(id, counterProps.count));

    notification.success({ text: "Product added to card" });
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

        <AddToCardButton
          isLoading={isAddToCardLoading}
          onClick={handleAddToCard}
        />
      </div>
    </div>
  );
}

export default Product;
