import React from "react";
import Button from "./shared/Button";

export default function ButtonExample() {
  return (
    <div>
      <h1>Buttons 🦑</h1>
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
    </div>
  );
}
