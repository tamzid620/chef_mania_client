import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;