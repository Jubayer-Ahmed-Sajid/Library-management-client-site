import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Books = ({ book }) => {
    const { _id ,name, category_name, image, author, rating } = book
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src='https://i.ibb.co/RYqscF8/Winnertsktgkg.jpg' alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{category_name}</p>
                <div className="card-actions">
                    <Link to={`/categories/${category_name}/${_id}`} className="btn btn-primary">See details</Link>
                </div>
            </div>
        </div>
    )
}

Books.propTypes = {
    book: PropTypes.object
}

export default Books
