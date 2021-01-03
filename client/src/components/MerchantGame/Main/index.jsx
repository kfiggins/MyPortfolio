import React, { useReducer } from "react";
import { numberToCurrency } from "../../../utils/currencyHelpers";
import mainMap from "../../../assets/merchantGame/map.jpg";
import {
  goods,
  AMOUNT_OF_ROUNDS,
  initialState,
  gameStateReducer,
} from "./initialState";
import {
  getGoodByLocation,
  getTotalGoodsAmountByLocation,
} from "./helperFunctions";

//TODO: Add styling, make it look nice, mobile first
//TODO: Make sure things are split up well in a functional manner so I can easily extend later on.
//TODO: Write some tests around main logic

export default function Main() {
  const [state, dispatch] = useReducer(gameStateReducer, initialState);
  const currentLocation = state.locations.find(
    (location) => location.id === state.currentLocationId
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Week {state.round}</h2>
          <h2>Bank: {numberToCurrency(state.bankAmount)}</h2>
        </div>
        <img
          src={mainMap}
          style={{ maxWidth: "600px", borderRadius: "50px" }}
        />
        <table>
          <tbody>
            {state.locations.map((location) => {
              const isCurrentLocation = state.currentLocationId === location.id;
              const currentGood = getGoodByLocation(location);
              return (
                <tr key={location.id}>
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
                    {isCurrentLocation && (
                      <button
                        onClick={() => dispatch({ type: "BUY_BUILDING" })}
                      >
                        Build {currentGood.buildingName} for{" "}
                        {numberToCurrency(currentGood.buildingCost)}
                      </button>
                    )}
                    Total Buildings {location.buildings.length} with{" "}
                    {getTotalGoodsAmountByLocation(location)} {currentGood.name}
                    {isCurrentLocation && (
                      <button
                        onClick={() =>
                          dispatch({ type: "GATHER_GOODS", value: location })
                        }
                      >
                        Gather {currentGood.name}
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
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
                onClick={() =>
                  dispatch({ type: "BUY_MAX_GOOD", value: good.id })
                }
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
        {state.round < AMOUNT_OF_ROUNDS ? (
          <button
            onClick={() => {
              dispatch({ type: "INCREMENT_ROUND" });
            }}
          >
            Next Round
          </button>
        ) : (
          "Game Over"
        )}
      </div>
    </div>
  );
}
