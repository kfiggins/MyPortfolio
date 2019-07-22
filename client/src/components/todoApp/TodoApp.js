import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../shared/Button";
import { generateId } from "../../utils/GenerateId";

import TodoItem from "./TodoItem";

const TodoInput = styled.input`
  padding: 7px 4px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const AddButton = styled(Button)`
  margin-left: 10px;
`;

const CompletedItems = styled.div`
  opacity: 0.5;
`;

export default function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos"));
  const [todos, setTodos] = useState(
    initialTodos || [
      { id: generateId(), text: "Learn how to use React Hooks 🎣", completed: true },
      { id: generateId(), text: "Learn how to fly 🛸", completed: false }
    ]
  );

  const [todoField, updateToDoField] = useState("");

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const completedTodos = todos.filter(todo => todo.completed === true);
  const currentTodos = todos.filter(todo => todo.completed === false);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        <span role="img" aria-label="tiger">
          🐯
        </span>{" "}
        To-Do App using React Hooks{" "}
        <span role="img" aria-label="elephant">
          🐘
        </span>
      </h1>
      <TodoInput
        onKeyDown={handleKeyDown}
        onChange={e => updateToDoField(e.target.value)}
        placeholder="Add To-Do Here"
        value={todoField}
      />
      <AddButton success onClick={addTodo}>
        Add To-Do
      </AddButton>

      <h3>To-Do's</h3>
      {currentTodos.map(todo => (
        <TodoItem todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} key={todo.id} />
      ))}

      <h3>Completed Items</h3>
      <CompletedItems>
        {completedTodos.map(todo => (
          <TodoItem
            todo={todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            key={todo.id}
          />
        ))}
      </CompletedItems>
    </div>
  );
}
