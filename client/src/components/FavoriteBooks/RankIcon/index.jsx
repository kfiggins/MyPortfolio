import React from "react";
import { rankTypes } from "../data";
import { sharedFonts } from "../../../style/variables";

const getRankIconColor = (rank) => {
  if (!rank) return undefined;
  switch (rank) {
    case rankTypes.diamond:
      return "#b9f2ff";
    case rankTypes.gold:
      return "#FFD700";
    case rankTypes.silver:
      return "#aaa9ad";
    default:
      return "";
  }
};

export default function RankIcon({ rank }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div
        style={{
          ...sharedFonts.cardTitle,
          fontSize: "14px",
          marginRight: "8px",
        }}
      >
        {rank}
      </div>
      <i
        style={{ color: getRankIconColor(rank), fontSize: "24px" }}
        className="fas fa-dragon"
      ></i>
    </div>
  );
}
