import React from "react";
import { Link } from "react-router-dom";

export default function InvestmentGame() {
  return (
    <div>
      <h1>Welcome to the Investment Game</h1>
      <p>Your goal is to generate the most wealth over 30 turns.</p>
      <p>Good Luck!</p>
      <Link to={"/investmentGame/main"} style={{ padding: "20px" }}>
        Start
      </Link>
    </div>
  );
}
