import React from "react";
import HideShow from "./shared/HideShow";
import Button from "./shared/Button";

export default function HideShowExample() {
  return (
    <HideShow>
      {({ on, hide, show }) => (
        <div>
          <h1>Show/Hide Component</h1>
          <p>This component is using the render props pattern.</p>
          <p>
            You can easily show or hide anything you want with this easy to use component.
          </p>
          <Button style={{ marginRight: "5px" }} onClick={show} success>
            Show
          </Button>
          <Button onClick={hide} danger>
            Hide
          </Button>
          {on && (
            <div>
              <br />
              <code style={{ whiteSpace: "pre", color: "black" }}>
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
  );
}
