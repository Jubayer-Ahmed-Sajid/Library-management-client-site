import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const {category_name,image_url} = category
    return (
        <div className="card  bg-base-300 shadow-xl">
            <div className='bg-primary p-4'>

            <figure><img src={image_url} className="object-cover h-[220px] rounded-lg" /></figure>
            </div>
            <div className="card-body">
                <h2 className="text-xl text-white my-4 font-semibold bg-tertiary p-2 rounded-lg text-center " >{category_name} Books</h2>
                <div className="card-actions justify-center">
                    <Link to ={`/categories/${category.category_name}`}>

                    <button className="btn border-none bg-secondary text-white">See Books</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
Category.propTypes ={
    category: PropTypes.object
}

export default Category;