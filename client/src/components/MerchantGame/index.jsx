import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import MerchantGameMain from "./Main";
import Start from "./Start";
import HighScores from "./HighScores";

export default function MerchantGame() {
  let { path } = useRouteMatch();
  return (
    <div>
      <h1>Middle Earth Merchant</h1>

      <Switch>
        <Route path={`${path}/main`} component={MerchantGameMain} />
        <Route path={`${path}/highScores`} component={HighScores} />
        <Route path={`${path}/`} component={Start} />
      </Switch>
    </div>
  );
}
