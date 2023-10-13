import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;