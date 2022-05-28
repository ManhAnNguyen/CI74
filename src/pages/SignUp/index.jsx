import React, { useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import styled from "styled-components";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialValue = {
  name: "",
  password: "",
  confirmation: "",
};

const SignUp = () => {
  const [user, setUser] = useState(initialValue);
  const { name, password, confirmation } = user;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !password || !confirmation) {
      toast.error("All Field are not allowed to empty!");
      return;
    }

    if (password !== confirmation) {
      toast.error("Please check twice password");
      return;
    }

    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    const id = new Date(); ///chung minh thu
    const newUser = {
      name,
      password,
      id,
      role: "user",
    };

    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    toast.success("Sign Up Successfully@!!!");
    navigate("../sign-in", { replace: true });
  };

  return (
    <SForm onSubmit={handleSubmit}>
      <h1 className="text">Register</h1>
      <Input
        label="User Name"
        value={name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <Input
        label="Password"
        value={password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <Input
        label="Password Confirmation"
        onChange={(e) => setUser({ ...user, confirmation: e.target.value })}
        value={confirmation}
      />
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
