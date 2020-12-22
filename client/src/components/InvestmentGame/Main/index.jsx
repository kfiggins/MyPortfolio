import React, { useReducer } from "react";

export default function Main() {
  function gameStateReducer(state, action) {
    switch (action.type) {
      case "INCREMENT_ROUND": {
        return {
          ...state,
          round: state.round + 1,
          salary: state.salary * 1.05,
        };
      }
      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(gameStateReducer, {
    total: 0,
    salary: 80000,
    round: 1,
  });

  return (
    <div>
      <h1>Round: {state.round}</h1>
      <h2>Total Money: ${state.total}</h2>
      <h3>Current Salary: ${state.salary}</h3>
      <h3>Amount to Invest: ${state.salary * 0.8}</h3>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT_ROUND" });
        }}
      >
        Next Round
      </button>
    </div>
  );
}
