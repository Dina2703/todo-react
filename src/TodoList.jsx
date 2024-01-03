import React from "react";
import TododItem from "./TododItem";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length > 0
        ? todos.map((todo) => {
            return (
              <TododItem
                {...todo}
                key={todo.id}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            );
          })
        : "No todos"}
    </ul>
  );
}

export default TodoList;
