import { useEffect, useState } from "react";

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
        <li key={x.id} className="p-2">
          <div className="w-64 h-80 bg-white border shadow rounded p-2">
            <div className="h-3/4 p-4">
              <img
                className="max-h-full m-auto"
                src={x.image}
                alt={x.title}
              ></img>
            </div>

            <div className="text-center font-semibold truncate" title={x.title}>{x.title}</div>

            <div className="text-center">{x.price}$</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Products;
