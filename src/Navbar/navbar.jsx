import React, { useContext, useEffect, useRef, useState } from "react";
import { BiCart } from "react-icons/bi";
import { ThemeContext } from "../Context/Context";
import { Link } from "react-router-dom";
const Navbars = () => {
  const [MenuOpen, setMenuOpen] = useState(false);
  const { state } = useContext(ThemeContext);
  const handeMenuOpen = () => {
    setMenuOpen(!MenuOpen);
  };
  const menuRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current?.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [menuRef]);
  return (
    <div className="text-white flex items-center justify-between lg:px-32 md:px-16 py-5 bg-yellow-600 px-10">
      <a href="/" className="text-xl">
        E-Commerce
      </a>
      <div className="flex items-center text-2xl gap-2">
        <Link to="/addtocart" className="relative">
          <span className="text-sm absolute -top-2 -right-1 bg-blue-500 px-1 rounded-full">
            {state.product.length}
          </span>
          <BiCart />
        </Link>
        <span
          className="md:hidden text-3xl cursor-pointer"
          onClick={handeMenuOpen}
        ></span>
      </div>
    </div>
  );
};
export default Navbars;
