import { NavLink } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import { PiTrademarkRegisteredFill } from "react-icons/pi";
import { BsCart4 } from "react-icons/bs";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const Navbar = () => {
  const {cart} =useContext(CartContext);
  return (
    <div className="flex justify-between items-center bg-slate-400 h-14 w-full px-14 fixed z-10">
      <div className="text-white font-extrabold text-2xl">Fake API STORE</div>
      <div className="flex gap-3 text-xl text-white font-bold">
        <NavLink to="/" className="hover:text-indigo-600">Home</NavLink>
        <NavLink to="/products" className="hover:text-indigo-600">Products</NavLink>
        <NavLink to="/about" className="hover:text-indigo-600">About</NavLink>
        <NavLink to="/contact" className="hover:text-indigo-600">Contact</NavLink>
      </div>
      <div className="flex gap-5 text-white text-2xl">
        <NavLink to="/account" className="hover:text-indigo-600 transition duration-300">
          <RiAccountCircleLine />
        </NavLink>
        <NavLink to="/trademark" className="hover:text-indigo-600 transition duration-300">
          <PiTrademarkRegisteredFill />
        </NavLink>
        <NavLink to="/cart" className="hover:text-indigo-600 transition duration-300 flex items-center">
          <BsCart4 />
          <span className=" text-sm font-bold text-red-700">({cart.length})</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
