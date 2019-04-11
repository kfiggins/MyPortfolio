import React, { Component } from "react";

class HideShow extends Component {
  state = {
    on: false
  };

  hide = () => {
    this.setState({
      on: false
    });
  };

  show = () => {
    this.setState({
      on: true
    });
  };

  render() {
    const { children } = this.props;

    return children({ on: this.state.on, hide: this.hide, show: this.show });
  }
}

export default HideShow;
