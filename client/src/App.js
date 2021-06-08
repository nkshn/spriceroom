import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// Pages
import HomePage from "./pages/HomePage";
import AssortmentPage from "./pages/AssortmentPage";
import CoffeePage from "./pages/CoffeePage";
import CartPage from "./pages/cart/";
// import CartPage from "./pages/cart/CartPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/coffees" component={AssortmentPage} />
          <Route path="/coffee/:id" component={CoffeePage} />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
