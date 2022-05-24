import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Item from "./components/Item";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./components/Modal";

const App = () => {
  const [meals, setMeals] = useState([]);
  const [carts, setCarts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch(
      "https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals"
    );
    const data = await res.json();
    setMeals(data);
  };

  const handleAddToCart = (item) => {
    setCarts([...carts, item]);
  };

  console.log(carts);

  return (
    <div>
      <Header amount={carts.length} setShowModal={setShowModal} />
      <div className="list-meal">
        {meals.map((m) => (
          <Item item={m} key={m.id} handleAddToCart={handleAddToCart} />
        ))}
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
      <ToastContainer />
    </div>
  );
};

export default App;
