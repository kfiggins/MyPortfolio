import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import ComponentMenu from "./ComponentMenu";
import ComponentHome from "./ComponentHome";

// Components
import HideShowExample from "./HideShowExample";

export default class Components extends Component {
  render() {
    const Wrapper = styled.div`
      display: flex;
      padding: 1em;
    `;
    return (
      <Fragment>
        <ComponentMenu />
        <Wrapper>
          <Route exact path="/components" component={ComponentHome} />
          <Route path="/components/HideShow" component={HideShowExample} />
        </Wrapper>
      </Fragment>
    );
  }
}
