import React, { useEffect, useState } from "react";
import DP from '../../../../public/andre-rush-compressed-700x700.jpeg';
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import app from "../../../firebase/firebase.config";

const auth = getAuth();
const Header = () => {
  const [users, setUsers] = useState({});
  useEffect(() => {
    if (app) {
      onAuthStateChanged(auth, (user) => {
        setUsers(user);
      });
    }
  }, [app]);

  const logout = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
      });
  };


  return (
    <div>
      <div className="navbar bg-green-400">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/"><li className="text-black font-semibold">Home</li></Link>
              <Link to="/blog"><li className="text-black font-semibold">Blog</li></Link>
              <Link to="/about"><li className="text-black font-semibold">About</li></Link>
            </ul>
          </div>
          <p className=" text-xl font-semibold text-black">ChefMania</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="/"><li className="text-black font-semibold">Home</li></Link>
            <Link to="/blog"><li className="text-black font-semibold ms-5">Blog</li></Link>
            <Link to="/about"><li className="text-black font-semibold ms-5">About</li></Link>
          </ul>
        </div>

        <div className="navbar-end flex gap-2">
          <div className="w-10 rounded-full">
            <img className="w-10 rounded-full"  src={users?.photoURL} />
          </div>
          <div>
            {users ? (
              <button
                onClick={() => {
                  logout();
                }}
                className="btn btn-outline text-white"
              >
                Log out
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-outline text-black">Log In</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;