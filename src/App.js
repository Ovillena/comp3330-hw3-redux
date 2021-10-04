import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import { Component } from "react";
import Home from "./Home";
import About from "./About";
import List from "./List";
import NotFound from "./NotFound";
import Course from "./Course";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>FSWD</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/list/:course" component={Course}></Route>
          <Route path="/list" exact="true" component={List}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/" exact="true" component={Home}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
