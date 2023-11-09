import BooksCard from "./BooksCard";
import  useAllBooks from "../../hooks/allBooks";
 "../../hooks/allBooks";

const AllBooks = () => {
    const {data,isLoading,refetch}=useAllBooks()
    if(isLoading){
        return <h2>loading</h2>
    }
    if(!isLoading){

        return (
            <div>
            <h3 className="my-8 text-2xl font-bold text-center">Total Books:{data?.length}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-4  md:grid-cols-3  gap-6 p2">
                {
                    data?.map(book => <BooksCard key={book._id} refetch={refetch} book= {book}></BooksCard> )
                }
            </div>
        </div>
    );
}
};

export default AllBooks;