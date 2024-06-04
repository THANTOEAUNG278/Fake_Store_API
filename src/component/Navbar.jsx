import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-slate-400 h-14 w-full px-14 fixed z-10">
      <div>logo</div>
      <div className="flex gap-3 text-xl font-bold">
        <NavLink to="/" className="hover:text-indigo-600">Home</NavLink>
        <NavLink to="/products" className="hover:text-indigo-600">Products</NavLink>
        <NavLink to="/about" className="hover:text-indigo-600">About</NavLink>
        <NavLink to="/contact" className="hover:text-indigo-600">Contact</NavLink>
      </div>
      <div>login</div>
    </div>
  );
}

export default Navbar;
