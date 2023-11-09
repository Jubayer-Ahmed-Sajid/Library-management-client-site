import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../page/Login/Login";
import Home from "../page/Home/Home";
import AddBook from "../page/AddBook/AddBook";
import AllBooks from "../page/AllBooks/AllBooks";
import BorrowedBooks from "../page/Borrowed/BorrowedBooks";
import Register from "../components/Register";
import Root from "../Root/Root";
import CategoryBooks from "../components/CategoryBooks/CategoryBooks";
import Book from "../components/CategoryBooks/Book";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import UpdateBook from "../components/Update";


  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
       
        {
          path:'addBook',
          element:<PrivateRoutes><AddBook></AddBook></PrivateRoutes>
        },
        {
          path:'allBooks',
          element:<PrivateRoutes><AllBooks></AllBooks></PrivateRoutes>
        },
        {
          path:'borrowed',
          element:<PrivateRoutes><BorrowedBooks></BorrowedBooks></PrivateRoutes>
        },
       
        {
          path:'register',
          element:<Register></Register>

        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'categories/:categoryName',
          element:<PrivateRoutes><CategoryBooks></CategoryBooks></PrivateRoutes>
          
        },
        {
          path:'categories/:category/:id',
          element:<PrivateRoutes><Book></Book></PrivateRoutes> ,
        },
        {
          path:'update/:categories/:id',
          element:<PrivateRoutes><UpdateBook></UpdateBook></PrivateRoutes>
        }
       
      ]
    },
    
  ]);
  


export default router
