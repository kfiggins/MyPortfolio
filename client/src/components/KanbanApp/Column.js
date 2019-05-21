import React from "react";
import styled from "styled-components";

import Card from "./Card";

export default function Column({
  name,
  headerColor,
  cards,
  columnPostion,
  addCard,
  moveCardRight,
  moveCardLeft
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
    let text = prompt("test");
    const card = {
      title: text,
      position: columnPostion
    };
    addCard(card);
  };

  return (
    <Wrapper>
      <ColumnTitle>
        <h4>{name}</h4>
      </ColumnTitle>
      {cards.map(card => (
        <Card
          title={card.title}
          key={card.title}
          moveCardRight={moveCardRight}
          moveCardLeft={moveCardLeft}
          id={card.id}
        />
      ))}
      <button onClick={handleAddCard}>Add Card</button>
    </Wrapper>
  );
}
