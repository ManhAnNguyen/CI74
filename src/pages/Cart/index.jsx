import React, { useEffect, useState } from "react";
import CartItem from "../../components/ItemCart";
import { handleCaculateFee } from "../../util";
import { SCart } from "./styles";

const Cart = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const cartsLocal = localStorage.getItem("carts")
      ? JSON.parse(localStorage.getItem("carts"))
      : [];

    setCarts(cartsLocal);
  }, []);

  const handleChange = (id, method) => {
    let addCart;
    if (method === "increase") {
      addCart = carts.map((c) =>
        c.id === id ? { ...c, count: c.count + 1 } : c
      );
    } else {
      addCart = carts.map((c) =>
        c.id === id ? { ...c, count: c.count === 1 ? 1 : c.count - 1 } : c
      );
    }

    setCarts(addCart);
    localStorage.setItem("carts", JSON.stringify(addCart));
  };

  const handleDelete = (id) => {
    let addCart;
    addCart = carts.filter((c) => id !== c.id);
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
            handleDelete={handleDelete}
            cart={cart}
            handleChange={handleChange}
          />
        ))}
      </div>
      {carts.length > 0 && (
        <h1 className="total">Total fee : $ {handleCaculateFee(carts)}</h1>
      )}
    </SCart>
  );
};

export default Cart;
