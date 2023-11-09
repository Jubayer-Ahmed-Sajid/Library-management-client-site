import Books from "./Books";
import useCategoryBooks from "../../hooks/useCategoryBooks";
import { useParams } from "react-router-dom";

const CategoryBooks = () => {
    const {categoryName} = useParams()

    const {data,isLoading,refetch} = useCategoryBooks(categoryName)
    if(isLoading){
        return <h1>Loading</h1>
    }
    return (
        <div>

           <h2 className="text-3xl text-center font-bold  my-6">Books</h2> 
           <div className="grid grid-cols-4 gap-4 px-4 bg-base-300 ">
            {
                data?.map(book=> <Books refetch={refetch} key={book._id} book={book}></Books>)
            }
           </div>
        </div>
    );
};

export default CategoryBooks;