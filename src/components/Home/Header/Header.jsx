import React from 'react';
import { Link } from 'react-router-dom';
import DP from '../../../../public/andre-rush-compressed-700x700.jpeg';
import carouselpic1 from '../../../../public/c1.jpg';
import carouselpic2 from '../../../../public/c2.png';
import carouselpic3 from '../../../../public/c3.jpg';
import carouselpic4 from '../../../../public/c4.jpg';

const Header = () => {
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
                    <a className="btn btn-ghost normal-case text-xl text-green-600">ChefMania</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <button className='bg-green-600 text-white font-semibold px-5 py-2 rounded-md'>Blog</button>
                </div> */}
                <label className="navbar-end btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={DP} alt="" />
                    </div>
                    <button className='bg-green-600 text-white ms-2 font-semibold px-5 py-2 rounded-md'>Login</button>
                </label>
            </div>

            <h1 style={{fontFamily: 'Dancing Script, cursive', fontWeight:700}}  className='flex justify-center mt-10 text-4xl text-green-700'>Welcome to ChedMania</h1>
            {/* ------------------Carousel section---------------------- */}
            <div className="carousel w-full h-96 mt-10 mb-20">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={carouselpic1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={carouselpic2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={carouselpic3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={carouselpic4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;