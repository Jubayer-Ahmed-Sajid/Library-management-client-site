import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

const Book = () => {
    const {user} = useContext(AuthContext)
    const book = useLoaderData()
    const {_id, name, author, rating, category_name ,quantity} = book
    const handleBorrow = (e) => {
        e.preventDefault()
        const date = e.target.date.value;
        const returnDate =new Date(date).toDateString()
        const currentDate = new Date().toDateString()
        const name  = user.displayName;
        const email = user.email;
        const borrower = {name,email,returnDate,currentDate,book}
        const bookQuantity = {quantity}
        console.log(bookQuantity)
        axios.post('http://localhost:5000/borrowings',borrower)
        .then(res => console.log(res.data))
        axios.put(`http://localhost:5000/allbooks/${category_name}/${_id}`,bookQuantity)
        .then(res => console.log(res.data))
    }
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/RYqscF8/Winnertsktgkg.jpg" className="h-48 object-cover" alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{author}</p>
                <p>{category_name}</p>
                <p>{rating}</p>
                <p>{quantity}</p>
                <div className="card-actions justify-end items-end flex-col">
                    <button className="btn btn-primary">Read Book</button>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Borrow Book</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">

                        <form onSubmit={handleBorrow}>
                            <label className="label">Date of Return</label>
                            <input type="date" name="date"  id="" />
                            <br />
                            <input type="submit" value='borrow Now' className="btn btn-accent btn-sm my-4" name="" id="" />
                        </form>
                        <div className="modal-action">

                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Book;