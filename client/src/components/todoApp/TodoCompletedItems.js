import React from "react";
import TodoItem from "./TodoItem";

export default function TodoCompletedItems({ completedTodos, removeTodo, toggleTodo }) {
  return (
    <div>
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
