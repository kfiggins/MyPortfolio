import React, { useReducer } from "react";
import { numberToCurrency } from "../../../utils/currencyHelpers";

const goods = [
  { id: 1, name: "Wood", minPrice: 25, maxPrice: 75 },
  { id: 2, name: "Gold", minPrice: 100, maxPrice: 250 },
  { id: 3, name: "Food", minPrice: 10, maxPrice: 50 },
  { id: 4, name: "Stone", minPrice: 50, maxPrice: 90 },
];

function updateGoodsPricesOnLocations(locations) {
  const newLocations = locations.map((location) => {
    let newGoodsPrices = {};
    goods.map((good) => {
      const maxMinDiff = good.maxPrice - good.minPrice;
      const currentPrice = location.goodsPrices[good.id];
      const randomPositiveNegative = Math.random() > 0.5 ? 1 : -1;
      newGoodsPrices[good.id] =
        currentPrice +
        maxMinDiff * Math.random() * 0.1 * randomPositiveNegative;
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
        goodsPrices: { 1: 30, 2: 105, 3: 20, 4: 52 },
      },
      {
        name: "Location 2",
        id: 2,
        goodsPrices: { 1: 31, 2: 110, 3: 25, 4: 53 },
      },
      {
        name: "Location 3",
        id: 3,
        goodsPrices: { 1: 32, 2: 110, 3: 25, 4: 55 },
      },
      {
        name: "Location 4",
        id: 4,
        goodsPrices: { 1: 33, 2: 110, 3: 25, 4: 57 },
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
            {good.name}. Current Price:{" "}
            {numberToCurrency(currentLocation.goodsPrices[good.id])}{" "}
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
