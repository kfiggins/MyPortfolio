import React from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import Button from "../../shared/Button";

export default function Start() {
  let { url } = useRouteMatch();
  const history = useHistory();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p>Your goal is to generate the most wealth over 52 turns.</p>
      <p>Good Luck!</p>
      <Button primary onClick={() => history.push(`${url}/main`)}>
        Start
      </Button>
    </div>
  );
}
