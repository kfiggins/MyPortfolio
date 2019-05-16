import React from "react";
import styled from "styled-components";

export default function BlogPlaceHolder() {
  const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 5vmin);
    color: #293241;
  `;
  return (
    <Header>
      <h1>Blog coming soon...</h1>
    </Header>
  );
}
