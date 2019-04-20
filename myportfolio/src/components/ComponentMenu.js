import React, { Component } from "react";
import styled from "styled-components";
import HideShow from "./shared/HideShow";

import ComponentMenuItem from "./ComponentMenuItem";

export default class ComponentMenu extends Component {
  render() {
    const Wrapper = styled.div`
      min-width: 15em;
      border-right: 1px #bebebe solid;
      height: calc(100vh - 49px);
      position: relative;
      float: left;
      padding-left: 15px;
    `;

    const components = [
      { name: "HideShow" },
      { name: "2nd Component" },
      { name: "3rd Component" },
      { name: "4th Component" },
      { name: "5th Component" }
    ];

    return (
      <Wrapper>
        <h3>Component Library</h3>
        <ul>
          {components.map(x => (
            <ComponentMenuItem key={x.name} name={x.name} />
          ))}
        </ul>
      </Wrapper>
    );
  }
}
