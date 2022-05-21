import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import User from "./pages/User";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="user" element={<User />} />
          <Route path="log-in" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
        <ToastContainer />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
