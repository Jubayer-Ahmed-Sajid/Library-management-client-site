import axios from "axios";
import { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        axios.get('https://library-management-server-site.vercel.app/categories')
        .then(res => setCategories(res.data))
    },[])
    return (
        <div>
            <h2 className="text-3xl text-center font-bold mt-32 mb-12 text-gray-700">Book Categories</h2>
            <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 bg-base-300 rounded-lg p-8">
                {
                    categories?.map ((category,index) => <Category category= {category} key={index}></Category>)
                }
            </div>
            
            
        </div>
    );
};

export default Categories;