
const AddBook = () => {
    return (
        <div className="my-4">
            <h2 className="text-3xl font-bold text-center text-accent mt-8">Add Books</h2>
            <div className="flex w-full px-4 justify-around gap-4">
                <div className="my-2 w-full">

                    <label className="label" >Image</label>
                    <input type="url" name="image" placeholder="Type here" className="flex-1  input input-bordered input-info w-full " />
                </div>

            </div>
            <div className="flex w-full px-4 justify-around gap-4">
                <div className="my-2 w-full">

                    <label className="label" >Book Name</label>
                    <input type="text" name="name" placeholder="Type here" className="flex-1  input input-bordered input-info w-full " />
                </div>
                <div className="w-full my-2">

                    <label className="label">Author Name</label>
                    <input type="text" name="author" placeholder="Type here" className="flex-1  input input-bordered input-info w-full " />
                </div>


            </div>
            <div className="flex w-full px-4 justify-around gap-4">
                <div className="my-2 w-full">

                    <label className="label    " >Category</label>
                    <input type="text" name="category" placeholder="Type here" className="flex-1  input input-bordered input-info w-full " />
                </div>
                <div className="w-full my-2">

                    <label className="label    ">Rating</label>
                    <input type="text" name="rating" placeholder="Type here" className="flex-1  input input-bordered input-info w-full " />
                </div>


            </div>
            <div className="flex w-full px-4 justify-around gap-4">
                <div className="my-2 w-full">

                    <label className="label    " >Quantity</label>
                    <input type="number" placeholder="Type here" className="flex-1  input input-bordered input-info w-full " />
                </div>
                <div className="w-full my-2">
                    <div className="form-control">
                        <label className="label">Short Description</label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                        
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AddBook;