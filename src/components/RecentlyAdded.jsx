// Example using React
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RecentlyAdded = () => {
  const [recentBooks, setRecentBooks] = useState([]);

  useEffect(() => {
    const fetchRecentBooks = async () => {
    
        const response = await axios.get('https://assignment-11-server-site-4jptgqsg4-jubayer-ahmed-sajid.vercel.app/books/recent');
        console.log(response.data)
        setRecentBooks(response.data);
       
    };

    fetchRecentBooks();
  }, []);

  return (
    <div>
      <h2 className='text-3xl font-bold text-center my-8'>Recently Added Books</h2>
      <div className='grid lg:grid-cols-5 gap-4'>
        {recentBooks.map(book => (
           <Link to={`/categories/${book.category_name}/${book._id}`} key={book._id} className="max-w-sm rounded overflow-hidden shadow-lg">
           <img src={book.image} alt={book.name} className="w-full h-48 object-cover" />
           <div className="px-6 py-4">
             <div className="font-bold text-xl mb-2">{book.name}</div>
             <p className="text-gray-700 text-base">{book.author}</p>
             <p className="text-gray-700 text-base">Added Date: {book.addedDate}</p>
           </div>
         </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;
