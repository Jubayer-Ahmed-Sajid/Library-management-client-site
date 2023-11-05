import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import App from "../App";
import Login from "../page/Login/Login";
import About from "../page/AddBook/AddBook";
import Contact from "../page/AllBooks/AllBooks";
import Home from "../page/Home/Home";
import AddBook from "../page/AddBook/AddBook";
import AllBooks from "../page/AllBooks/AllBooks";
import BorrowedBooks from "../page/Borrowed/BorrowedBooks";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
       
        {
          path:'addBook',
          element:<AddBook></AddBook>
        },
        {
          path:'allBooks',
          element:<AllBooks></AllBooks>
        },
        {
          path:'/borrowed',
          element:<BorrowedBooks></BorrowedBooks>
        },
        {
          path:'/',
          element:<Home></Home>
        }
       
      ]
    },
    {
      path:'/login',
      element:<Login></Login>
    }
  ]);
  


export default router
