import React, { useState, useEffect, useReducer } from "react";

export default function CreateBook() {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleSecretKeyPress = (event) => {
    if (event.ctrlKey && event.altKey && event.key === "c")
      setShowCreateForm(true);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleSecretKeyPress, false);
    return () => {
      document.removeEventListener("keydown", handleSecretKeyPress, false);
    };
  }, []);

  const [state, dispatch] = useReducer(
    (state, action) => ({ ...state, [action.key]: action.value }),
    { title: "" }
  );

  return showCreateForm ? (
    <>
      <div>You've unlocked the secret book adding section</div>
      {["title", "amazonId"].map((item) => (
        <>
          <label htmlFor={item}>{item}</label>
          <input
            id={item}
            onChange={(e) => dispatch({ key: item, value: e.target.value })}
            value={state[item]}
          />
        </>
      ))}
    </>
  ) : null;
}
