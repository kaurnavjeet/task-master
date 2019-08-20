import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Landing from "./components/layout/Landing";

function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />

        <Landing />
      </Fragment>
    </Router>
  );
}

export default App;
