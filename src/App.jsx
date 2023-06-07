import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ML } from "./layouts";
import { Detail, Products, Cart, Home, PNF, About } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ML />}>
        <Route index element={<Home />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PNF />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
