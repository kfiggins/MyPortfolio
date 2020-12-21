import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { sharedColors } from "../../style/variables";

const MenuItem = styled(Link)`
  border-bottom: ${sharedColors.lightGray} solid 1px;
  padding: 1em;
  display: block;
  text-decoration: none;
  font-size: 1.2em;
  color: ${sharedColors.primary};

  &:first-child {
    border-top: ${sharedColors.lightGray} solid 1px;
  }

  &:hover {
    background-color: ${sharedColors.secondary};
    color: white;
    text-decoration: none;
  }
`;

export default function ComponentMenuItem({ name }) {
  return <MenuItem to={`/components/${name}`}>{name}</MenuItem>;
}
