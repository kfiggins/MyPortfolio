import React, { useReducer } from "react";
import { numberToCurrency } from "../../../utils/currencyHelpers";

const goods = [
  { id: 1, name: "Wood", minPrice: 20, maxPrice: 60 },
  { id: 2, name: "Gold", minPrice: 100, maxPrice: 500 },
  { id: 3, name: "Food", minPrice: 10, maxPrice: 25 },
  { id: 4, name: "Stone", minPrice: 50, maxPrice: 200 },
];

const GOODS_PERCENT_CHANGE_PER_ROUND = 0.1;

function updateGoodsPricesOnLocations(locations) {
  const newLocations = locations.map((location) => {
    let newGoodsPrices = {};
    goods.map((good) => {
      const maxMinDiff = good.maxPrice - good.minPrice;
      const currentPrice = location.goodsPrices[good.id];
      const randomPositiveNegative = Math.random() > 0.5 ? 1 : -1;
      const nextGoodPrice =
        currentPrice +
        maxMinDiff *
          Math.random() *
          GOODS_PERCENT_CHANGE_PER_ROUND *
          randomPositiveNegative;
      //TODO: Refactor this ugly ternary.
      const finalGoodPrice =
        nextGoodPrice > good.maxPrice
          ? good.maxPrice
          : nextGoodPrice < good.minPrice
          ? good.minPrice
          : nextGoodPrice;
      newGoodsPrices[good.id] = finalGoodPrice;
    });
    return {
      ...location,
      goodsPrices: newGoodsPrices,
    };
  });
  return newLocations;
}

export default function Main() {
  function gameStateReducer(state, action) {
    switch (action.type) {
      case "INCREMENT_ROUND": {
        const newLocations = updateGoodsPricesOnLocations(state.locations);
        return {
          ...state,
          round: state.round + 1,
          bankAmount: state.bankAmount * 1.01,
          currentLocationId: state.nextLocationId || state.currentLocationId,
          nextLocationId: undefined,
          locations: newLocations,
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
      case "BUY_MAX_GOOD": {
        const currentGoodPrice = state.locations.find(
          (location) => location.id === state.currentLocationId
        ).goodsPrices[action.value];
        if (state.bankAmount < currentGoodPrice) return state;
        const itemAmount = Math.floor(state.bankAmount / currentGoodPrice);
        return {
          ...state,
          bankAmount: state.bankAmount - itemAmount * currentGoodPrice,
          ownedGoods: {
            ...state.ownedGoods,
            [action.value]: state.ownedGoods[action.value] + itemAmount,
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
      case "SELL_MAX_GOOD": {
        const currentGoodPrice = state.locations.find(
          (location) => location.id === state.currentLocationId
        ).goodsPrices[action.value];
        if (state.ownedGoods[action.value] <= 0) return state;
        const itemAmount = state.ownedGoods[action.value];
        return {
          ...state,
          bankAmount: state.bankAmount + itemAmount * currentGoodPrice,
          ownedGoods: {
            ...state.ownedGoods,
            [action.value]: state.ownedGoods[action.value] - itemAmount,
          },
        };
      }
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
      {
        name: "Location 1",
        id: 1,
        goodsPrices: { 1: 24, 2: 105, 3: 15, 4: 52 },
      },
      {
        name: "Location 2",
        id: 2,
        goodsPrices: { 1: 26, 2: 110, 3: 17, 4: 53 },
      },
      {
        name: "Location 3",
        id: 3,
        goodsPrices: { 1: 27, 2: 110, 3: 17, 4: 55 },
      },
      {
        name: "Location 4",
        id: 4,
        goodsPrices: { 1: 28, 2: 110, 3: 17, 4: 57 },
      },
    ],
  });
  const currentLocation = state.locations.find(
    (location) => location.id === state.currentLocationId
  );
  return (
    <div>
      <h1>Round: {state.round}</h1>
      <h2>Amount in Bank: {numberToCurrency(state.bankAmount)}</h2>
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
          <div key={good.id}>
            <b>{good.name}.</b> Current Price:{" "}
            {numberToCurrency(currentLocation.goodsPrices[good.id])}{" "}
            <button
              onClick={() => dispatch({ type: "BUY_GOOD", value: good.id })}
            >
              Buy
            </button>
            <button
              onClick={() => dispatch({ type: "BUY_MAX_GOOD", value: good.id })}
            >
              Buy Max
            </button>
            <button
              onClick={() => dispatch({ type: "SELL_GOOD", value: good.id })}
            >
              Sell
            </button>
            <button
              onClick={() =>
                dispatch({ type: "SELL_MAX_GOOD", value: good.id })
              }
            >
              Sell Max
            </button>
            <b>
              Owned {good.name}: {state.ownedGoods[good.id]}
            </b>
            <br />
            <br />
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
