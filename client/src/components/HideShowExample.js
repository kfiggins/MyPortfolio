import React from "react";
import styled from "styled-components";

import Button from "./shared/Button";
import HideShow from "./shared/HideShow";

const ShowButton = styled(Button)`
  margin-right: 5px;
`;

const CodeWrapper = styled.code`
  white-space: pre;
  color: black;
`;

export default function HideShowExample() {
  return (
    <HideShow>
      {({ on, hide, show }) => (
        <div>
          <h1>
            Show/Hide Component{" "}
            {on ? (
              <span role="img" aria-label="monkeyOpen">
                🙉
              </span>
            ) : (
              <span role="img" aria-label="monkeyClosed">
                🙈
              </span>
            )}
          </h1>
          <p>This component is using the render props pattern.</p>
          <p>You can easily show or hide anything you want with this easy to use component.</p>
          <ShowButton onClick={show} success>
            Show
          </ShowButton>
          <Button onClick={hide} danger>
            Hide
          </Button>
          {on && (
            <div>
              <br />
              {/*TODO: Figure out how to add syntax highlighting! */}
              <CodeWrapper>
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
              </CodeWrapper>
            </div>
          )}
          <br />
        </div>
      )}
    </HideShow>
  );
}
