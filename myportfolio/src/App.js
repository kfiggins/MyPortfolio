import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import HideShow from "./components/shared/HideShow";

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
          <h1>Kyler Figgins</h1>
        </header>
        <div className="App-body">
          <p>Full-Stack React Developer who likes clean sites</p>
          <br />
          <HideShow>
            {({ on, hide, show }) => (
              <div>
                {on && <h1>Hello</h1>}
                <button onClick={show}>Show</button>
                <button onClick={hide}>Hide</button>
              </div>
            )}
          </HideShow>
          <p>
            <a href="#">Components</a>
          </p>
          <p>
            <a href="#">Blog</a>
          </p>
          <p>
            <a href="#">Sites</a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/kylerfiggins">Contact</a>
          </p>
          <br />
          <br />
        </div>
        <div className="App-footer">
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
        </div>
      </div>
    );
  }
}

export default App;
