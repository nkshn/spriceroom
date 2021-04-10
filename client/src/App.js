import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import Navbar from "./components/navbar";

// Pages
import HomePage from "./pages/HomePage";
import AssortmentPage from "./pages/AssortmentPage";
import CoffeePage from "./pages/CoffeePage";
import ContactsPage from "./pages/ContactsPage";
import CartPage from "./pages/CartPage";
import PaymentsInfoPage from "./pages/PaymentsInfoPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/assortment" component={AssortmentPage} />
          <Route path="/coffee/:id" component={CoffeePage} />
          <Route path="/contacts" component={ContactsPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/payments" component={PaymentsInfoPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
