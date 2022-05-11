import React from "react";
import "./styles.css";
const Input = ({
  label,
  placeholder,
  typeInput = "text",
  valueInput,
  onChangeInput,
}) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        type={typeInput}
        placeholder={placeholder}
        value={valueInput}
        onChange={onChangeInput}
      />
    </div>
  );
};

export default Input;
