import axios from 'axios'
import PropTypes from 'prop-types'
import Swal from 'sweetalert2'



const Borrowed = ({ borrowedBook,refetch}) => {
    const { currentDate, returnDate, book, _id } = borrowedBook
    const { image, name, category_name, quantity } = book
    const  bookQuantity  = {quantity}
    const action = 'return';
    const handleReturn = (id) => {

        Swal.fire({
            title: "Do you want to return the book?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Return it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://assignment-11-server-site-ku5j0tstc-jubayer-ahmed-sajid.vercel.app/borrowings/${id}`)
                .then((res)=>{
                    console.log(res.data)
                    Swal.fire({
                        title: "You have successfully returned the book",
                        text: "The book is returned",
                        icon: "success"
                      });
                refetch();

                })
             
            }
          });
        
            axios.patch(`https://assignment-11-server-site-ku5j0tstc-jubayer-ahmed-sajid.vercel.app/allbooks/${category_name}/${_id}/${action}`,bookQuantity)
            .then((res) => {
                console.log(res.data)
                refetch();
                
                
            })
    }



    return (
        <div className="card  glass">
            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='font-semibold bg-slate-400 bg-opacity-70 w-fit px-8 py-2 rounded-lg'>{category_name}</p>
                <p className='font-semibold'>Borrowed Date: {currentDate}</p>
                <p className='font-semibold'>Return Date: {returnDate}</p>

                <div className="card-actions justify-center">

                    <button onClick={() => handleReturn(_id)} className="btn bg-secondary  border-none text-white">Return</button>
                </div>
            </div>
        </div>
    )
}

Borrowed.propTypes = {
    borrowedBook: PropTypes.object,
    refetch: PropTypes.func
}

export default Borrowed
