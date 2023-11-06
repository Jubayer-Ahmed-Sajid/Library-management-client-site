import { useLoaderData } from "react-router-dom";
import Books from "./Books";

const CategoryBooks = () => {
    const books = useLoaderData()
    console.log(books.length)
    return (
        <div>

           <h2 className="text-3xl text-center font-bold my-6">Books</h2> 
           <div className="grid grid-cols-4 gap-4 bg-yellow-200 p-6">
            {
                books.map(book=> <Books key={book._id} book={book}></Books>)
            }
           </div>
        </div>
    );
};

export default CategoryBooks;