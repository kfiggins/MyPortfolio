import React, { useState, useEffect, useReducer } from "react";

const createBookFields = [
  "title",
  "amazonImageLink",
  "amazonNestedImageSrc",
  "amazonBottomImageSrc",
  "categories",
  "description",
  "rank",
];

export default function CreateBook() {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleSecretKeyPress = (event) => {
    if (event.ctrlKey && event.altKey && event.key === "c")
      setShowCreateForm(true);
  };

  const handleSaveBook = async (state) => {
    let hasValidationError = false;
    createBookFields.forEach((field) => {
      if (!state[field].length > 0) hasValidationError = true;
    });
    if (hasValidationError) {
      console.log("Must fill out all of the fields");
    }
    await fetch(
      "https://nsu1exvweg.execute-api.us-east-2.amazonaws.com/default/favoriteBookList",
      {
        method: "POST",
        body: JSON.stringify({
          ...state,
          categories: state.categories.split(","),
        }),
      }
    );
    setShowCreateForm(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleSecretKeyPress, false);
    return () => {
      document.removeEventListener("keydown", handleSecretKeyPress, false);
    };
  }, []);

  const [state, dispatch] = useReducer(
    (state, action) => ({ ...state, [action.key]: action.value }),
    {
      title: "",
      amazonImageLink: "",
      amazonNestedImageSrc: "",
      amazonBottomImageSrc: "",
      categories: "",
      description: "",
      rank: "",
    }
  );

  return showCreateForm ? (
    <>
      <div>You've unlocked the secret book adding section</div>
      {createBookFields.map((item) => (
        <>
          <label htmlFor={item}>{item}</label>
          <input
            id={item}
            onChange={(e) => dispatch({ key: item, value: e.target.value })}
            value={state[item]}
          />
        </>
      ))}
      <button onClick={() => handleSaveBook(state)}>Save</button>
    </>
  ) : null;
}
