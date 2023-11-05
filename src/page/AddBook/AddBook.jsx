
const AddBook = () => {
    return (
        <div className="my-4">
            <h2 className="text-3xl font-bold text-center text-accent mt-8">Add Books</h2>
            <div className="flex w-full px-4 justify-around gap-4">
                <div className="my-2 w-full">

                <label className="text-xl font-semibold" >Book Name</label>
            <input type="text" placeholder="Type here" className="flex-1  input input-bordered input-info w-full " />
                </div>
                <div className="w-full my-2">

                <label className="text-xl font-semibold">Book Name</label>
            <input type="text" placeholder="Type here" className="flex-1  input input-bordered input-info w-full " />
                </div>
            

            </div>
        </div>
    );
};

export default AddBook;