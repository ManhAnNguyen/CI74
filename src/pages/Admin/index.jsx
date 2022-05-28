import React, { useEffect, useState } from "react";
import UserItem from "./UserItem";

const Admin = () => {
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    setAllUser(users);
  }, []);

  const handleDelete = (id) => {
    const filterUser = allUser.filter((e) => e.id !== id);
    setAllUser(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser));
  };

  return (
    <div>
      {allUser
        .filter((u) => u.name !== "admin")
        .map((a, index) => {
          return <UserItem user={a} key={index} handleDelete={handleDelete} />;
        })}
    </div>
  );
};

export default Admin;
