import React, { useContext } from "react";
import { TodoContext } from "../App";

const Todo = () => {
  const { color } = useContext(TodoContext);

  return <div style={{ color, fontSize: "30px" }}>Todo</div>;
};

export default Todo;
