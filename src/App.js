import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Home from "./components/Pages/Home";
import RequestPg from "./components/Pages/Request";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Register";
import DriverdetailPg from "./components/Pages/DriverDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/request" component={RequestPg} />
          <Route path="/driverdetailpg" component={DriverdetailPg} />
          <Route path="/login" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
