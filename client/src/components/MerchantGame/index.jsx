import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import MerchantGameMain from "./Main";
import Start from "./Start";
import HighScores from "./HighScores";

export default function MerchantGame() {
  let { path } = useRouteMatch();
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Middle Earth Merchant</h1>
      </div>

      <Switch>
        <Route path={`${path}/main`} component={MerchantGameMain} />
        <Route path={`${path}/highScores/:finalScore`} component={HighScores} />
        <Route path={`${path}/`} component={Start} />
      </Switch>
    </div>
  );
}
