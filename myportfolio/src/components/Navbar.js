import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  const Nav = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  `;

  const NavItem = styled.li`
    float: left;
  `;

  const StyledLink = styled(Link)`
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

    :hover {
      background-color: #111;
    }
  `;

  return (
    <Nav>
      <NavItem>
        <StyledLink to="/">Home</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/components">Components</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink>Blog</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink>Sites</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink>Contact</StyledLink>
      </NavItem>
    </Nav>
  );
}
