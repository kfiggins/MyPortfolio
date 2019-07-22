import React from "react";

import styled from "styled-components";
import Button from "../shared/Button";

const Wrapper = styled.div`
  text-align: center;
  position: relative;
`;

const LeftArrowButton = styled(Button)`
  position: absolute;
  left: 0;
  padding: 0.1em 0.3em !important;
`;

const RightArrowButton = styled(Button)`
  position: absolute;
  right: 0;
  padding: 0.1em 0.3em !important;
`;

const DeleteCardButton = styled.span`
  position: absolute;
  right: 25px;
  cursor: pointer;
`;

const Title = styled.span`
  padding-right: 20px;
`;

export default function Card({ card, moveCard, deleteCard }) {
  const handleMoveCardRight = () => {
    moveCard(card.id, true);
  };

  const handleMoveCardLeft = () => {
    moveCard(card.id, false);
  };

  const handleDelete = () => {
    deleteCard(card.id);
  };

  // TODO: When ability to add/remove columns is here. Get position from number of columns.
  return (
    <Wrapper>
      {card.position !== 1 && (
        <LeftArrowButton onClick={handleMoveCardLeft}>{`<`}</LeftArrowButton>
      )}
      <Title>{card.title}</Title>
      <DeleteCardButton danger onClick={handleDelete}>
        x
      </DeleteCardButton>
      {card.position !== 4 && (
        <RightArrowButton onClick={handleMoveCardRight}>{`>`}</RightArrowButton>
      )}
    </Wrapper>
  );
}
