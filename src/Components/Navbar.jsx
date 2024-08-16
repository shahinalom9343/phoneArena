import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authproviders/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const signout = () => {
    logOut()
      .then((result) => {
        result.user;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const navbarItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-purple-700 text-white font-semibold rounded-sm shadow-xl">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navbarItem}
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl">
          <span className="text-pink-200">Phone</span>
          <span className="text-green-200">Arena</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navbarItem}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-1">
            <a className="my-anchor-element">
              <img
                alt="Tailwind CSS Navbar component"
                className="w-12 h-12 rounded-full"
                src={
                  user?.photoURL ||
                  "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                }
              />
            </a>

            <div
              anchorSelect=".my-anchor-element"
              place="top"
              className="bg-purple p-4"
            >
              {user.displayName}
            </div>
            <button
              className="btn btn-secondary text-white font-semibold"
              onClick={signout}
            >
              Sign Out{" "}
            </button>
          </div>
        ) : (
          <div className="hidden lg:block space-x-1">
            <Link
              to="/signin"
              className="btn btn-secondary rounded-xl font-extrabold"
            >
              Login{" "}
            </Link>

            <Link
              to="signup"
              className=" btn btn-primary rounded-xl font-extrabold"
            >
              Register{" "}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
