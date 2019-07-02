import React, { Fragment } from "react";
import TextField from "./shared/TextField";

export default function FieldExample() {
  return (
    <div style={{ width: "50%" }}>
      <h1>Field Example</h1>
      <TextField name="name" label="Name" />
      <TextField name="hobby" label="Hobby" />
      <TextField name="favoriteFood" label="Favorite Food" />
    </div>
  );
}
