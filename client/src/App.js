import React from "react";
import "./_reset.css";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Cart from "./components/cart/Cart";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/panier" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
