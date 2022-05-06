import React, { useState } from "react";
import Input from "../components/Input";
const Ex2 = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !password || !passwordConfirm) {
      alert("Nhap lai");
      return;
    }

    if (password !== passwordConfirm) {
      alert("password khac nhau");
      return;
    }
    setDisplayName(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="UserName"
        valueInput={name}
        onChangeInput={(e) => setName(e.target.value)}
      />
      {/* <Input
        label="Password"
        valueInput={password}
        onChangeInput={(e) => setPassword(e.target.value)}
      />
      <Input
        label="Password Confirmation"
        valueInput={passwordConfirm}
        onChangeInput={(e) => setPasswordConfirm(e.target.value)}
      /> */}
      <button type="submit">Submit</button>
      {displayName && <h1>WELCOME , {displayName}</h1>}
    </form>
  );
};

export default Ex2;
