import React, { useContext } from "react";
import { TitleContext } from "../App";

const Title = () => {
  const state = useContext(TitleContext);
  console.log("context-in-title", state);

  return <div>Title</div>;
};

export default Title;
