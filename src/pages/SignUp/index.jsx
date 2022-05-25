import React from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import styled from "styled-components";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <SForm>
      <h1 className="text">Register</h1>
      <Input label="User Name" />
      <Input label="Password" />
      <Input label="Password Confirmation" />
      <Link to="/sign-in">Aldreay account!! Sign In</Link>
      <div className="button-groups">
        <Button text="Submit" />
      </div>
    </SForm>
  );
};

export default SignUp;

export const SForm = styled.form`
  .text {
    text-align: center;
    color: greenyellow;
  }
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 50px;
  padding: 10px 20px;
  border-radius: 5px;
  .button-groups {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
`;
