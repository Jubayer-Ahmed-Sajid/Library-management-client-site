import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import App from "../App";
import Login from "../page/Login/Login";
import About from "../page/About/About";
import Contact from "../page/Contact/Contact";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
       
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'contact',
          element:<Contact></Contact>
        }
      ]
    },
    {
      path:'/login',
      element:<Login></Login>
    }
  ]);
  


export default router
