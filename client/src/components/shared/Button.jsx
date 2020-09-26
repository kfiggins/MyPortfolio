import React from "react";
import styled from "styled-components";
import { sharedColors } from "../../style/variables";

export default function Button({
  children,
  primary,
  success,
  danger,
  warning,
  info,
  small,
  inherit,
  ...props
}) {
  // Default
  let backgrondColor = sharedColors.default;
  let boxShadowColor = "#d5d5d5";
  let hoverColor = "#c9c9c9";
  let padding = "0.55rem";

  if (small) {
    padding = "0.2rem";
  }

  if (inherit) {
    backgrondColor = "inherit";
    boxShadowColor = "inherit";
    hoverColor = "inherit";
  }

  if (primary) {
    backgrondColor = sharedColors.primary;
    boxShadowColor = "#696f7a";
    hoverColor = "#3e4654";
  }

  if (success) {
    backgrondColor = sharedColors.success;
    boxShadowColor = "#99a990";
    hoverColor = "#667e59";
  }

  if (danger) {
    backgrondColor = sharedColors.danger;
    boxShadowColor = "#cd4c4c";
    hoverColor = "#bf1919";
  }

  if (warning) {
    backgrondColor = sharedColors.warning;
    boxShadowColor = "#ecb44c";
    hoverColor = "#e79e19";
  }

  if (info) {
    backgrondColor = sharedColors.info;
    boxShadowColor = "#9fabc2";
    hoverColor = "#8393b0";
  }

  const StyledButton = styled.button`
    background-color: ${backgrondColor};
    color: white;
    padding: ${padding};
    cursor: pointer;
    border: 2px solid transparent;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 1px ${boxShadowColor};
    }

    &:hover {
      background-color: ${hoverColor};
      text-decoration: none;
    }
  `;
  return <StyledButton {...props}>{children}</StyledButton>;
}
