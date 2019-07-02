import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import Home from "./components/Home";
import Components from "./components/Components";
import Navbar from "./components/Navbar";
import BlogPlaceHolder from "./components/BlogPlaceHolder";
import TodoApp from "./components/todoApp/TodoApp";
import KanbanApp from "./components/kanbanApp/KanbanApp";
import GitHubRepoApp from "./components/gitHubRepoApp/GitHubRepoApp";

// Set up toast
toast.configure();

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/components" component={Components} />
          <Route path="/blog" component={BlogPlaceHolder} />
          <Route path="/todo" component={TodoApp} />
          <Route path="/kanban" component={KanbanApp} />
          <Route path="/gitHubRepo" component={GitHubRepoApp} />
        </Switch>
      </Router>
    );
  }
}

export default App;
