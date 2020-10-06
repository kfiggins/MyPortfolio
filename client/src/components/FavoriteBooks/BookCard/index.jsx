import React from "react";
import { sharedFonts, sharedColors } from "../../../style/variables";
import { rankTypes } from "../index";

export default function BookCard({ book }) {
  const getIconColor = (rank) => {
    if (!rank) return undefined;
    switch (rank) {
      case rankTypes.diamond:
        return "#b9f2ff";
      case rankTypes.gold:
        return "#FFD700";
      case rankTypes.silver:
        return "#aaa9ad";
      case rankTypes.bronze:
        return "#cd7f32";
    }
  };
  console.log(getIconColor(book.rank));

  return (
    <div
      style={{
        maxWidth: "700px",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        margin: "20px 0",
        width: "100%",
        borderRadius: "5px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ padding: "8px" }}>
          {/* <img style={{ width: "100px" }} src={book.image} /> */}
          {book.image}
        </div>
        <div>
          <div style={{ ...sharedFonts.cardTitle, padding: "8px" }}>
            {book.title}
          </div>
          <div
            style={{
              ...sharedFonts.cardBody,
              margin: "8px",
              display: "-webkit-box",
              "-webkit-line-clamp": "5",
              "-webkit-box-orient": "vertical",
              overflow: "hidden",
            }}
          >
            {book.description}
          </div>
        </div>
        <div>
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
              {book.rank}
            </div>
            <i
              style={{ color: getIconColor(book.rank), fontSize: "24px" }}
              className="fas fa-dragon"
            ></i>
          </div>
        </div>
      </div>
      <div style={{ ...sharedFonts.cardBody, padding: "8px 0 0 8px" }}>
        {book.categories &&
          book.categories.map((category, index) => (
            <span style={{ color: sharedColors.linkBlue, cursor: "pointer" }}>
              {category}
              {book.categories.length - 1 !== index && ", "}
            </span>
          ))}
      </div>
    </div>
  );
}
