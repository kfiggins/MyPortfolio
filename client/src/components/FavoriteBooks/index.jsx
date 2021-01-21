import React, { useState, useReducer, useEffect } from "react";
import "react-toggle/style.css";
import Toggle from "react-toggle";
import ReactTooltip from "react-tooltip";

import { sharedFonts, screenSizeBreakPoints } from "../../style/variables";
import CreateBook from "./CreateBook";
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

//TODO: combine these two objects into rank types. Change from string into Config
const initialFilters = {
  [rankTypes.diamond]: true,
  [rankTypes.gold]: true,
  [rankTypes.silver]: true,
};

const rankTypeToolTips = {
  [rankTypes.diamond]: "Books I will regularly reference",
  [rankTypes.gold]: "Books I will read once every few years",
  [rankTypes.silver]: "Books worth reading at least once",
};

const applyFilters = (data, state) => {
  return data.filter((item) => {
    // TODO: this is not the greatest filtering. Improve!
    let keepItem = false;
    Object.entries(state).map(([key, value]) => {
      if (rankTypes[item.rank] === key && value) keepItem = true;
      return null;
    });
    return keepItem;
  });
};

export default function BookRatings() {
  const [state, dispatch] = useReducer(filtersReducer, initialFilters);
  const [booksData, setBooksData] = useState([]);
  const isMobileScreen = useMediaQuery(screenSizeBreakPoints.small);

  useEffect(() => {
    (async () => {
      const result = await fetch(
        "https://nsu1exvweg.execute-api.us-east-2.amazonaws.com/default/favoriteBookList"
      );
      const resultJson = await result.json();
      setBooksData(resultJson ? resultJson.Items : []);
    })();
  }, []);
  const filteredData = applyFilters(booksData, state);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CreateBook />
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
              data-tip
              data-for={value}
            >
              <ReactTooltip id={value} place="top" type="dark" effect="float">
                <span>{rankTypeToolTips[value]}</span>
              </ReactTooltip>
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
                <RankIcon rank={key} />
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
