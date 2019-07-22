import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
    background-color: #ee6c4d;
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
    background-color: #ee6c4d;
  }
`;
export default function Navbar() {
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
        <StyledLink to="/kanban">Kanban App</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/gitHubRepo">GitHub Repo App</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/blog">Blog</StyledLink>
      </NavItem>
      <NavItem>
        <StyledAnchor target="_" href="https://www.linkedin.com/in/kylerfiggins">
          Contact
        </StyledAnchor>
      </NavItem>
    </Nav>
  );
}
