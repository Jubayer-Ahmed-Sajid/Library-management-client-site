const Trending = () => {
  return (
    <div className="mt-28">
      <h2 className="text-3xl font-bold my-12 text-center">Trending Books</h2>
      <div className="grid gap-4 md:grid-cols-5  bg-tertiary p-4 rounded-lg my-12">
        <div>
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1490528560i/4671.jpg"
              className="h-[220px] object-cover"
              alt=""
            />
          </div>
          <div>
            <h2 className="my-3 text-2xl font-semibold">The Great Gatsby</h2>
            <p>F. Scott Fitzgerald</p>
          </div>
        </div>
        <div>
          <div>
            <img
              className="h-[220px] object-cover"
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg"
              alt=""
            />
          </div>
          <div>
            <h2 className="my-3 text-2xl font-semibold">
              To Kill a Mockingbird
            </h2>
            <p>Harper Lee</p>
          </div>
        </div>
        <div>
          <div>
            <img
              className="h-[220px] object-cover"
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg"
              alt=""
            />
          </div>
          <div>
            <h2 className="my-3 text-2xl font-semibold">1984</h2>
            <p>George Orwell</p>
          </div>
        </div>
        <div>
          <div>
            <img
              className="h-[220px] object-cover"
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg"
              alt=""
            />
          </div>
          <div>
            <h2 className="my-3 text-2xl font-semibold">The Hobbit</h2>
            <p>J.R.R. Tolkien</p>
          </div>
        </div>
        <div>
          <div>
            <img
              className="h-[220px] object-cover"
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg"
              alt=""
            />
          </div>
          <div>
            <h2 className="my-3 text-2xl font-semibold">Pride and Prejudice</h2>
            <p>Jane Austen</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
