import React from "react";
import { SItemCart } from "./styles";
import { MdDelete } from "react-icons/md";

const CartItem = ({ cart, handleIncreaseCount, handleDecrease }) => {
  const { title, image, price } = cart;
  return (
    <SItemCart>
      <div className="left-cart">
        <img src={image} alt="" />
        <div className="info">
          <h5 className="name">{title}</h5>
          <h5 className="price">${price}</h5>
        </div>
      </div>
      <div className="right-cart">
        <div className="count">
          <button className="decrease" onClick={() => handleDecrease(cart.id)}>
            -
          </button>
          <span>{cart.count}</span>
          <button className="plus" onClick={() => handleIncreaseCount(cart.id)}>
            +
          </button>
        </div>
        <span className="delete">
          <MdDelete color="red" fontSize="25px" />
        </span>
      </div>
    </SItemCart>
  );
};

export default CartItem;
