import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  position: relative;
  min-height: 3em;
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const LeftArrowButton = styled.div`
  padding: 0.1em 0.3em !important;
  cursor: pointer;
  position: absolute;
  left: 0;
  color: #e1e1e1;
`;

const RightArrowButton = styled.div`
  padding: 0.1em 0.3em !important;
  cursor: pointer;
  position: absolute;
  right: 0;
  color: #e1e1e1;
`;

const DeleteCardButton = styled.span`
  position: absolute;
  right: 43px;
  cursor: pointer;
  color: #b80000;
`;

const Title = styled.span`
  padding-right: 20px;
  max-width: 80%;
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
        <LeftArrowButton onClick={handleMoveCardLeft}>
          {<i className="fas fa-chevron-left fa-3x" />}
        </LeftArrowButton>
      )}
      <Title>{card.title}</Title>
      <DeleteCardButton danger onClick={handleDelete}>
        <i className="fas fa-times" />
      </DeleteCardButton>
      {card.position !== 4 && (
        <RightArrowButton onClick={handleMoveCardRight}>
          {<i className="fas fa-chevron-right fa-3x" />}
        </RightArrowButton>
      )}
    </Wrapper>
  );
}
