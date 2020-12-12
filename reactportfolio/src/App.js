import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "cirrus-ui";
import Home from "./Home";
import ContactMe from "./ContactMe";
import Work from "./Work";
import Header from "./Header";
import About from "./About";


function App() {
  return (
    <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact path={["/", "/about"]}>
          <About />
        </Route>
        <Route exact path="/work">
          <Work />
        </Route>
        <Route exact path={"/contactme"}>
          <ContactMe />
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App;
