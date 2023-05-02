import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home/Home";
import About from "../Home/Header/About";
import Contact from "../Home/Header/Contact";
import Blog from "../Home/Header/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Recipes from "../Home/Recipes/Recipes";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
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
          element:<Blog></Blog>,
        },
        {
          path: '/recipes',
          element:<Recipes></Recipes>,
        },
      ]
    },
  ]);

export default router;