import React, { useReducer } from "react";
import { numberToCurrency } from "../../../utils/currencyHelpers";
import ReactTooltip from "react-tooltip";

// import mainMap from "../../../assets/merchantGame/map.jpg";
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
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <h2>Week {state.round}</h2>
          <h2>Bank: {numberToCurrency(state.bankAmount)}</h2>
        </div>
        {/* <img
          src={mainMap}
          style={{ maxWidth: "600px", borderRadius: "50px" }}
        /> */}
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {state.locations.map((location) => {
            const isCurrentLocation = state.currentLocationId === location.id;
            const currentGood = getGoodByLocation(location);
            return (
              <div
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  padding: "24px 10px",
                  margin: "16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
                key={location.id}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "28px",
                    marginBottom: "8px",
                  }}
                  data-tip
                  data-for={isCurrentLocation ? "current" : ""}
                >
                  {isCurrentLocation && (
                    <>
                      <ReactTooltip
                        id={"current"}
                        place="top"
                        type="dark"
                        effect="float"
                      >
                        <span>Current Location</span>
                      </ReactTooltip>
                      <span title="Current Location">⭐</span>
                    </>
                  )}
                  {location.name}
                </div>
                {state.nextLocationId === location.id
                  ? "Traveling"
                  : !isCurrentLocation && (
                      <div style={{ marginBottom: "8px" }}>
                        <button
                          onClick={() =>
                            dispatch({ type: "TRAVEL", value: location.id })
                          }
                        >
                          Travel
                        </button>
                      </div>
                    )}
                <div style={{ marginBottom: "8px" }}>
                  Total Buildings {location.buildings.length} with{" "}
                  {getTotalGoodsAmountByLocation(location)} {currentGood.name}
                </div>
                <div style={{ display: "flex" }}>
                  {isCurrentLocation && (
                    <div style={{ marginRight: "15px" }}>
                      <button
                        onClick={() => dispatch({ type: "BUY_BUILDING" })}
                      >
                        <div>Buy {currentGood.buildingName}</div>
                        <div>{numberToCurrency(currentGood.buildingCost)}</div>
                      </button>
                    </div>
                  )}
                  {isCurrentLocation &&
                    getTotalGoodsAmountByLocation(location) > 0 && (
                      <div>
                        <button
                          onClick={() =>
                            dispatch({ type: "GATHER_GOODS", value: location })
                          }
                        >
                          <div>
                            Gather {getTotalGoodsAmountByLocation(location)}
                          </div>
                          <div>{currentGood.name}</div>
                        </button>
                      </div>
                    )}
                </div>
              </div>
            );
          })}
        </div>
        <h3>Resources</h3>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {goods.map((good) => {
            return (
              <div
                key={good.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "0 25px 0 25px",
                }}
              >
                <div style={{ marginBottom: "8px" }}>
                  <b>{good.name}.</b> Current Price:{" "}
                  {numberToCurrency(currentLocation.goodsPrices[good.id])}{" "}
                </div>
                <div style={{ marginBottom: "8px" }}>
                  <button
                    onClick={() =>
                      dispatch({ type: "BUY_GOOD", value: good.id })
                    }
                    style={{ marginRight: "8px" }}
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
                </div>
                <div style={{ marginBottom: "8px" }}>
                  <button
                    onClick={() =>
                      dispatch({ type: "SELL_GOOD", value: good.id })
                    }
                    style={{ marginRight: "8px" }}
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
                </div>
                <div style={{ marginBottom: "8px" }}>
                  <b>
                    Owned {good.name}: {state.ownedGoods[good.id]}
                  </b>
                </div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "8px",
          }}
        >
          {state.round < AMOUNT_OF_ROUNDS ? (
            <button
              onClick={() => {
                dispatch({ type: "INCREMENT_ROUND" });
              }}
            >
              <span style={{ fontSize: "20px" }}>Next Round</span>
            </button>
          ) : (
            <button>Game Over</button>
          )}
        </div>
      </div>
    </div>
  );
}
