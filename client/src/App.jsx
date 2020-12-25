import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Home from "./components/Home";
import Navigation from "./components/shared/Navigation";
import FavoriteBooks from "./components/FavoriteBooks";
import MerchantGame from "./components/MerchantGame";
import MerchantGameMain from "./components/MerchantGame/Main";

import { useMediaQuery } from "./hooks/useMediaQuery";
import { screenSizeBreakPoints } from "./style/variables";

// Set up toast
toast.configure();

const menuItems = [
  { name: "Home", link: "/", isMobile: true },
  { name: "Favorite Books", link: "/books", isMobile: true },
  { name: "Merchant Game", link: "/merchantGame", isMobile: true },
  { name: "Blog", externalLink: "https://blog.kfiggins.com/", isMobile: true },
];

const App = () => {
  const mobileScreen = useMediaQuery(screenSizeBreakPoints.small);

  return (
    <Router>
      <Navigation
        isMobile={mobileScreen}
        darkColor="#24364c"
        lightColor="#24364c"
        menuItems={menuItems}
      />

      <div style={{ padding: "50px" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/books" component={FavoriteBooks} />
          <Route path="/merchantGame/main" component={MerchantGameMain} />
          <Route path="/merchantGame" component={MerchantGame} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
