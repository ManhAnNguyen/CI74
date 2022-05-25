import React from "react";
import styled from "styled-components";

const Input = ({ label }) => {
  return (
    <SInput>
      <label>{label}</label>
      <input type="text" />
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
    color: gray;
    outline: none;
    padding: 15px 10px;
    border-radius: 4px;
    width: 100%;
  }
`;
