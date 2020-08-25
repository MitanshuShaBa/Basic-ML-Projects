import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import { CssBaseline } from "@material-ui/core";
import About from "./About";
import HeartDisease from "./projects/HeartDisease";
import Navbar from "./Navbar";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <div>
          <Navbar/>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/heart-disease">
              <HeartDisease />
            </Route>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
