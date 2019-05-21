import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  const Nav = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #293241;
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
      background-color: #3e4654;
    }
  `;

  // TODO: look at combining the two styles.
  const StyledAnchor = styled.a`
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

    :hover {
      background-color: #3e4654;
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
        <StyledLink to="/todo">To-Do App</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/kanban">Kanban</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/blog">Blog</StyledLink>
      </NavItem>
      <NavItem>
        <StyledAnchor href="https://www.linkedin.com/in/kylerfiggins">
          Contact
        </StyledAnchor>
      </NavItem>
    </Nav>
  );
}
