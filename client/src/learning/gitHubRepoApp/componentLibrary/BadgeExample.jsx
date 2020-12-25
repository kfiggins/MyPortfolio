import React from "react";
import styled from "styled-components";
import { sharedColors } from "../../style/variables";

import Badge from "../shared/Badge";
import BadgeWithIcon from "../shared/BadgeWithIcon";

const BadgeWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default function BadgeExample() {
  return (
    <div>
      <h1>Badge Example</h1>
      <BadgeWrapper>
        <Badge background={sharedColors.info} fontSize="40px">
          44
        </Badge>
        <Badge fontSize="30px">8</Badge>
        <Badge background={sharedColors.primary} fontSize="20px">
          7
        </Badge>
        <Badge background={sharedColors.secondary} fontSize="10px">
          1
        </Badge>
      </BadgeWrapper>
      <h1>Icon with Badge Example</h1>
      <BadgeWrapper>
        <BadgeWithIcon value={2} iconClass="far fa-comment" fontSize="20px" />
        <BadgeWithIcon value={5} iconClass="far fa-sticky-note" />
        <BadgeWithIcon value={12} iconClass="far fa-arrow-alt-circle-up" />
        <BadgeWithIcon />
      </BadgeWrapper>
    </div>
  );
}
