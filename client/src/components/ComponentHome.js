import React from "react";
import styled from "styled-components";

export default function ComponentHome() {
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 50em;
  `;

  return (
    <Wrapper>
      <div>
        <h1>Welcome to my Component Library 😎</h1>
        <p>
          🐱‍👤 I'm working on building a library of reusable components. <br /> With each
          component I'm planning on adding tutorials on how to use the component and
          explain how I am making them.🐱‍👤
        </p>
        <p>⬅ Get started by clicking on a component in the menu to the left. </p>
        <p>I'm going to try really hard to not overuse emoji's.🤪</p>
      </div>
    </Wrapper>
  );
}
