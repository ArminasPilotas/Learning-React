import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./nav-bar/NavBar";
import Products from "./products/Products";
import Product from "./product/Product";
import Vision from "./vision/Vision";
import ContactUs from "./contact-us/ContactUs";
import Cart from "./cart/Cart";
import CartProvider from "./common/providers/CartProvider";

function App() {
  return (
    <Router>
      <CartProvider>
        <header>
          <NavBar />
        </header>
        <main className="p-2" style={{ height: "calc(100vh - 48px" }}>
          <Switch>
            <Route exact path={["/", "/products"]} component={Products} />
            <Route exact path="/product/:id" component={Product} />
            <Route exact path="/vision" component={Vision} />
            <Route exact path="/contact" component={ContactUs} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </main>
      </CartProvider>
    </Router>
  );
}

export default App;
