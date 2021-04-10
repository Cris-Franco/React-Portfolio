import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <CssBaseline />
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contacts" component={Contacts} />
      </Router>
    </>
  );
}

export default App;
