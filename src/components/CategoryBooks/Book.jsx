import { useContext} from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Rating from "react-rating";
import axios from "axios";
import useBook from "../../hooks/useBook";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const Book = () => {
    const { user } = useContext(AuthContext)
    const {category,id} = useParams()
    const {data,isLoading,refetch} = useBook({category,id})
    if(isLoading){
        return <h1>loading</h1>
    }
    const book = data
    const { _id,image,name, author, rating, category_name, quantity } = data
    const action = 'borrow'
    
    const handleBorrow = (e) => {
        e.preventDefault()
        const date = e.target.date.value;
        const returnDate = new Date(date).toDateString()
        const currentDate = new Date().toDateString()
        const name = user.displayName;
        const email = user.email;
        const borrower = { name, email, returnDate, currentDate, book }
        const bookQuantity = { quantity }
        axios.post('https://assignment-11-server-site-8fnihsaly-jubayer-ahmed-sajid.vercel.app/borrowings', borrower)
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully borrowed the Book',
                    showConfirmButton: true,
                    timer: 2500
                })
            })
        axios.patch(`https://assignment-11-server-site-8fnihsaly-jubayer-ahmed-sajid.vercel.app/allbooks/${category_name}/${_id}/${action}`, bookQuantity)
            .then((res) => {
                console.log(res.data)
                refetch()
                
            })
    }
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <div className="bg-primary flex items-center rounded-xl w-1/2 justify-center m-4">

                <figure><img src={image} className="h-48 object-cover" alt="Album" /></figure>
            </div>
            <div className="card-body space-y-4">
                <h2 className="card-title">{name}</h2>
                <p>Author: {author}</p>
                <p>Category: {category_name}</p>
                <Rating initialRating={rating}
               readonly>
               
               
                </Rating>
                
               
                <p>In Stock: {quantity}</p>
                <div className="card-actions  items-end flex justify-between">
                    <button className="btn px-7 bg-secondary  border-none">Read Book</button>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className={quantity > 0 ? "btn bg-secondary  border-none" : 'btn btn-disabled'} onClick={ () => document.getElementById('my_modal_5').showModal()}>Borrow Book</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">

                            <form onSubmit={handleBorrow}>
                                <label className="label">Date of Return</label>
                                <input type="date" name="date" id="" />
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