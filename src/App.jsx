import React from "react";
import { Route, Routes } from "react-router-dom";
import { ML } from "./layouts";
import {
  Detail,
  Products,
  Cart,
  Home,
  PNF,
  About,
  CheckOut,
  Contact,
  Login,
} from "./pages";
import { CGuard } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ML />}>
        <Route index element={<Home />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="cart">
          <Route index element={<Cart />} />
          <Route
            path="checkout"
            element={
              <CGuard>
                <CheckOut />
              </CGuard>
            }
          />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PNF />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
