import './App.css';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import "cirrus-ui";
import Home from "./Home";
import ContactMe from "./ContactMe";
import Work from "./Work";
import Header from "./Header";
import About from "./About";



function App() {
  return (
    <HashRouter>
    <div>
      <Header />
      <Switch>
        <HashRouter basename="/home">
          <Home />
        </HashRouter>
        <HashRouter basename="/about">
          <About />
        </HashRouter>
        <HashRouter exact path={"/work"}>
          <Work />
        </HashRouter>
        <HashRouter exact path={"/contactme"}>
          <ContactMe />
        </HashRouter>
      </Switch>
    </div>
  </HashRouter>
  )
}

export default App;
