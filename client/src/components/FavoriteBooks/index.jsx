import React from "react";
import "react-toggle/style.css";
import Toggle from "react-toggle";
import ReactTooltip from "react-tooltip";

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
                <RankIcon rank={value} />
              </label>
            </div>
          );
        })}
      </div>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Options
            {/* <!-- Heroicon name: chevron-down --> */}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        {/* 
  <!--
    Dropdown panel, show/hide based on dropdown state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Account settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Support
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              License
            </a>
            <form method="POST" action="#">
              <button
                type="submit"
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>
      ;
      {filteredData.map((book, index) => (
        <BookCard key={index} book={book} isMobileScreen={isMobileScreen} />
      ))}
    </div>
  );
}
