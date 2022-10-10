import NavItem from "./components/NavItem";

const navItems = [
  { text: "PRODUCTS", route: "/" },
  { text: "VISION", route: "/vision" },
];

function NavBar() {
  return (
    <nav className="bg-blue-400">
      <ui className="flex">
        {navItems.map((x) => (
          <NavItem {...x} />
        ))}
      </ui>
    </nav>
  );
}

export default NavBar;
