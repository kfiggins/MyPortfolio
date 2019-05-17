import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ComponentMenuItem from "./ComponentMenuItem";

export default class ComponentMenu extends Component {
  render() {
    const Wrapper = styled.div`
      min-width: 20em;
      border-right: 2px #3e4654 solid;
      height: calc(100vh - 49px);
      position: relative;
      float: left;
      padding-top: 1em;
      text-align: center;
    `;

    const NonStyledLink = styled(Link)`
      text-decoration: none;
      color: #3e4654;

      &:hover {
        color: #3e4654;
        text-decoration: none;
      }
    `;

    const { components } = this.props;
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
}
