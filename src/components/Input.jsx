import React from "react";
import styled from "styled-components";

const Input = ({ label, value, onChange }) => {
  return (
    <SInput>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </SInput>
  );
};

export default Input;

const SInput = styled.div`
  margin: 5px 0;
  label {
    color: green;
  }
  input {
    border: none;
    background-color: #80b8e8;
    color: white;
    outline: none;
    padding: 15px 10px;
    border-radius: 4px;
    width: 100%;
  }
`;
