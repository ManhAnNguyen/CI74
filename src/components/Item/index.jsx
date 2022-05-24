import React, { useState } from "react";
import { toast } from "react-toastify";
import { SItem } from "./styles";

const Item = ({ item, handleAddToCart }) => {
  const [amount, setAmount] = useState("");
  const handleAdd = () => {
    if (!amount) {
      toast.error("Please enter amount");
      return;
    }
    const newCart = { ...item, amount };
    handleAddToCart(newCart);
  };

  return (
    <SItem className="item">
      <div className="item-left">
        <span className="image">
          <img src={item.image} alt="" />
        </span>
        <div className="info">
          <h3 className="name">{item.name}</h3>
          <p className="description">{item.description}</p>
          <p className="price">$ {item.price}</p>
        </div>
      </div>
      <div className="item-right">
        <div className="amount">
          <span className="amount-text">Amount : </span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="button-add" onClick={handleAdd}>
          Add
        </button>
      </div>
    </SItem>
  );
};

export default Item;
