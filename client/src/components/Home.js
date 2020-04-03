import React, { useState, useRef } from "react";
import styled from "styled-components";
import Button from "../components/shared/Button";

import DeveloperProfile from "@welovedevs/react-ultimate-resume";
import jsonResume from "../assets/json-resume.json";

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

const SocialIcons = styled.div`
  font-size: calc(12px + 2vmin);
`;

const SocialIcon = styled.i`
  color: #293241;
  margin: 10px;
  &:hover {
    color: #ee6c4d;
  }
`;

const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 180px;
  margin-bottom: 800px;
  cursor: pointer;

  &:hover {
  }
`;

const ArrowIconWrapper = styled.div`
  padding: 20px 0;
`;

export default function Home() {
  const resumeRef = useRef(null);

  const scrollToResume = () => {
    resumeRef.current.scrollIntoView({ behavior: "smooth" });
  };

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

      <ActionWrapper onClick={scrollToResume}>
        {/* <div>Check out my resume</div> */}
        <ArrowIconWrapper>
          <SocialIcon
            style={{ fontSize: "40px" }}
            className="fas fa-arrow-down"
          ></SocialIcon>
        </ArrowIconWrapper>
      </ActionWrapper>
      <div ref={resumeRef}>
        <DeveloperProfile
          mode="edit"
          options={{
            endpoints: {
              devicons: ""
            }
          }}
          data={jsonResume}
        />
      </div>
    </Wrapper>
  );
}
