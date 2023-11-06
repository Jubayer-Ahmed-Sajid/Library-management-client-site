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
        }
       
      ]
    },
    
  ]);
  


export default router
