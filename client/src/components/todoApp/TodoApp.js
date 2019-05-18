import React, { useState } from "react";
import Button from "../shared/Button";
import { generateId } from "../../utils/GenerateId";

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: generateId(), text: "Learn how to use React Hooks", completed: false }
  ]);
  const [todoField, updateToDoField] = useState("");
  const addTodo = () => {
    setTodos([{ id: generateId(), text: todoField, completed: false }, ...todos]);
    updateToDoField("");
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completeTodo = id => {
    //TODO: Wire up completeTodo to a checkbox.
    return null;
  };

  const updateField = e => {
    updateToDoField(e.target.value);
  };

  return (
    <div>
      <h1>🐯 To-Do App using React Hooks 🐘</h1>
      <div style={{ width: "600px" }}>
        <input value={todoField} name="username" onChange={updateField} />
        <Button style={{ marginLeft: "10px" }} success onClick={addTodo}>
          Add To-Do
        </Button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}{" "}
            <Button
              style={{ height: "21px", padding: "0 4px" }}
              danger
              onClick={() => removeTodo(todo.id)}
            >
              X
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
