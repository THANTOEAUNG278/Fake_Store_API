const Navbar = ()=> {
  return (
    <div className="flex justify-between items-center bg-slate-400 h-14 w-full px-14 fixed z-10">
      <div>
        logo
      </div>
      <div className="flex gap-3 text-xl font-bold">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div>
        login
      </div>
    </div>
  )
}
export default Navbar;