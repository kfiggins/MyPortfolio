import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    direction: "reverse"
  };

  toggleDirection = () => {
    this.setState({
      direction: this.state.direction === "reverse" ? "" : "reverse"
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hi, My name is Kyler Figgins</p>
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{ animationDirection: this.state.direction }}
          />
          <p>And I'm a Front-End Developer</p>
          <a
            className="App-link"
            onClick={this.toggleDirection}
            target="_blank"
            rel="noopener noreferrer"
          >
            Boom!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
