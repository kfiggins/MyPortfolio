import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Kyler Figgins</h1>
        </header>
        <div className="App-body">
          <p>Full-Stack React Developer who likes clean sites</p>
          <br />

          <p>
            <Link to="/components">Components</Link>
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
