import React, { Fragment } from "react";
import styled from "styled-components";

const Label = styled.label`
  display: block;
`;

const Input = styled.input`
  padding: 7px 4px;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin: 7px 0;

  :focus {
    box-shadow: 0 0 1pt 0 red;
  }
`;

export default function TextField({ label, name, ...inputProps }) {
  return (
    <Fragment>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input id={name} type="text" {...inputProps} />
    </Fragment>
  );
}
