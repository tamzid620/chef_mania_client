import React from 'react';
import Home from '../Home/Home/Home';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;