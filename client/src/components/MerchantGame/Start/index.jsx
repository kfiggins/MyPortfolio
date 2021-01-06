import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function Start() {
  let { url } = useRouteMatch();
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
      <Link to={`${url}/main`} style={{ padding: "20px" }}>
        Start
      </Link>
    </div>
  );
}
