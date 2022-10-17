import { useEffect } from "react";
import ProductCard from "./components/ProductCard";
import { getProducts } from "../common/requests";
import Spinner from "../common/components/Spinner";
import useApi from "../common/hooks/useAPI";

function Products() {
  const { isLoading, data: products, call } = useApi();

  useEffect(() => {
    call(getProducts);
  }, []); //eslint-disable-line

  if (isLoading || !products) {
    return <Spinner text="Fetching products" />;
  }

  return (
    <ul className="flex flex-wrap">
      {products.map((x) => (
        <ProductCard
          key={x.id}
          id={x.id}
          image={x.image}
          title={x.title}
          price={x.price}
        />
      ))}
    </ul>
  );
}

export default Products;
