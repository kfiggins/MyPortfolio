import React, { Fragment } from "react";
import Field from "./shared/Field";

export default function FieldExample() {
  return (
    <div style={{ width: "50%" }}>
      <Field name="name" label="Name" />
    </div>
  );
}
