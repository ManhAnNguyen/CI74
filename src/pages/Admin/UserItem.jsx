import React from "react";
import styled from "styled-components";

const UserItem = ({ user, handleDelete }) => {
  return (
    <SUserItem>
      <h1>Name : {user.name}</h1>
      <button onClick={() => handleDelete(user.id)}>DELETE</button>
    </SUserItem>
  );
};

export default UserItem;

const SUserItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
  h1 {
    font-size: 22px;
    color: gray;
  }
  button {
    border: none;
    cursor: pointer;
    padding: 5px;
    border-radius: 4px;
    background-color: red;
    color: white;
    margin-left: 20px;
  }
`;
