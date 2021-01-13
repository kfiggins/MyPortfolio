import React, { useEffect, useState } from "react";
import { numberToCurrency } from "../../../utils/currencyHelpers";
import { getOrdinalSuffixWithNumber } from "../../../utils/numberHelpers";

import { AMOUNT_OF_ROUNDS } from "../Main/initialState";
import { useParams } from "react-router-dom";

export default function HighScores() {
  const [highScores, setHighScores] = useState([]);
  const { finalScore } = useParams();
  useEffect(() => {
    const getHighScores = async () => {
      const data = await fetch(
        "https://238l6855mf.execute-api.us-east-2.amazonaws.com/prod/highscores"
      );
      const json = await data.json();
      if (json) setHighScores(json);
    };
    getHighScores();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
          borderRadius: "5px",
          padding: "24px 10px",
          margin: "16px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "500px",
        }}
      >
        <h1>Stats</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p>
            <div style={{ fontWeight: "700", fontSize: "24px" }}>
              {getOrdinalSuffixWithNumber(highScores.Count)}
            </div>{" "}
            Person/bot to play this game.
          </p>
          <p>
            <div style={{ fontWeight: "700", fontSize: "24px" }}>
              {finalScore && numberToCurrency(Number(finalScore))}
            </div>{" "}
            Total wealth at the end of {AMOUNT_OF_ROUNDS} weeks
          </p>
          <p>
            <div style={{ fontWeight: "700", fontSize: "24px" }}>
              {numberToCurrency(Number(highScores.Average))}
            </div>{" "}
            Average wealth attained across all players
          </p>
        </div>
      </div>
      <div
        style={{
          boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
          borderRadius: "5px",
          padding: "24px 10px",
          margin: "16px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "500px",
        }}
      >
        <h1>High Scores</h1>
        <div>
          {highScores &&
            highScores.Items &&
            highScores.Items.map((highScore, index) => (
              <div style={{ fontSize: 28 - index * 2 + "px" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ marginRight: "24px" }}>{highScore.name}</div>
                  <div>
                    <b>{numberToCurrency(Number(highScore.score))}</b>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
