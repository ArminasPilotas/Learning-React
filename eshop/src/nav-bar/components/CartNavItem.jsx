import { useContext } from "react";
import NavItem from "./NavItem";
import { ReactComponent as CartIcon } from "../../common/assets/cart.svg";
import { CartContext } from "../../common/providers/CartProvider";

function CartIconWithNumber({ productCount }) {
  return (
    <>
      <CartIcon className="w-8 h-8" />
      {productCount && (
        <span className="absolute text-yellow-400 font-bold text-xs top-1/4 right-1/3">
          {productCount}
        </span>
      )}
    </>
  );
}

function CartNavItem() {
  const { cart } = useContext(CartContext);

  return (
    <NavItem
      content={<CartIconWithNumber productCount={cart?.products?.length} />}
      route="/cart"
      className="ml-auto mr-2 relative"
    />
  );
}

export default CartNavItem;
