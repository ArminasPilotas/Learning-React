import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./nav-bar/NavBar";
import Products from "./products/Products";
import Product from "./product/Product";
import Vision from "./vision/Vision";
import ContactUs from "./contact-us/ContactUs";

function App() {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <main className="p-2" style={{ minHeight: "calc(100vh - 44px" }}>
        <Switch>
          <Route exact path={["/", "/products"]} component={Products} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/vision" component={Vision} />
          <Route exact path="/contact" component={ContactUs} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
