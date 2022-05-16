import React, { createContext, useReducer } from "react";
import HomeWork from "./homework";
import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";

const initialValue = {
  color: "green",
};

export const TodoContext = createContext();

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "CHANGE":
      return action.payload;
    default:
      return state;
  }
};

const App = () => {
  const [count, dispatch] = useReducer(countReducer, 1);

  console.log("count :", count);

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });
  const change = () => dispatch({ type: "CHANGE", payload: 1000 });

  return (
    <TodoContext.Provider value={initialValue}>
      <TodoList />
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={change}>Change to 1000</button>
      <h1>Count : {count}</h1>
    </TodoContext.Provider>
  );
};

export default App;
