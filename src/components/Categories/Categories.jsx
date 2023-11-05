import axios from "axios";
import { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/categories')
        .then(res => setCategories(res.data))
    },[])
    return (
        <div >
            <h2 className="text-5xl text-center font-bold my-12">Book Categories</h2>
            <div className="grid gap-4 grid-cols-4 bg-blue-600 p-8">
                {
                    categories.map ((category,index) => <Category category= {category} key={index}></Category>)
                }
            </div>
            
            
        </div>
    );
};

export default Categories;