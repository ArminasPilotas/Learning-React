import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./nav-bar/NavBar";
import Products from "./products/Products";
import Vision from "./vision/Vision";

function App() {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <main className="p-2">
        <Switch>
          <Route path="/">
            <Products />
          </Route>
          <Route path="/vision">
            <Vision />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
