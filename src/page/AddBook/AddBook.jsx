import axios from "axios";
import Swal from "sweetalert2";
const AddBook = () => {
    const handleAddBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const author = form.author.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const addedDate = new Date();
        const book  = {image,name,author,category,rating,quantity,description,addedDate: addedDate.toISOString()}
        axios.post('http://localhost:5000/allBooks',book)
        .then(res => {
            if(res.data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Book added successfully',
                    showConfirmButton: true,
                    timer: 2500
                })
            }
        })
        
       
    }
    return (
        <div className="mt-28 mb-4">
            <h2 className="text-3xl font-bold text-center text-accent mt-8">Add Books</h2>
            <form onSubmit={handleAddBook}>
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
                        <input type="number" name="quantity" placeholder="Type here" className="flex-1  input input-bordered input-info w-full " />
                    </div>
                    <div className="w-full my-2">
                        <div className="form-control">
                            <label className="label">Short Description</label>
                            <input name="description" className="textarea textarea-bordered h-24" placeholder="Bio"></input>

                        </div>
                    </div>


                </div>
                <input type="submit" value='Add Book' name="" className="btn btn-accent w-full p-4 rounded-lg my-4" id="" />
            </form>
        </div>
    );
};

export default AddBook;