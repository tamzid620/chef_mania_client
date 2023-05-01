import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home/Home";
import About from "../Home/Header/About";
import Contact from "../Home/Header/Contact";
import Blog from "../Home/Header/Blog";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path: '/',
          element:<Home></Home>,
        },
        {
          path: '/about',
          element:<About></About>,
        },
        {
          path: '/contact',
          element:<Contact></Contact>,
        },
        {
          path: '/blog',
          element:<Blog></Blog>
        },
      ]
    },
  ]);

export default router;