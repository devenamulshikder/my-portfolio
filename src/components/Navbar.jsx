/* eslint-disable react/no-unescaped-entities */

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlink = (
    <>
      <li className="text-xl font-semibold">
        <NavLink to='/'>Home</NavLink>
      </li>
      <li className="text-xl font-semibold">
        <NavLink to='/about'>About</NavLink>
      </li>
      <li className="text-xl font-semibold">
        <NavLink to='/portfolio'>Portfolio</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 text-[#FFFFFF]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
         <div className="">
         <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlink}
          </ul>
         </div>
        </div>
        <a className="btn btn-ghost text-xl text-[#FFFFFF] inter">Dev. Enamul</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlink}</ul>
      </div>
      <div className="navbar-end">
        <a className="border px-3 py-1 rounded-full lg:text-xl font-semibold">Let's Talk</a>
      </div>
    </div>
  );
};

export default Navbar;
