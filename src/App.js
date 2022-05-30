import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailUser from "./pages/DetailUser";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user" element={<DetailUser />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
