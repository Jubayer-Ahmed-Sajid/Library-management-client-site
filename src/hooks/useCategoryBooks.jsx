import { useQuery } from "@tanstack/react-query";


const useCategoryBooks = (categoryName) => {
    console.log(categoryName)
        
    const { data, isLoading ,isFetched,refetch} = useQuery({
        queryKey: ['allBooks'],
        queryFn: async () => {
            const data = await fetch(`https://library-management-server-site.vercel.app/allbooks/${categoryName}`)
            return await data.json()
        },
    });
    console.log(data)
    return {data,isLoading,isFetched,refetch}
    
};

export default useCategoryBooks;