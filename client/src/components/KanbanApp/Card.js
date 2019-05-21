import React from "react";

import styled from "styled-components";

export default function Card({ title, moveCardRight, moveCardLeft, id }) {
  const Wrapper = styled.div`
    text-align: center;
  `;
  const handleMoveCardRight = () => {
    moveCardRight(id);
  };

  const handleMoveCardLeft = () => {
    moveCardLeft(id);
  };

  return (
    <Wrapper>
      <button onClick={handleMoveCardLeft}>{`<`}</button>
      <span>{title}</span>
      <button onClick={handleMoveCardRight}>{`>`}</button>
    </Wrapper>
  );
}
