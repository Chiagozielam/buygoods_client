import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./routes/landing";
import ProductDetails from "./routes/productDetails";
import AccessoriesPage from "./routes/accessoriesPage";
import ComputersPage from "./routes/computersPage";
import ClothingPage from "./routes/clothingPage";
import GadgetsPage from "./routes/gadgetsPage";
import SmartphonesPage from "./routes/smartphonesPage"
import FasionPage from "./routes/fasionPage";
import LoginPage from "./routes/loginPage";
import RegistrationPage from "./routes/registerPage";
import DashboardPage from "./routes/dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/details/:name" render={props => <ProductDetails {...props} />} />
        <Route exact path="/categories/fasion" component={FasionPage} />
        <Route exact path="/categories/accessories" component={AccessoriesPage} />
        <Route exact path="/categories/computers" component={ComputersPage} />
        <Route exact path="/categories/clothing" component={ClothingPage} />
        <Route exact path="/categories/gadgets" component={GadgetsPage} />
        <Route exact path="/categories/smartphones" component={SmartphonesPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegistrationPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
