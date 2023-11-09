import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'

const BooksCard = ({ book }) => {
    const {name,category_name,_id,rating,image,author} = book
    return (
        <div className="card p-4 glass">
            <figure className='bg-primary p-2'><img src={image} className='lg:h-[200px]' alt="car!" /></figure>
            <div className="card-body">
                <h2 className="text-md font-semibold">{category_name}</h2>
                <p className='text-xl font-bold'>{name}</p>
                <p className='my-4 text-md'>{author}</p>
                <Rating initialRating={rating} readonly></Rating>
                <div className="card-actions justify-center">
                    <Link className="btn bg-tertiary" to={`/update/${category_name}/${_id}`}>Update</Link>
                </div>
            </div>
        </div>
    )
}

BooksCard.propTypes = {
    book: PropTypes.object
}

export default BooksCard
