import CartNavItem from "./components/CartNavItem";
import NavItem from "./components/NavItem";

const navItems = [
  { content: "PRODUCTS", route: "/" },
  { content: "VISION", route: "/vision" },
  { content: "CONTACT", route: "/contact" },
];

function NavBar() {
  return (
    <nav className="bg-blue-400">
      <ui className="flex">
        {navItems.map((x) => (
          <NavItem key={x.route} {...x} />
        ))}
        <CartNavItem />
      </ui>
    </nav>
  );
}

export default NavBar;
