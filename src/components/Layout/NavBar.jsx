import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-center gap-20 bg-slate-400 py-5 items-center">
      <div>
        <Link
          to="/"
          className={`text-lg    hover:-translate-y-1 transition-all hover:bg-slate-300 px-5 py-2 rounded-lg  ${
            window.location.pathname === "/" ? "bg-slate-300" : " "
          } `}
        >
          Home
        </Link>
      </div>
      <div>
        <Link
          to="/about"
          className={`text-lg    hover:-translate-y-1 transition-all hover:bg-slate-300 px-5 py-2 rounded-lg  ${
            window.location.pathname === "/about" ? "bg-slate-300" : " "
          } `}
        >
          About
        </Link>
      </div>
      <div>
        <Link
          to="/contact"
          className={`text-lg    hover:-translate-y-1 transition-all hover:bg-slate-300 px-5 py-2 rounded-lg  ${
            window.location.pathname === "/contact" ? "bg-slate-300" : " "
          } `}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
