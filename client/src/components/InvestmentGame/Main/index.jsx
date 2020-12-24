import React, { useReducer } from "react";
import { numberToCurrency } from "../../../utils/currencyHelpers";

function StockItem({ state, dispatch, stockType, label }) {
  return (
    <p>
      <strong>{label}:</strong> Amount Owned {state[stockType].amountOwned} at{" "}
      {numberToCurrency(state[stockType].currentPrice)} a share.{" "}
      <button onClick={() => dispatch({ type: "BUY_STOCK", value: stockType })}>
        Buy
      </button>{" "}
      <button
        onClick={() => dispatch({ type: "SELL_STOCK", value: stockType })}
      >
        Sell
      </button>
    </p>
  );
}

export default function Main() {
  function gameStateReducer(state, action) {
    switch (action.type) {
      case "INCREMENT_ROUND": {
        return {
          ...state,
          round: state.round + 1,
          bankAmount: state.bankAmount * 1.01,
          stockA: {
            ...state.stockA,
            currentPrice: state.stockA.currentPrice * (Math.random() + 0.5),
          },
          stockB: {
            ...state.stockB,
            currentPrice: state.stockB.currentPrice * (Math.random() + 0.5),
          },
          stockC: {
            ...state.stockC,
            currentPrice: state.stockC.currentPrice * (Math.random() + 0.5),
          },
        };
      }
      case "BUY_STOCK": {
        if (state.bankAmount < state[action.value].currentPrice) return state;
        return {
          ...state,
          bankAmount: state.bankAmount - state[action.value].currentPrice,
          [action.value]: {
            ...state[action.value],
            amountOwned: state[action.value].amountOwned + 1,
          },
        };
      }
      case "SELL_STOCK": {
        if (state[action.value].amountOwned <= 0) return state;
        return {
          ...state,
          bankAmount: state.bankAmount + state[action.value].currentPrice,
          [action.value]: {
            ...state[action.value],
            amountOwned: state[action.value].amountOwned - 1,
          },
        };
      }
      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(gameStateReducer, {
    bankAmount: 50,
    round: 1,
    stockA: {
      amountOwned: 0,
      currentPrice: 5,
    },
    stockB: {
      amountOwned: 0,
      currentPrice: 50,
    },
    stockC: {
      amountOwned: 0,
      currentPrice: 500,
    },
  });

  return (
    <div>
      <h1>Round: {state.round}</h1>
      <h2>
        Current Wealth:{" "}
        {numberToCurrency(
          state.bankAmount +
            state.stockA.amountOwned * state.stockA.currentPrice +
            state.stockB.amountOwned * state.stockB.currentPrice +
            state.stockC.amountOwned * state.stockC.currentPrice
        )}
      </h2>
      <h3>Amount in Bank: {numberToCurrency(state.bankAmount)}</h3>
      {/* <h3>Amount to Invest: {numberToCurrency(state.salary * 0.8)}</h3> */}
      <StockItem
        state={state}
        dispatch={dispatch}
        stockType="stockA"
        label="Stock A"
      />
      <StockItem
        state={state}
        dispatch={dispatch}
        stockType="stockB"
        label="Stock B"
      />
      <StockItem
        state={state}
        dispatch={dispatch}
        stockType="stockC"
        label="Stock C"
      />
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
