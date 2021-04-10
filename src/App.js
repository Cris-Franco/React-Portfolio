import React from "react";
import { HashRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <CssBaseline />
      <HashRouter exact path="/" component={Home} />
      <HashRouter path="/portfolio" component={Portfolio} />
      <HashRouter path="/contacts" component={Contacts} />
    </>
  );
}

export default App;
