import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import ButtonExample from "../componentLibrary/ButtonExample";
import ComponentMenu from "../componentLibrary/ComponentMenu";
import ComponentHome from "../componentLibrary/ComponentHome";
import FieldExample from "../componentLibrary/FieldExample";
import HideShowExample from "../componentLibrary/HideShowExample";
import BadgeExample from "../componentLibrary/BadgeExample";

const Wrapper = styled.div`
  display: flex;
  padding: 1em 2em;
`;

// TODO: Think about a better way to get component menu titles.
const componentMenu = [
  { name: "Button" },
  { name: "ShowHide" },
  { name: "Field" },
  { name: "Badge" },
  { name: "More Coming Soon" }
];

export default function Components() {
  return (
    <Fragment>
      <ComponentMenu components={componentMenu} />
      <Wrapper>
        <Switch>
          <Route exact path="/components" component={ComponentHome} />
          <Route path="/components/Button" component={ButtonExample} />
          <Route path="/components/ShowHide" component={HideShowExample} />
          <Route path="/components/Field" component={FieldExample} />
          <Route path="/components/Badge" component={BadgeExample} />
        </Switch>
      </Wrapper>
    </Fragment>
  );
}
