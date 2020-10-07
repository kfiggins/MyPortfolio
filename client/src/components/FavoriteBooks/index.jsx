import React from "react";

import { sharedFonts, sharedColors } from "../../style/variables";
import BookCard from "./BookCard";
import { data, rankTypes } from "./data";
import RankIcon from "./RankIcon";
import Toggle from "react-toggle";
import "react-toggle/style.css";

const filtersReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, [action.key]: action.value };

    default:
      break;
  }
};

const initialFilters = {
  [rankTypes.diamond]: true,
  [rankTypes.gold]: true,
  [rankTypes.silver]: true,
  [rankTypes.bronze]: true,
};

const applyFilters = (data, state) => {
  return data.filter((item) => {
    // TODO: this is not the greatest filtering. Improve!
    let keepItem = false;
    Object.entries(state).map(([key, value]) => {
      if (item.rank === key && value) keepItem = true;
    });
    return keepItem;
  });
};

export default function BookRatings() {
  const [state, dispatch] = React.useReducer(filtersReducer, initialFilters);

  const filteredData = applyFilters(data, state);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={sharedFonts.cardBody}>
        As an Amazon Associate I earn from qualifying purchases.
      </div>
      <div style={{ display: "flex" }}>
        {Object.entries(rankTypes).map(([key, value]) => {
          return (
            <div key={key} style={{ display: "flex", padding: "8px" }}>
              <Toggle
                id="testToggle"
                defaultChecked={state[value]}
                onChange={() =>
                  dispatch({
                    type: "TOGGLE",
                    key: value,
                    value: !state[value],
                  })
                }
              />
              <label style={{ marginLeft: "8px" }} htmlFor="testToggle">
                <RankIcon rank={value} />
              </label>
            </div>
          );
        })}
      </div>
      {filteredData.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}
