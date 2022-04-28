import React from "react";
import "./styles.css";

const Button = ({ text = "Default", color = "yellow", shape, onClick }) => {
  const colorBg = color;

  return (
    <button onClick={onClick} className={`${colorBg} ${shape}`}>
      {text}
    </button>
  );
};

export default Button;
