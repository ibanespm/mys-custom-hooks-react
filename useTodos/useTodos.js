import  { useEffect, useReducer } from "react";
import { todoReducer } from "./TodoReduce";

const initialState = [
];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (todo) => {
    const action = {
      type: "[todo] add todo",
      payload: todo,
    };
    dispatch(action);
  };
  const handleDeleteTodo = (id) => {
    const action = {
      type: "[todo] delete todo",
      payload: id,
    };
    dispatch(action);
  };

  const hanldleToggle = (id) => {
    const action = {
      type: "[todo] toggle todo",
      payload: id,
    };
    dispatch(action);
  };

  const countTodos = todos.length;
  const pendingTodos = todos.filter(todo => !todo.done).length;

  return [
    todos,
    countTodos,
    pendingTodos,
    handleAddTodo,
    handleDeleteTodo,
    hanldleToggle,
  ];
};
