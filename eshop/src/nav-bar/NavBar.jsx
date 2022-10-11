import NavItem from "./components/NavItem";

const navItems = [
  { text: "PRODUCTS", route: "/" },
  { text: "VISION", route: "/vision" },
  { text: "CONTACT", route: "/contact"},
];

function NavBar() {
  return (
    <nav className="bg-blue-400">
      <ui className="flex">
        {navItems.map((x) => (
          <NavItem key={x.route} {...x} />
        ))}
      </ui>
    </nav>
  );
}

export default NavBar;
