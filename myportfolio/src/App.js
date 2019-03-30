import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SpinWheel from "./Components/SpinWheel";

class App extends Component {
  state = {
    direction: "reverse",
    speed: 20
  };

  toggleDirection = () => {
    this.setState({
      direction: this.state.direction === "reverse" ? "" : "reverse"
    });
  };

  speedUp = () => {
    this.setState({ speed: this.state.speed - 1 });
  };

  slowDown = () => {
    this.setState({ speed: this.state.speed + 1 });
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
            style={{
              animationDirection: this.state.direction,
              animation: `App-logo-spin infinite ${this.state.speed}s linear`
            }}
          />
          <p>And I'm a Front-End Developer</p>
          <a
            className="App-link"
            onClick={this.toggleDirection}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reverse
          </a>
          <a
            className="App-link"
            onClick={this.speedUp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-caret-up" />
          </a>
          <a
            className="App-link"
            onClick={this.slowDown}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-caret-down" />
          </a>
        </header>
        <SpinWheel speed={this.state.speed} direction={this.state.direction} />
      </div>
    );
  }
}

export default App;
