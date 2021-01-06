import React, { useEffect } from "react";

export default function HighScores() {
  useEffect(() => {
    const getHighScores = async () => {
      const data = await fetch(
        "https://238l6855mf.execute-api.us-east-2.amazonaws.com/prod/highscores"
      );
      const json = await data.json();
      console.log(json);
    };
    getHighScores();
    return () => {
      // cleanup
    };
  }, []);
  return (
    <div>
      <h1>High Scores</h1>
    </div>
  );
}
