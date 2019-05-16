import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";

import "./App.css";

import Home from "./components/Home";
import Components from "./components/Components";
import Navbar from "./components/Navbar";
import BlogPlaceHolder from "./components/BlogPlaceHolder";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/components" component={Components} />
          <Route path="/blog" component={BlogPlaceHolder} />
        </Switch>
      </Router>
    );
  }
}

export default App;
