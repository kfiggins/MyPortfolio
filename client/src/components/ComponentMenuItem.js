import React from "react";
import { Link } from "react-router-dom";

export default function ComponentMenuItem({ name }) {
  return (
    <li>
      <Link to={`/components/${name}`}>{name}</Link>
    </li>
  );
}
