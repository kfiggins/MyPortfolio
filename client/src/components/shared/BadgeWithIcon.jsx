import React from "react";
import styled from "styled-components";

import Badge from "./Badge";

const Wrapper = styled.div`
  position: relative;
`;

const Icon = styled.i`
  font-size: 25px;
`;

// TODO: add ways to resize icon and badge
export default function BadgeWithIcon({ value = 1, iconClass = "far fa-envelope" }) {
  const PositionBadge = styled.span`
    position: absolute;
    left: 1em;
    bottom: 1em;
  `;
  return (
    <Wrapper>
      <PositionBadge>
        <Badge fontSize="9px" background="red">
          {value}
        </Badge>
      </PositionBadge>
      <Icon className={iconClass} />
    </Wrapper>
  );
}
