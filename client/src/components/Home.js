import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class Home extends Component {
  render() {
    const Wrapper = styled.div`
      text-align: center;
      /* background-color: #e0fbfc; */
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
    `;

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
          <a target="_blank" href="https://twitter.com/Kfiggins1">
            <i className="fab fa-twitter" style={{ color: "#293241", margin: "10px" }} />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/kylerfiggins">
            <i
              className="fab fa-linkedin-in"
              style={{ color: "#293241", margin: "10px" }}
            />
          </a>
          <a target="_blank" href="https://github.com/kfiggins">
            <i className="fab fa-github" style={{ color: "#293241", margin: "10px" }} />
          </a>
        </Footer>
      </Wrapper>
    );
  }
}
