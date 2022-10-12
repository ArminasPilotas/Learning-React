import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getProduct } from "../common/requests";
import Card from "../common/components/Card";
import Counter from "../common/components/Counter";
import Button from "../common/components/Button";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios(getProduct(id));

      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  console.log(product);
  return (
    <div className="flex m-auto" style={{ maxWidth: 1000 }}>
      <div className="flex-1 pl-2 pr-8">
        <Card>
          <img src={product?.image} alt={product?.title} />
        </Card>
      </div>

      <div className="flex-1 pr-2 pl-8">
        <h1 className="text-2xl font-semibold mb-4">{product?.title}</h1>

        <div className="text-3xl font-bold mb-4">{product?.price}$</div>

        <p className="mb-4">{product?.description}</p>

        <div className="font-semibold mb-2">Quantity</div>

        <Counter />

        <Button>ADD TO CARD</Button>
      </div>
    </div>
  );
}

export default Product;
