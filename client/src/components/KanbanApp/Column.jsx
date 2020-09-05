import React from "react";
import styled from "styled-components";

import Button from "../shared/Button";
import Card from "./Card";

const Wrapper = styled.div`
  flex-grow: 1;
  max-width: 25%;
  &:first-child {
    margin-left: 25px;
  }
  margin-right: 25px;
`;

const ColumnBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Column({
  name,
  headerColor,
  cards,
  columnPosition,
  addCard,
  moveCard,
  deleteCard
}) {
  const ColumnTitle = styled.div`
    background-color: ${headerColor};
    height: 30px;
    text-align: center;
    color: white;
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;

  const handleAddCard = () => {
    // TODO: Add custom popup to handle new card
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
        <Button small inherit onClick={handleAddCard}>
          <i className="fas fa-plus" /> Add Card
        </Button>
      </ColumnTitle>
      <ColumnBody>
        {cards.map(card => (
          <Card card={card} key={card.id} moveCard={moveCard} deleteCard={deleteCard} />
        ))}
      </ColumnBody>
    </Wrapper>
  );
}
