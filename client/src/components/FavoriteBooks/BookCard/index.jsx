import React from "react";
import { sharedFonts } from "../../../style/variables";

export default function BookCard({ book }) {
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
        <div>
          <img style={{ width: "100px" }} src={book.image} />
        </div>
        <div>
          <div style={sharedFonts.cardTitle}>{book.title}</div>
          <div style={sharedFonts.cardBody}>description</div>
        </div>
        <div>Rank</div>
      </div>
      <div>Categories</div>
    </div>
  );
}
