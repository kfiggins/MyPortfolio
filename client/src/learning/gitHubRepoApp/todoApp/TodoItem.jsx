import React from "react";
import Button from "../shared/Button";
import styled from "styled-components";

const Wrapper = styled.div`
  border: #cccccc 1px solid;
  max-width: 30em;
  padding: 0.75em;
  margin: 0 auto;
  border-radius: 0.5em;
  position: relative;
  margin-bottom: 10px;
`;

const DeleteButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 7px;
`;

const DeleteButton = styled(Button)`
  height: 19px;
  padding: 0 4px !important;
`;

const CheckboxPosition = styled.span`
  position: absolute;
  left: 5px;
`;

const CheckBox = styled.input`
  cursor: pointer;
`;

export default function TodoItem({ todo, removeTodo, toggleTodo }) {
  const Text = styled.span`
    text-decoration: ${todo.completed ? "line-through" : "none"};
  `;

  return (
    <Wrapper key={todo.id}>
      <CheckboxPosition>
        {/* TODO: Make a pretty checkbox component */}
        <CheckBox
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
      </CheckboxPosition>
      <Text>{todo.text} </Text>
      <DeleteButtonWrapper>
        <DeleteButton danger onClick={() => removeTodo(todo.id)}>
          x
        </DeleteButton>
      </DeleteButtonWrapper>
    </Wrapper>
  );
}
