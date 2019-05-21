import React from "react";

import styled from "styled-components";

export default function Card({ card, moveCard, deleteCard }) {
  const Wrapper = styled.div`
    text-align: center;
  `;
  const handleMoveCardRight = () => {
    moveCard(card.id, true);
  };

  const handleMoveCardLeft = () => {
    moveCard(card.id, false);
  };

  const handleDelete = () => {
    deleteCard(card.id);
  };

  return (
    <Wrapper>
      {card.position !== 1 && <button onClick={handleMoveCardLeft}>{`<`}</button>}
      <span>{card.title}</span>
      <button onClick={handleDelete}>X</button>
      {card.position !== 4 && <button onClick={handleMoveCardRight}>{`>`}</button>}
    </Wrapper>
  );
}
