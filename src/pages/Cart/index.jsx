import React, { useEffect, useState } from "react";
import CartItem from "../../components/ItemCart";
import { SCart } from "./styles";

const Cart = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const cartsLocal = localStorage.getItem("carts")
      ? JSON.parse(localStorage.getItem("carts"))
      : [];

    setCarts(cartsLocal);
  }, []);

  const handleIncreaseCount = (id) => {
    let addCart = carts.map((c) =>
      c.id === id ? { ...c, count: c.count + 1 } : c
    );

    setCarts(addCart);
    localStorage.setItem("carts", JSON.stringify(addCart));
  };
  const handleDecrease = (id) => {
    let addCart = carts.map((c) =>
      c.id === id ? { ...c, count: c.count - 1 } : c
    );

    setCarts(addCart);
    localStorage.setItem("carts", JSON.stringify(addCart));
  };

  return (
    <SCart>
      <h1 className="total-carts">Your carts is {carts.length}</h1>
      <div className="list-cart">
        {carts.map((cart, index) => (
          <CartItem
            key={index}
            cart={cart}
            handleIncreaseCount={handleIncreaseCount}
            handleDecrease={handleDecrease}
          />
        ))}
      </div>
    </SCart>
  );
};

export default Cart;
