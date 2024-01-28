import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

uuidv4();
const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };
  return (
    <div>
      <h1>Get things done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} />
      ))}
    </div>
  );
};

export default TodoWrapper;
