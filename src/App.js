import './App.css';
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import "cirrus-ui";
import Home from "./Home";
import ContactMe from "./ContactMe";
import Work from "./Work";
import Header from "./Header";
import About from "./About";


function App() {
  return (
    <Router basename="/">
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path = "/about">
          <About />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/contactme">
          <ContactMe />
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App;
