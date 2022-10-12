import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { getProducts} from '../common/requests';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios(getProducts);

      setProducts(data);
    };

    fetchProducts();
  }, []);

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
