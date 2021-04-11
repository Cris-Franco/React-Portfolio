import React from "react";
import { Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <Router basename="/">
        <CssBaseline />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contacts" component={Contacts} />
      </Router>
    </>
  );
}

export default App;
