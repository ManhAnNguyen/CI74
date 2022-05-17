import React, { useContext } from "react";
import { TitleContext } from "../App";

const Button = () => {
  const state = useContext(TitleContext);
  console.log("context-in-button", state);
  return <div>Button</div>;
};

export default Button;
