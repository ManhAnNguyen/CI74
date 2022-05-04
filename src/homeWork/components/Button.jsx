import React from "react";

const Button = ({ text }) => {
  return (
    <button onClick={() => alert(text)} className="button">
      {text}
    </button>
  );
};

export default Button;
