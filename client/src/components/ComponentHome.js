import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50em;
`;
export default function ComponentHome() {
  return (
    <Wrapper>
      <div>
        <h1>
          Welcome to my Component Library{" "}
          <span role="img" aria-label="cool">
            😎
          </span>
        </h1>
        <p>
          <span role="img" aria-label="ninjaCat">
            🐱‍👤
          </span>{" "}
          I'm working on building a library of reusable components. <br /> With each component
          I'm planning on adding tutorials on how to use the component and explain how I am
          making them.
          <span role="img" aria-label="ninjaCat">
            🐱‍👤
          </span>
        </p>
        <p>⬅ Get started by clicking on a component in the menu to the left. </p>
        <p>
          I'm going to try really hard to not overuse emoji's.
          <span role="img" aria-label="crazy">
            🤪
          </span>
        </p>
      </div>
    </Wrapper>
  );
}
