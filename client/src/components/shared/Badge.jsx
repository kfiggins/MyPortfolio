import React from "react";
import styled from "styled-components";
import { sharedColors } from "../../style/variables";

const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Badge({
  background = sharedColors.success,
  color = "white",
  fontSize = "12px",
  children,
}) {
  const BadgeCircle = styled.span`
    display: inline-block;
    min-width: 1.3em;
    padding: 0.2em;
    border-radius: 50%;
    font-size: ${fontSize};
    text-align: center;
    background: ${background};
    color: ${color};
  `;
  return (
    <Wrapper>
      <BadgeCircle>{children}</BadgeCircle>
    </Wrapper>
  );
}
