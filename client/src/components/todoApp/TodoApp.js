import React, { useState } from "react";
import Button from "../shared/Button";
import { generateId } from "../../utils/GenerateId";
import styled from "styled-components";

import TodoItem from "./TodoItem";
import TodoCompletedItems from "./TodoCompletedItems";
import TodoCurrentItems from "./TodoCurrentItems";

export default function TodoApp() {
  const Wrapper = styled.div`
    text-align: center;
  `;

  const [todos, setTodos] = useState([
    { id: generateId(), text: "Learn how to use React Hooks", completed: true },
    { id: generateId(), text: "Learn how to fly", completed: false }
  ]);

  const [todoField, updateToDoField] = useState("");

  const addTodo = () => {
    setTodos([{ id: generateId(), text: todoField, completed: false }, ...todos]);
    updateToDoField("");
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // TODO: Try using context with toggleTodo
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
      <TodoCurrentItems
        currentTodos={currentTodos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />

      <TodoCompletedItems
        completedTodos={completedTodos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  );
}
