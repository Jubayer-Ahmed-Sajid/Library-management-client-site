import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useBook from "../hooks/useBook";
const UpdateBook = () => {
    const { categories, id } = useParams()
    console.log(categories, id)
    const { data, isLoading} = useBook({categories, id})
    if(isLoading){
        return <h1>loading</h1>
    }
    console.log(data)
    const action = "update";
    console.log(data)
    const handleUpdateBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const author = form.author.value;
        const category_name = form.category.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const newBook = { image, name, author, category_name, rating, quantity, description }
        axios.patch(`https://assignment-11-server-site-4jptgqsg4-jubayer-ahmed-sajid.vercel.app/allBooks/${data.category_name}/${data._id}/${action}`, newBook)
            .then(res => {
                console.log(res.data)
                if(res.data.modifiedCount > 0){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Book Updated successfully',
                        showConfirmButton: true,
                        timer: 2500
                    })
                }
                    
                
            })


    }
    return (
        <div className="my-4">
            <h2 className="text-3xl font-bold text-center text-accent mt-8">Update Books</h2>
            <form onSubmit={handleUpdateBook}>
                <div className="flex w-full px-4 justify-around gap-4">
                    <div className="my-2 w-full">

                        <label className="label" >Image</label>
                        <input type="url" name="image" defaultValue={data.image} placeholder="Type here" className="flex-1  input input-bordered input-info w-full " />
                    </div>

                </div>
                <div className="flex w-full px-4 justify-around gap-4">
                    <div className="my-2 w-full">

                        <label className="label" >Book Name</label>
                        <input type="text" defaultValue={data.name} name="name" placeholder="Type here" className="flex-1  input input-bordered input-info w-full " />
                    </div>
                    <div className="w-full my-2">

                        <label className="label">Author Name</label>
                        <input type="text" defaultValue={data.author} name="author" placeholder="Type here" className="flex-1  input input-bordered input-info w-full " />
                    </div>


                </div>
                <div className="flex w-full px-4 justify-around gap-4">
                    <div className="my-2 w-full">

                        <label className="label" >Category</label>
                        <input type="text" name="category" defaultValue={data.category_name} placeholder="Type here" className="flex-1  input input-bordered input-info w-full " />
                    </div>
                    <div className="w-full my-2">

                        <label className="label">Rating</label>
                        <input type="text" name="rating" defaultValue={data.rating} placeholder="Type here" className="flex-1  input input-bordered input-info w-full " />
                    </div>


                </div>
                <div className="flex w-full px-4 justify-around gap-4">
                    <div className="my-2 w-full">

                        <label className="label    " >Quantity</label>
                        <input type="number" name="quantity" defaultValue={data.quantity} placeholder="Type here" className="flex-1  input input-bordered input-info w-full " />
                    </div>
                    <div className="w-full my-2">
                        <div className="form-control">
                            <label className="label">Short Description</label>
                            <input name="description" defaultValue={data.description} className="textarea textarea-bordered h-24" placeholder="Bio"></input>

                        </div>
                    </div>


                </div>
                <input type="submit" value='Update Book' name="" className="btn btn-accent w-full p-4 rounded-lg my-4" id="" />
            </form>
        </div>
    );
};

export default UpdateBook;