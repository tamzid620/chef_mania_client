import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DP from '../../../../public/andre-rush-compressed-700x700.jpeg';
import { AuthContext } from '../../providers/AuthProvider';


const Header = () => {
    const {user} =  useContext(AuthContext)
    return (
        <div>
            {/*------------------------- Navbar section ---------------------- */}
            <div className="navbar bg-green-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>
                    <p className="font-semibold text-xl text-green-600">ChefMania</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                {user && <span>welcome {user.email}</span> }
                <label className="navbar-end btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={DP} alt="" />
                    </div>
                    <Link to="/login">
                    <button className="btn btn-accent border-green-600 ms-2">Login</button>
                    </Link>
                </label>
               
            </div>
        </div>
    );
};

export default Header;