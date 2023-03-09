import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" w-full flex items-center  text-xl border-b nav">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="logo">
          <Link to="/">Pexelzz</Link>
        </div>
        <Link
          className=" px-5 py-2 hover:bg-[#202122] hover:text-[#ECF2FF] duration-300"
          to="/VideoPage"
        >
          Videos
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
