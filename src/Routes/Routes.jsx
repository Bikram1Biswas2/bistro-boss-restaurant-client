import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorElement></ErrorElement>,
      children : [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/menu',
            element:<Menu></Menu>
        },
        {
            path: 'order/:category',
            element:<Order></Order>
        },
        {
            path:  '/login',
            element:<Login></Login>
        },
        {
            path: '/signUp',
            element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: 'cart',
          element: <Cart></Cart>
        }
      ]
    }
  
  ]);