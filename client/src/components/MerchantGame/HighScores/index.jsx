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
    <div>
      <h1>Stats</h1>
      <p>
        You are the {getOrdinalSuffixWithNumber(highScores.Count)} person to
        play this game.
      </p>
      <p>
        Your total wealth at the end of {AMOUNT_OF_ROUNDS} weeks was{" "}
        {finalScore && numberToCurrency(Number(finalScore))}
      </p>
      <p>
        The average wealth attained across all players of Middle Earth Merchant
        is {numberToCurrency(Number(highScores.Average))}
      </p>
      <h1>High Scores</h1>
      <ol>
        {highScores &&
          highScores.Items &&
          highScores.Items.map((highScore) => (
            <li>
              Name: {highScore.name} Score:{" "}
              {numberToCurrency(Number(highScore.score))}
              {/* Name: {highScore.name} Score: {numberToCurrency(highScore.score)} */}
            </li>
          ))}
      </ol>
    </div>
  );
}
