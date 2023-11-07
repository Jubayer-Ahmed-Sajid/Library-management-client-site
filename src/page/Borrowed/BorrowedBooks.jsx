import { useContext, useEffect } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import axios from "axios";
const BorrowedBooks = () => {
    const {user} = useContext(AuthContext)
    console.log(user.email)
   const url = `http://localhost:5000/borrowings?email=${user.email}`
   

       useEffect(()=>{
        axios.get(url)
        .then(res => console.log(res.data))
       })
   
    return (
        <div>
            <h1>Borrowed books</h1>
        </div>
    );
};

export default BorrowedBooks;