// Example using React
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RecentlyAdded = () => {
  const [recentBooks, setRecentBooks] = useState([]);

  useEffect(() => {
    const fetchRecentBooks = async () => {
      const response = await axios.get("https://library-management-server-site.vercel.app/books/recent");
      console.log(response.data);
      setRecentBooks(response.data);
    };

    fetchRecentBooks();
  }, []);

  return (
    <div className="mt-28">
      <h2 className="text-3xl font-bold text-center my-16">
        Recently Added Books
      </h2>
      <div className="grid lg:grid-cols-4 gap-6">
        {recentBooks.map((book) => (
          <Link
            to={`/categories/${book.category_name}/${book._id}`}
            key={book._id}
            className="max-w-sm bg-secondary px-4 py-6 rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:bg-secondary-dark hover:shadow-xl"

          >
            <div className="flex justify-center w-full">
              <img
                src={book.image}
                alt={book.name}
                className=" h-40 object-cover"
              />
            </div>
            <div className="px-4 flex flex-col space-y-4 py-4 mt-4">
              <div className="font-bold text-lg">{book.name}</div>
              <p className="font-semibold">{book.author}</p>
              <p className="">
                Added on 9th June,2024
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;
