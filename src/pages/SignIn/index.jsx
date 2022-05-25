import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { SForm } from "../SignUp";

const SignIn = () => {
  return (
    <SForm>
      <h1 className="text">Log In</h1>
      <Input label="User Name" />
      <Input label="Password" />

      <Link to="/sign-up">Don't have account! Sign up now!!!</Link>
      <div className="button-groups">
        <Button text="Submit" />
      </div>
    </SForm>
  );
};

export default SignIn;
