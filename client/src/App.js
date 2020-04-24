import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import BlogPlaceHolder from "./components/BlogPlaceHolder";
import Components from "./components/componentLibrary/Components";
import GitHubRepoApp from "./components/gitHubRepoApp/GitHubRepoApp";
import Home from "./components/Home";
import KanbanApp from "./components/KanbanApp";
import Navigation from "./components/shared/Navigation"
import TodoApp from "./components/todoApp/TodoApp";
import { useMediaQuery } from "./hooks/useMediaQuery";

// Set up toast
toast.configure();

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Components", link: "/components" },
  { name: "To-Do App", link: "/todo" },
  { name: "Kanban App", link: "/kanban" },
  { name: "GitHub Repo App", link: "/gitHubRepo" },
  { name: "Blog", link: "/blog" },
]

const App = () => {
  const mobileScreen = useMediaQuery("(max-width: 850px)");

  return (
    <Router>
      <Navigation darkColor="#24364c" lightColor="#24364c" menuItems={menuItems} />
      <div style={{ padding: "50px" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/components" component={Components} />
          <Route path="/blog" component={BlogPlaceHolder} />
          <Route path="/todo" component={TodoApp} />
          <Route path="/kanban" component={KanbanApp} />
          <Route path="/gitHubRepo" component={GitHubRepoApp} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
