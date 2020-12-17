import React from "react";
import "react-toggle/style.css";
import Toggle from "react-toggle";

import { sharedFonts, screenSizeBreakPoints } from "../../style/variables";
import BookCard from "./BookCard";
import { data, rankTypes } from "./data";
import RankIcon from "./RankIcon";
import { useMediaQuery } from "../../hooks/useMediaQuery";

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
  const isMobileScreen = useMediaQuery(screenSizeBreakPoints.small);

  const filteredData = applyFilters(data, state);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <h1>My Book List</h1>
      </div>
      <div style={{ ...sharedFonts.cardBody, marginBottom: "8px" }}>
        As an Amazon Associate I earn from qualifying purchases.
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: isMobileScreen ? "column" : "row",
          justifyContent: "center",
          width: isMobileScreen ? undefined : "100%",
          maxWidth: "750px",
        }}
      >
        {Object.entries(rankTypes).map(([key, value]) => {
          return (
            <div
              key={key}
              style={{ display: "flex", padding: "8px", paddingRight: "16px" }}
            >
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
        <BookCard key={index} book={book} isMobileScreen={isMobileScreen} />
      ))}
    </div>
  );
}
