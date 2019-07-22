import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ComponentMenuItem from "./ComponentMenuItem";

const Wrapper = styled.div`
  min-width: 20em;
  border-right: 2px #3e4654 solid;
  height: calc(100vh - 49px);
  position: relative;
  float: left;
  text-align: center;
`;

const NonStyledLink = styled(Link)`
  text-decoration: none;
  color: #293241;

  &:hover {
    color: #293241;
    text-decoration: none;
  }
`;

export default function ComponentMenu({ components }) {
  return (
    <Wrapper>
      <NonStyledLink to={`/components/`}>
        <h1>Components</h1>
      </NonStyledLink>
      <div>
        {components.map(x => (
          <ComponentMenuItem key={x.name} name={x.name} />
        ))}
      </div>
    </Wrapper>
  );
}
