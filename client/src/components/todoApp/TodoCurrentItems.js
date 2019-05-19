import React from "react";
import TodoItem from "./TodoItem";

export default function TodoCurrentItems({ currentTodos, removeTodo, toggleTodo }) {
  return (
    <div>
      {currentTodos.map(todo => (
        <TodoItem
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          key={todo.id}
        />
      ))}
    </div>
  );
}
