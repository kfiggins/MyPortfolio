import React from "react";
import styled from "styled-components";

import TextField from "./shared/TextField";

const Wrapper = styled.div`
  width: 50%;
`;

export default function FieldExample() {
  return (
    <Wrapper>
      <h1>Field Example</h1>
      <TextField name="name" label="Name" />
      <TextField name="hobby" label="Hobby" />
      <TextField name="favoriteFood" label="Favorite Food" />
    </Wrapper>
  );
}
