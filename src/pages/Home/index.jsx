import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Product from "../../components/Product";
import { SHome } from "./styles";
import ReactLoading from "react-loading";
import { BsCartFill } from "react-icons/bs";
import { toast } from "react-toastify";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    handleFetch();

    const cartsLocal = localStorage.getItem("carts")
      ? JSON.parse(localStorage.getItem("carts"))
      : [];

    setCarts(cartsLocal);
  }, []);

  const handleFetch = async () => {
    setIsLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
    setIsLoading(false);
  };

  const handleAddToCart = (item) => {
    toast.success("Add item to cart successfully!!");
    //tìm ra cái thằng đã có trong state carts
    const existingCart = carts.find((d) => d.id === item.id);
    let addCarts;

    if (existingCart) {
      //nếu có thì tăgn lên 1 đơn vị
      addCarts = carts.map((c) =>
        c.id === item.id ? { ...c, count: c.count + 1 } : c
      );
    } else {
      //nếu ko có thì cho nó 1 cái trường count mới bằng 1
      addCarts = [...carts, { ...item, count: 1 }];
    }

    localStorage.setItem("carts", JSON.stringify(addCarts));
    setCarts(addCarts);
  };

  console.log(carts);

  if (isLoading)
    return (
      <div className="loading">
        <ReactLoading type="spin" color="orange" height="80px" width="80px" />
      </div>
    );

  return (
    <SHome>
      <Link to="/cart" className="cart-header">
        <BsCartFill color="#146ab5" fontSize="25px" />
        <span className="total-cart">{carts.length}</span>
      </Link>
      <h4 className="total">{products.length} Products</h4>
      <div className="list-products">
        {products.map((p, index) => (
          <Product key={index} product={p} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </SHome>
  );
};

export default Home;
