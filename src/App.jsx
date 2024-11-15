import React, { useContext } from "react";
import Navbars from "./Navbar/navbar";
import "../App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import SingleProduct from "./SingleProduct/SingleProduct";
import Cart from "./Cart/Cart";
import Error from "./404/Error";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/addtocart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App; 