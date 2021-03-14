import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import AssortmentPage from "./pages/AssortmentPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactsPage from "./pages/ContactsPage";
import BlogPage from "./pages/BlogPage";
import CartPage from "./pages/CartPage";
import PaymentsInfoPage from "./pages/PaymentsInfoPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/assortment" component={AssortmentPage} />
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/contacts" component={ContactsPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/payments" component={PaymentsInfoPage} />
      </Switch>
    </Router>
  );
}

export default App;
