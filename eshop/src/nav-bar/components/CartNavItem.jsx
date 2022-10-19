import NavItem from "./NavItem";
import { ReactComponent as CartIcon } from "../../common/assets/cart.svg";

function CartNavItem() {
  return (
    <NavItem
      content={<CartIcon className="w-8 h-8" />}
      route="/cart"
      className="ml-auto mr-2"
    />
  );
}

export default CartNavItem;
