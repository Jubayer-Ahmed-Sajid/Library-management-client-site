import { useLoaderData } from "react-router-dom";

const CategoryBooks = () => {
    const books = useLoaderData()
    console.log(books.length)
    return (
        <div>
           <h2>Category book</h2> 
        </div>
    );
};

export default CategoryBooks;