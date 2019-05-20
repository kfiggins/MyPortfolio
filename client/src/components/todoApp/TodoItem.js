import React from "react";
import Button from "../shared/Button";
import styled from "styled-components";

export default function TodoItem({ todo, removeTodo, toggleTodo }) {
  const Wrapper = styled.div`
    border: #cccccc 1px solid;
    max-width: 30em;
    padding: 0.75em;
    margin: 0 auto;
    border-radius: 0.5em;
    position: relative;
    margin-bottom: 10px;
  `;

  const DeleteButton = styled.div`
    position: absolute;
    top: 10px;
    right: 7px;
  `;

  const CheckboxPosition = styled.span`
    position: absolute;
    left: 5px;
  `;

  const Text = styled.span`
    text-decoration: ${todo.completed ? "line-through" : "none"};
  `;

  return (
    <Wrapper key={todo.id}>
      <CheckboxPosition>
        {/* Make a pretty checkbox component */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          style={{ cursor: "pointer" }}
        />
      </CheckboxPosition>
      <Text>{todo.text} </Text>
      <DeleteButton>
        <Button
          style={{ height: "19px", padding: "0 4px" }}
          danger
          onClick={() => removeTodo(todo.id)}
        >
          x
        </Button>
      </DeleteButton>
    </Wrapper>
  );
}
