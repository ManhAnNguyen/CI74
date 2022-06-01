import React from "react";
import { SItemCart } from "./styles";
import { MdDelete } from "react-icons/md";

const CartItem = ({ cart, handleChange, handleDelete }) => {
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
          <button
            className="decrease"
            onClick={() => handleChange(cart.id, "decrease")}
          >
            -
          </button>
          <span>{cart.count}</span>
          <button
            className="plus"
            onClick={() => handleChange(cart.id, "increase")}
          >
            +
          </button>
        </div>
        <span className="delete" onClick={() => handleDelete(cart.id)}>
          <MdDelete color="red" fontSize="25px" />
        </span>
      </div>
    </SItemCart>
  );
};

export default CartItem;
