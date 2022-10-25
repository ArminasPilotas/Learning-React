import { useContext, useEffect } from "react";
import { CartContext } from "../common/providers/CartProvider";

function Cart() {
  const { cart, refreshData } = useContext(CartContext);

  useEffect(() => {
    refreshData();
  }, []); //eslint-disable-line

  return <div>Cart page {JSON.stringify(cart)}</div>;
}

export default Cart;
