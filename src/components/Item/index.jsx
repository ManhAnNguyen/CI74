import React from "react";
import "./styles.css";
import { RiDeleteBin2Fill } from "react-icons/ri";

const Item = ({ name, date, amount, handleDelete, id }) => {
  return (
    <div className="item">
      <p>{date}</p>
      <p className="name">{name}</p>
      <p className="price">$ {amount}</p>
      <span className="icon" onClick={() => handleDelete(id)}>
        <RiDeleteBin2Fill fontSize={"30px"} color="white" />
      </span>
    </div>
  );
};

export default Item;
