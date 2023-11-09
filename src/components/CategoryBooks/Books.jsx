import PropTypes from 'prop-types'
import Rating from 'react-rating'
import { Link } from 'react-router-dom'
const Books = ({ book }) => {
    const { _id ,name, category_name,rating,author,image} = book
    return (
        <div className="card shadow-xl">
            <div className='p-4 rounded-lg bg-primary'>

            <figure><img src={image} className='h-[220px]' alt="Movie" /></figure>
            </div>
            <div className="px-4">
                <h2 className="text-md mt-8  text-font-semibold bg-primary py-2 rounded-sm w-fit px-4 text-white">{category_name} Book</h2>
                <p className='text-secondary text-xl my-4 font-bold'>{name}</p>
                <p className='text-tertiary text-xl my-4 font-semibold'>{author}</p>

                <div className='flex justify-between mb-4 text-xl font-bold'>
                    <Rating initialRating={rating} readonly></Rating>
                 
                 
                </div>
                <div className="flex mb-6 w-full justify-center">

                    <Link to={`/categories/${category_name}/${_id}`} className="btn bg-secondary text-white border-none">See details</Link>
                </div>
            </div>
        </div>
    )
}

Books.propTypes = {
    book: PropTypes.object
}

export default Books
