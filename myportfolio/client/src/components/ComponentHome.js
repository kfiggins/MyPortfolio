import React from "react";
import styled from "styled-components";

export default function ComponentHome() {
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <Wrapper>
      <div>
        <h1>My Component Library</h1>
        <ul>
          <li>my first thing</li>
          <li>my second thing</li>
          <li>my third thing</li>
          <li>my fourth thing</li>
        </ul>
      </div>
    </Wrapper>
  );
}
