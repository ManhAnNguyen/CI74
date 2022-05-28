import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { SForm } from "../SignUp";

const SignIn = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const { name, password } = user;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password || !name) {
      toast.error("All fields are allowed to empty!!");
      return;
    }

    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    const findUser = users.find(
      (u) => u.name === name && u.password === password
    );
    if (findUser === undefined) {
      toast.error("Incorrect Information!!!");
    } else {
      localStorage.setItem("currentUser", JSON.stringify(findUser));
      toast.success(`Welcome ${findUser.name}`);
      navigate("../user", { replace: true });
    }
  };
  return (
    <SForm onSubmit={handleSubmit}>
      <h1 className="text">Log In</h1>
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

      <Link to="/sign-up">Don't have account! Sign up now!!!</Link>
      <div className="button-groups">
        <Button text="Submit" />
      </div>
    </SForm>
  );
};

export default SignIn;
