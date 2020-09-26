import React from "react";
import styled from "styled-components";
import profilePic from "../assets/kfiggins3.jpg";
import { sharedColors } from "../style/variables";

const Wrapper = styled.div`
  text-align: center;
  color: ${sharedColors.primary};
  padding-top: 30px;
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
  margin-bottom: 60px;
`;

const SocialIcons = styled.div`
  font-size: calc(12px + 2vmin);
`;

const SocialIcon = styled.i`
  color: ${sharedColors.primary};
  margin: 10px;
  &:hover {
    color: ${sharedColors.secondary};
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <Header>
        <img
          alt="me"
          style={{ width: 300, borderRadius: 150 }}
          src={profilePic}
        ></img>
        <h1 style={{ margin: "30px 0" }}>Kyler Figgins</h1>
      </Header>
      <Body>
        <p>Full-Stack React Developer who likes clean sites</p>
      </Body>
      <SocialIcons>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/Kfiggins1"
        >
          <SocialIcon className="fab fa-twitter" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/kylerfiggins"
        >
          <SocialIcon className="fab fa-linkedin-in" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kfiggins"
        >
          <SocialIcon className="fab fa-github" />
        </a>
      </SocialIcons>
    </Wrapper>
  );
}
