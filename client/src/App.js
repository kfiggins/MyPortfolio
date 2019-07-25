import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import BlogPlaceHolder from "./components/BlogPlaceHolder";
import Components from "./components/componentLibrary/Components";
import GitHubRepoApp from "./components/gitHubRepoApp/GitHubRepoApp";
import Home from "./components/Home";
import KanbanApp from "./components/kanbanApp/KanbanApp";
import Navbar from "./components/Navbar";
import TodoApp from "./components/todoApp/TodoApp";

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
