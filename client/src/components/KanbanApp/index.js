import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { generateId } from "../../utils/GenerateId";

import Column from "./Column";
const Wrapper = styled.div`
  text-align: center;
`;
const ColumnWrapper = styled.div`
  display: flex;
`;

export default function Kanban() {
  // Initial Columns
  const [columns, setColumns] = useState([
    {
      id: generateId(),
      title: "Bob",
      headerColor: "#3d5a80",
      columnPosition: 1
    },
    {
      id: generateId(),
      title: "Kyler",
      headerColor: "#98c1d9",
      columnPosition: 2
    },
    {
      id: generateId(),
      title: "Derek",
      headerColor: "#293241",
      columnPosition: 3
    },
    {
      id: generateId(),
      title: "George",
      headerColor: "#ee6c4d",
      columnPosition: 4
    }
  ]);

  // TODO: figure out how to handle colors and columnPosition to add and remove columns
  // const addColumn = () => {
  //   let column = {};
  //   let text = prompt("Title of new column?");
  //   column.title = text;
  //   column.id = generateId();
  //   column.headerColor = "#463";
  //   column.columnPosition = 5;
  //   setColumns([...columns, column]);
  // };

  // Initial Cards
  const [cards, setCard] = useState(
    JSON.parse(window.localStorage.getItem("cards")) || [
      { id: generateId(), title: "card1", position: 1 },
      { id: generateId(), title: "card2", position: 2 },
      { id: generateId(), title: "card3", position: 3 },
      { id: generateId(), title: "card4", position: 4 },
      { id: generateId(), title: "card5", position: 1 },
      { id: generateId(), title: "card6", position: 2 },
      { id: generateId(), title: "card7", position: 3 },
      { id: generateId(), title: "card8", position: 4 }
    ]
  );

  useEffect(() => {
    window.localStorage.setItem("cards", JSON.stringify(cards));
  });

  const addCard = card => {
    card.id = generateId();
    setCard([...cards, card]);
  };

  const deleteCard = id => {
    let result = window.confirm("Are you sure you want to delete this card?");
    if (!result) return;
    setCard(cards.filter(card => card.id !== id));
  };

  const moveCard = (id, moveRight) => {
    let card = cards.find(card => card.id === id);
    // TODO: find max column positon and min and use that instead of hardcoding number
    if (moveRight && card.position === 4) return;
    if (!moveRight && card.position === 1) return;
    const moveValue = moveRight ? 1 : -1;
    card.position = card.position + moveValue;
    setCard([...cards.filter(card => card.id !== id), card]);
  };

  return (
    <Wrapper>
      {/* TODO: finish adding columns */}
      {/* <button onClick={addColumn}>Add Column</button> */}
      <h1>
        <span role="img" aria-label="surfer">
          🏄‍♂️
        </span>{" "}
        Simple Kanban Board{" "}
        <span role="img" aria-label="cake">
          🍰
        </span>
      </h1>

      <ColumnWrapper>
        {columns.map(column => (
          <Column
            key={column.id}
            name={column.title}
            headerColor={column.headerColor}
            cards={cards.filter(
              card => card.position === column.columnPosition
            )}
            addCard={addCard}
            columnPosition={column.columnPosition}
            moveCard={moveCard}
            deleteCard={deleteCard}
          />
        ))}
      </ColumnWrapper>
    </Wrapper>
  );
}
