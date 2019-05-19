import React from "react";
import Button from "../shared/Button";

export default function TodoItem({ todo, removeTodo, toggleTodo }) {
  return (
    <div key={todo.id}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {todo.text}{" "}
      <Button
        style={{ height: "19px", padding: "0 4px" }}
        danger
        onClick={() => removeTodo(todo.id)}
      >
        x
      </Button>
    </div>
  );
}
