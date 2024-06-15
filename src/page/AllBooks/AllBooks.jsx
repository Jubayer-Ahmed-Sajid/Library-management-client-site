import BooksCard from "./BooksCard";
import useAllBooks from "../../hooks/allBooks";
import { useState } from "react";
import axios from "axios";

"../../hooks/allBooks";

const AllBooks = () => {
    const [query, setQuery] = useState('')
    const { data, refetch } = useAllBooks()
    const [displayBooks,setDisplayBooks] = useState(data)
   
        const handleSearch = async () => {
            const response = await axios.get(`https://library-management-server-site.vercel.app/books/search?name=${query}`);
            console.log(response)
            if(response.data.length){
                setDisplayBooks(response.data);
            }
           

        };
    return (
        <div className="mt-28">
            <h3 className="my-8 text-2xl font-bold text-center">Total Books:{displayBooks?.length}</h3>
            <div className='lg:flex items-center flex-row justify-center mb-8 w-full'>
                <input type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder='search book here' className='border-black pl-4 w-2/4  p-2 bg-base-300 flex' name="" id="" />
                <button onClick={handleSearch} className='text-xl font-semibold bg-black text-white px-3 py-2  rounded-lg '>Search</button>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4  md:grid-cols-3  gap-6 p2">
                {
                    displayBooks?.map(book => <BooksCard key={book._id} refetch={refetch} book={book}></BooksCard>)
                }
            </div>
        </div>
    );
}


export default AllBooks;