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
          element:<AddBook></AddBook>
        },
        {
          path:'allBooks',
          element:<AllBooks></AllBooks>
        },
        {
          path:'borrowed',
          element:<BorrowedBooks></BorrowedBooks>
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
          path:'categories/:name',
          element:<CategoryBooks></CategoryBooks>,
          loader:({params})=> fetch(`http://localhost:5000/allbooks/${params.name}`)
          
        },
        {
          path:'categories/:name/:id',
          element:<PrivateRoutes><Book></Book></PrivateRoutes> ,
          loader:({params})=>fetch(`http://localhost:5000/allbooks/${params.name}/${params.id}`,{credentials:"include"})
        }
       
      ]
    },
    
  ]);
  


export default router
