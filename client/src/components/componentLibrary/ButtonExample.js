import React from "react";
import Button from "../shared/Button";

export default function ButtonExample() {
  return (
    <div>
      <h1>
        Buttons{" "}
        <span role="img" aria-label="octopus">
          🦑
        </span>
      </h1>
      <p>I like buttons. Who doesn't like buttons?</p>
      <Button primary>Primary</Button>
      <br />
      <br />
      <Button success>Success</Button>
      <br />
      <br />
      <Button danger>Danger</Button>
      <br />
      <br />
      <Button warning>Warning</Button>
      <br />
      <br />
      <Button info>Info</Button>
      <br />
      <br />
      <Button>Default</Button>
    </div>
  );
}
