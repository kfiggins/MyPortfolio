import React from "react";
import styled from "styled-components";

export default function Button({
  children,
  primary,
  success,
  danger,
  warning,
  info,
  ...props
}) {
  //TODO change the default to a light colored button
  // Default - Primary
  let backgrondColor = "#293241";
  let boxShadowColor = "#696f7a";
  let hoverColor = "#3e4654";

  if (success) {
    backgrondColor = "#567047";
    boxShadowColor = "#99a990";
    hoverColor = "#667e59";
  }

  if (danger) {
    backgrondColor = "#b80000";
    boxShadowColor = "#cd4c4c";
    hoverColor = "#bf1919";
  }

  if (warning) {
    backgrondColor = "#e59400";
    boxShadowColor = "#ecb44c";
    hoverColor = "#e79e19";
  }

  if (info) {
    backgrondColor = "#7688a8";
    boxShadowColor = "#9fabc2";
    hoverColor = "#8393b0";
  }

  const StyledButton = styled.button`
    background-color: ${backgrondColor};
    color: white;
    padding: 0.55rem;
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
