import React from "react";

const Text = ({ text }) => {
  console.log("Component Text Re-Render");
  return <div>{text}</div>;
};

export default Text;
