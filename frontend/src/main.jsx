import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./landing_page/home/HomePage";
import SupportPage from "./landing_page/support/SupportPage";
import PricePage from "./landing_page/pricing/PricePage";
import ProductPage from "./landing_page/product/ProductPage";
import AboutPage from "./landing_page/about/AboutPage";
import Signup from "./landing_page/signup/Signup";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
import Login from "./landing_page/login/Login.jsx";
import { AuthProvider } from "./store/AuthContext";
import { ToastContainer } from "react-toastify";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/products" element={<ProductPage />}></Route>

          <Route path="/pricing" element={<PricePage />}></Route>

          <Route path="/support" element={<SupportPage />}></Route>
        </Routes>
        <ToastContainer position="top-right" autoClose={1000} />
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
