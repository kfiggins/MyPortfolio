import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuItem = styled(Link)`
  border-bottom: #d8dadc solid 1px;
  padding: 1em;
  display: block;
  text-decoration: none;
  font-size: 1.2em;
  color: #3e4654;

  &:first-child {
    border-top: #d8dadc solid 1px;
  }

  &:hover {
    background-color: #fbfbfb;
    color: #3e4654;
    text-decoration: none;
  }
`;

export default function ComponentMenuItem({ name }) {
  return <MenuItem to={`/components/${name}`}>{name}</MenuItem>;
}
