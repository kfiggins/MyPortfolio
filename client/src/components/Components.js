import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import ComponentMenu from "./ComponentMenu";
import ComponentHome from "./ComponentHome";

// Components
import HideShowExample from "./HideShowExample";
import FieldExample from "./FieldExample";
import ButtonExample from "./ButtonExample";

export default class Components extends Component {
  render() {
    const Wrapper = styled.div`
      display: flex;
      padding: 1em 2em;
    `;

    const componentMenu = [
      { name: "Button" },
      { name: "ShowHide" },
      { name: "Field" },
      { name: "More Coming Soon" }
    ];

    return (
      <Fragment>
        <ComponentMenu components={componentMenu} />
        <Wrapper>
          <Switch>
            <Route exact path="/components" component={ComponentHome} />
            <Route path="/components/Button" component={ButtonExample} />
            <Route path="/components/ShowHide" component={HideShowExample} />
            <Route path="/components/Field" component={FieldExample} />
          </Switch>
        </Wrapper>
      </Fragment>
    );
  }
}
