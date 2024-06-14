import { useQuery } from "@tanstack/react-query";


const useCategoryBooks = (categoryName) => {
    console.log(categoryName)
        
    const { data, isLoading ,isFetched,refetch} = useQuery({
        queryKey: ['allBooks'],
        queryFn: async () => {
            const data = await fetch(`http://localhost:5000/allbooks/${categoryName}`)
            return await data.json()
        },
    });
    console.log(data)
    return {data,isLoading,isFetched,refetch}
    
};

export default useCategoryBooks;