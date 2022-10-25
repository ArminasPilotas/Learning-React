import { createContext, useEffect } from "react";
import useApi from "../hooks/useAPI";
import { getCart } from "../requests";

export const CartContext = createContext({});

function CartProvider({ children }) {
  const { data, call } = useApi();

  useEffect(() => {
    call(getCart);
  }, []); //eslint-disable-line

  return (
    <CartContext.Provider
      value={{ cart: data, refreshData: () => call(getCart) }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
