import React from "react";

const Input = ({ label, valueInput, onChangeInput }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" value={valueInput} onChange={onChangeInput} />
    </div>
  );
};

export default Input;
