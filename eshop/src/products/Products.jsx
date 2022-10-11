import { useEffect, useState } from "react";
import Card from "../common/components/Card";
import ProductCard from "./components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();

      setProducts(products);
    };

    getProducts();
  }, []);

  return (
    <ul className="flex flex-wrap">
      {products.map((x) => (
        <ProductCard key={x.id} image={x.image} title={x.title} price={x.price} />
      ))}
    </ul>
  );
}

export default Products;
