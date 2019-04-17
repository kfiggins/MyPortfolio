import React, { Component, Fragment } from "react";
import styled from "styled-components";

import ComponentMenu from "./ComponentMenu";

// Components
import HideShow from "./shared/HideShow";

export default class Components extends Component {
  render() {
    const Wrapper = styled.div`
      display: flex;
      padding: 1em;
    `;
    return (
      <Fragment>
        <ComponentMenu />
        <Wrapper>
          <HideShow>
            {({ on, hide, show }) => (
              <div>
                <h2>Show/Hide Component</h2>
                <button onClick={show}>Show</button>
                <button onClick={hide}>Hide</button>
                {on && (
                  <div>
                    <br />
                    <code style={{ whiteSpace: "pre" }}>
                      {`class HideShow extends Component {
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
`}
                    </code>
                  </div>
                )}
                <br />
                {/*TODO: Figure out how to add syntax highlighting! */}
              </div>
            )}
          </HideShow>
        </Wrapper>
      </Fragment>
    );
  }
}
