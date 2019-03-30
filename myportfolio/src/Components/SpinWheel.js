import React from "react";
import "../Style/SpinWheel.css";

export default function SpinWheel({ speed, direction }) {
  return (
    <div
      className="centered"
      style={
        {
          // position: "fixed",
          // top: "50%",
          // right: "50%",
          // transform: "translate(-50%, -50%)",
          // animation: `App-logo-spin infinite ${speed}s linear`,
          // animationDirection: direction
        }
      }
    >
      <h1 className="object1">Forms</h1>
      {/* <h1 style={{ position: "relative", top: "15em" }}>Forms</h1> */}
      {/* <h1 style={{ position: "relative", right: "15em" }}>Cards</h1>
      <h1 style={{ position: "relative", left: "15em" }}>Navbar</h1>
      <h1 style={{ position: "relative", bottom: "15em" }}>Contact Us</h1>
      <h1 style={{ position: "relative", top: "15em", left: "15em" }}>About</h1>
      <h1 style={{ position: "relative", bottom: "15em", right: "15em" }}>Random</h1> */}
    </div>
  );
}
