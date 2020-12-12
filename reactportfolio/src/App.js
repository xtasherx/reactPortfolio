import './App.css';
// import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter, Route } from "react-router-dom";
import React, { Component } from 'react';

import "cirrus-ui";
import Home from "./Home";
import ContactMe from "./ContactMe";
import Work from "./Work";
import Header from "./Header";
import About from "./About";



class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contactme" component={ContactMe} />
        <Route path="/work" component={Work} />   
        </div>
      </HashRouter >
    );
  }
}

// function App() {
//   return (
//     <Router basename="/">
//     <div>
//       <Header />
//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path = "/about">
//           <About />
//         </Route>
//         <Route path="/work">
//           <Work />
//         </Route>
//         <Route path="/contactme">
//           <ContactMe />
//         </Route>
//       </Switch>
//     </div>
//   </Router>
//   )
// }

export default App;
