import React from "react";
import todoReducer from "../reducers/todoReducer";
import { addTodo, removeTodo, deleteTodo } from "../actions";

const initialState = {
  list: [],
};

export const TodoContext = React.createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(todoReducer, initialState);

  const value = {
    list: state.list,
    price: state.price,
    addItemTodo: (value) => dispatch(addTodo(value)),
    removeTodo: () => dispatch(removeTodo()),
    deleteItemTodo: (id) => dispatch(deleteTodo(id)),
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default Provider;
