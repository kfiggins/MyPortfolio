import React from "react";
import { sharedFonts, sharedColors } from "../../../style/variables";
import RankIcon from "../RankIcon";

const bookDescription = (description) => {
  return (
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
      {description}
    </div>
  );
};

const bookCategories = (categories) => {
  return (
    <div style={{ ...sharedFonts.cardBody }}>
      {categories &&
        categories.map((category, index) => (
          <span
            key={index}
            style={{ color: sharedColors.linkBlue, cursor: "pointer" }}
          >
            {category}
            {categories.length - 1 !== index && ", "}
          </span>
        ))}
    </div>
  );
};

export default function BookCard({ book, isMobileScreen }) {
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
      {isMobileScreen && (
        <>
          <div
            style={{
              ...sharedFonts.cardTitle,
              padding: "8px",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {book.title}
          </div>
          <div
            style={{
              padding: "8px",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {book.image}
          </div>
          {bookDescription(book.description)}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {bookCategories(book.categories)}
            <div>
              <RankIcon rank={book.rank} />
            </div>
          </div>
        </>
      )}
      {!isMobileScreen && (
        <>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ padding: "8px" }}>{book.image}</div>
            <div>
              <div style={{ ...sharedFonts.cardTitle, padding: "8px" }}>
                {book.title}
              </div>
              {bookDescription(book.description)}
            </div>
            <div>
              <RankIcon rank={book.rank} />
            </div>
          </div>
          {bookCategories(book.categories)}
        </>
      )}
    </div>
  );
}
