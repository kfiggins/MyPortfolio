import React, { useState, useEffect } from "react";
import Button from "../shared/Button";
import { generateId } from "../../utils/GenerateId";

import TodoItem from "./TodoItem";

export default function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos"));
  const [todos, setTodos] = useState(
    initialTodos || [
      { id: generateId(), text: "Learn how to use React Hooks 🎣", completed: true },
      { id: generateId(), text: "Learn how to fly 🛸", completed: false }
    ]
  );

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  });

  const [todoField, updateToDoField] = useState("");

  const addTodo = () => {
    if (!todoField) return;
    setTodos([{ id: generateId(), text: todoField, completed: false }, ...todos]);
    updateToDoField("");
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = id => {
    const todo = todos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    setTodos([...todos.filter(todo => todo.id !== id), todo]);
  };

  const updateField = e => {
    updateToDoField(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const completedTodos = todos.filter(todo => todo.completed === true);
  const currentTodos = todos.filter(todo => todo.completed === false);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>🐯 To-Do App using React Hooks 🐘</h1>
      <input
        style={{ padding: "7px 4px", border: "1px solid lightgray", borderRadius: "5px" }}
        value={todoField}
        name="todoText"
        onChange={updateField}
        placeholder="Add To-Do Here"
        onKeyDown={handleKeyDown}
      />
      <Button style={{ marginLeft: "10px" }} success onClick={addTodo}>
        Add To-Do
      </Button>

      <h3>To-Do's</h3>
      {currentTodos.map(todo => (
        <TodoItem
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          key={todo.id}
        />
      ))}

      <h3>Completed Items</h3>
      <div style={{ opacity: ".5" }}>
        {completedTodos.map(todo => (
          <TodoItem
            todo={todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            key={todo.id}
          />
        ))}
      </div>
    </div>
  );
}
