import React from "react";
import styled from "styled-components";
import Button from "../shared/Button";

import Card from "./Card";

export default function Column({
  name,
  headerColor,
  cards,
  columnPosition,
  addCard,
  moveCard,
  deleteCard
}) {
  const Wrapper = styled.div`
    flex-grow: 1;
    &:first-child {
      margin-left: 25px;
    }
    margin-right: 25px;
  `;

  const ColumnTitle = styled.div`
    background-color: ${headerColor};
    height: 30px;
    text-align: center;
    color: white;
    margin-top: 5px;
  `;

  const handleAddCard = () => {
    let text = prompt("Add text to create a card.");
    if (text === null || text === "") return;
    const card = {
      title: text,
      position: columnPosition
    };
    addCard(card);
  };

  return (
    <Wrapper>
      <ColumnTitle>
        <h4>{name}</h4>
      </ColumnTitle>
      {cards.map(card => (
        <Card card={card} key={card.id} moveCard={moveCard} deleteCard={deleteCard} />
      ))}
      <br />
      <Button small success onClick={handleAddCard}>
        Add Card
      </Button>
    </Wrapper>
  );
}
