import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import Components from "./components/Components";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/components" component={Components} />
      </Router>
    );
  }
}

export default App;
