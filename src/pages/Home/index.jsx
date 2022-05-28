import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    handleFetch();
  }, []);
  const handleFetch = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };

  console.log(products);
  return <div></div>;
};

export default Home;
