import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import BlogPlaceHolder from "./components/BlogPlaceHolder";
import Components from "./components/componentLibrary/Components";
import GitHubRepoApp from "./components/gitHubRepoApp/GitHubRepoApp";
import Home from "./components/Home";
import KanbanApp from "./components/KanbanApp";
import { Navbar, MobileNavbar } from "./components/Navbar";
import Navigation from "./components/shared/Navigation"
import TodoApp from "./components/todoApp/TodoApp";
import { useMediaQuery } from "./hooks/useMediaQuery";

// Set up toast
toast.configure();

const App = () => {
  const mobileScreen = useMediaQuery("(max-width: 850px)");

  return (
    <Router>
      {mobileScreen ? <MobileNavbar /> : <Navbar />}
      <Navigation darkColor="#24364c" lightColor="#506a8c" primaryColor="#3d5a80" />
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
};

export default App;
