import React from "react";
import { SProduct } from "./styles";
import { BsCartPlusFill } from "react-icons/bs";

const Product = ({ product, handleAddToCart }) => {
  const { title, id, image, rating, category, price } = product;
  return (
    <SProduct>
      <span className="image">
        <img src={image} alt="" />
      </span>
      <h3 className="name">{title}</h3>
      <h4 className="price">$ {price}</h4>
      <h5 className="category">Category : {category}</h5>
      <span className="cart" onClick={() => handleAddToCart(product)}>
        <BsCartPlusFill />
      </span>
    </SProduct>
  );
};

export default Product;
