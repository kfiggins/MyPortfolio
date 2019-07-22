import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  color: #293241;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 5vmin);
`;

const Body = styled.div`
  font-size: calc(8px + 2vmin);
`;

const Footer = styled.div`
  font-size: calc(12px + 2vmin);
`;

const SocialIcon = styled.i`
  color: #293241;
  margin: 10px;
  &:hover {
    color: #ee6c4d;
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <Header>
        <h1>Kyler Figgins</h1>
      </Header>
      <Body>
        <p>Full-Stack React Developer who likes clean sites</p>
        <br />
        <br />
      </Body>
      <Footer>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Kfiggins1">
          <SocialIcon className="fab fa-twitter" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/kylerfiggins"
        >
          <SocialIcon className="fab fa-linkedin-in" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/kfiggins">
          <SocialIcon className="fab fa-github" />
        </a>
      </Footer>
    </Wrapper>
  );
}
