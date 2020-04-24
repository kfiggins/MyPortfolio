import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { sharedColors } from "../style/variables";

// Deprecated 4/21/2020 No longer using but keeping in case we want for desktop menu.

const Nav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
const NavItem = styled.div`
  float: left;
  transition: all 0.2s;
  text-align: center;
  padding: 14px 16px;

  &:hover {
    background-color: ${sharedColors.secondary};
  }

  &:active {
    transform: scale(1.05);
    background-color: ${sharedColors.secondaryDark};
  }
`;

const StyledLink = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;
`;

// TODO: look at combining the two styles.
const StyledAnchor = styled.a`
  display: block;
  color: white;

  text-decoration: none;
`;
const NavWrapper = styled.div`
  height: 50px;
  position: sticky;
  top: 0;
  background-color: #293241;
  display: flex;
`;

const LeftNav = styled.div`
  flex-grow: 2;
`;

const RightNav = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`;

const MenuIcon = styled.i`
  font-size: 30px;
`;

const MenuIconWrapper = styled.div`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 25px;
  color: white;
  transition: all 0.2s;

  &:hover {
    color: ${sharedColors.secondary};
  }

  &:active {
    transform: scale(1.15);
    color: ${sharedColors.secondaryDark};
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  z-index: 150;
`;

const MobileMenuItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MobileMenuItem = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 50px;
`;

export const Navbar = () => {
  return (
    <NavWrapper>
      <LeftNav>
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
      </LeftNav>
      <RightNav>
        {" "}
        <NavItem>
          <StyledAnchor
            target="_"
            href="https://www.linkedin.com/in/kylerfiggins"
          >
            Contact
          </StyledAnchor>
        </NavItem>
      </RightNav>
    </NavWrapper>
  );
};

export const MobileNavbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(true);
  return (
    <NavWrapper style={{ justifyContent: "flex-end", alignItems: "center" }}>
      <MenuIconWrapper onClick={() => setShowMobileMenu(!showMobileMenu)}>
        <MenuIcon className="fas fa-bars"></MenuIcon>
      </MenuIconWrapper>
      {showMobileMenu && (
        <MobileMenu onClick={() => setShowMobileMenu(false)}>
          <MobileMenuItemWrapper>
            <MobileMenuItem to="/">Home</MobileMenuItem>
          </MobileMenuItemWrapper>
          <MobileMenuItemWrapper>
            <MobileMenuItem to="/components">Components</MobileMenuItem>
          </MobileMenuItemWrapper>
          <MobileMenuItemWrapper>
            <MobileMenuItem to="/todo">To-Do App</MobileMenuItem>
          </MobileMenuItemWrapper>
          <MobileMenuItemWrapper>
            <MobileMenuItem to="/kanban">Kanban App</MobileMenuItem>
          </MobileMenuItemWrapper>
          <MobileMenuItemWrapper>
            <MobileMenuItem to="/gitHubRepo">GitHub Repo App</MobileMenuItem>
          </MobileMenuItemWrapper>
          <MobileMenuItemWrapper>
            <MobileMenuItem to="/blog">Blog</MobileMenuItem>
          </MobileMenuItemWrapper>
        </MobileMenu>
      )}
    </NavWrapper>
  );
};
