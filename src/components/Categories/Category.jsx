const Category = ({ category }) => {
    const {category_name,image_url} = category
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image_url} className="object-cover h-[220px]" /></figure>
            <div className="card-body">
                <h2 className="card-title">{category_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Category;