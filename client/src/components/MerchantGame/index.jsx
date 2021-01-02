import React from "react";
import { Link } from "react-router-dom";

export default function MerchantGame() {
  return (
    <div>
      <h1>Welcome to the Merchant Game</h1>
      <p>Your goal is to generate the most wealth over 50 turns.</p>
      <p>Good Luck!</p>
      <Link to={"/merchantGame/main"} style={{ padding: "20px" }}>
        Start
      </Link>
    </div>
  );
}
