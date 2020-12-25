import React, { useReducer } from "react";
import { numberToCurrency } from "../../../utils/currencyHelpers";

// function StockItem({ state, dispatch, stockType, label }) {
//   return (
//     <p>
//       <strong>{label}:</strong> Amount Owned {state[stockType].amountOwned} at{" "}
//       {numberToCurrency(state[stockType].currentPrice)} a share.{" "}
//       <button onClick={() => dispatch({ type: "BUY_STOCK", value: stockType })}>
//         Buy
//       </button>{" "}
//       <button
//         onClick={() => dispatch({ type: "SELL_STOCK", value: stockType })}
//       >
//         Sell
//       </button>
//     </p>
//   );
// }

const goods = [
  { id: 1, name: "Wood" },
  { id: 2, name: "Ore" },
  { id: 3, name: "Food" },
  { id: 4, name: "Weapons" },
];

export default function Main() {
  function gameStateReducer(state, action) {
    switch (action.type) {
      case "INCREMENT_ROUND": {
        return {
          ...state,
          round: state.round + 1,
          bankAmount: state.bankAmount * 1.01,
          // stockA: {
          //   ...state.stockA,
          //   currentPrice: state.stockA.currentPrice * (Math.random() + 0.5),
          // },
          // stockB: {
          //   ...state.stockB,
          //   currentPrice: state.stockB.currentPrice * (Math.random() + 0.5),
          // },
          // stockC: {
          //   ...state.stockC,
          //   currentPrice: state.stockC.currentPrice * (Math.random() + 0.5),
          // },
          currentLocationId: state.nextLocationId,
          nextLocationId: undefined,
        };
      }
      case "BUY_GOOD": {
        const currentGoodPrice = state.locations.find(
          (location) => location.id === state.currentLocationId
        ).goodsPrices[action.value];
        if (state.bankAmount < currentGoodPrice) return state;
        return {
          ...state,
          bankAmount: state.bankAmount - currentGoodPrice,
          ownedGoods: {
            ...state.ownedGoods,
            [action.value]: state.ownedGoods[action.value] + 1,
          },
        };
      }
      case "SELL_GOOD": {
        const currentGoodPrice = state.locations.find(
          (location) => location.id === state.currentLocationId
        ).goodsPrices[action.value];
        if (state.ownedGoods[action.value] <= 0) return state;
        return {
          ...state,
          bankAmount: state.bankAmount + currentGoodPrice,
          ownedGoods: {
            ...state.ownedGoods,
            [action.value]: state.ownedGoods[action.value] - 1,
          },
        };
      }
      // case "SELL_STOCK": {
      //   if (state[action.value].amountOwned <= 0) return state;
      //   return {
      //     ...state,
      //     bankAmount: state.bankAmount + state[action.value].currentPrice,
      //     [action.value]: {
      //       ...state[action.value],
      //       amountOwned: state[action.value].amountOwned - 1,
      //     },
      //   };
      // }
      case "TRAVEL": {
        if (state.currentLocationId === action.value) return state;
        return {
          ...state,
          nextLocationId: action.value,
        };
      }
      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(gameStateReducer, {
    bankAmount: 50,
    round: 1,
    currentLocationId: 1,
    nextLocationId: undefined,
    ownedGoods: { 1: 0, 2: 0, 3: 0, 4: 0 },
    locations: [
      { name: "Location 1", id: 1, goodsPrices: { 1: 5, 2: 10, 3: 20, 4: 50 } },
      { name: "Location 2", id: 2, goodsPrices: { 1: 7, 2: 8, 3: 20, 4: 50 } },
      { name: "Location 3", id: 3, goodsPrices: { 1: 9, 2: 18, 3: 20, 4: 50 } },
      {
        name: "Location 4",
        id: 4,
        goodsPrices: { 1: 15, 2: 12, 3: 20, 4: 50 },
      },
    ],
    // stockA: {
    //   amountOwned: 0,
    //   currentPrice: 5,
    // },
    // stockB: {
    //   amountOwned: 0,
    //   currentPrice: 50,
    // },
    // stockC: {
    //   amountOwned: 0,
    //   currentPrice: 500,
    // },
  });
  const currentLocation = state.locations.find(
    (location) => location.id === state.currentLocationId
  );
  return (
    <div>
      <h1>Round: {state.round}</h1>
      {/* <h2>
        Current Wealth:{" "}
        {numberToCurrency(
          state.bankAmount
          // state.stockA.amountOwned * state.stockA.currentPrice +
          // state.stockB.amountOwned * state.stockB.currentPrice +
          // state.stockC.amountOwned * state.stockC.currentPrice
        )}
      </h2> */}
      <h2>Amount in Bank: {numberToCurrency(state.bankAmount)}</h2>

      {/* <StockItem
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
      /> */}

      <table>
        {state.locations.map((location) => {
          const isCurrentLocation = state.currentLocationId === location.id;
          return (
            <tr>
              <td>
                {isCurrentLocation && <b>X</b>} {location.name}{" "}
                {state.nextLocationId === location.id
                  ? "Traveling"
                  : !isCurrentLocation && (
                      <button
                        onClick={() =>
                          dispatch({ type: "TRAVEL", value: location.id })
                        }
                      >
                        Travel
                      </button>
                    )}
              </td>
            </tr>
          );
        })}
      </table>
      <h3>Resources</h3>

      {goods.map((good) => {
        return (
          <div>
            {good.name}. Current Price: {currentLocation.goodsPrices[good.id]}{" "}
            <button
              onClick={() => dispatch({ type: "BUY_GOOD", value: good.id })}
            >
              Buy
            </button>
            <button
              onClick={() => dispatch({ type: "SELL_GOOD", value: good.id })}
            >
              Sell
            </button>
            <b>Owned Goods: {state.ownedGoods[good.id]}</b>
          </div>
        );
      })}

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
