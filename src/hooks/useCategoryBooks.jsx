import { useQuery } from "@tanstack/react-query";


const useCategoryBooks = (categoryName) => {
    console.log(categoryName)
        
    const { data, isLoading ,isFetched,refetch} = useQuery({
        queryKey: ['allBooks'],
        queryFn: async () => {
            const data = await fetch(`https://assignment-11-server-site-ku5j0tstc-jubayer-ahmed-sajid.vercel.app/allbooks/${categoryName}`)
            return await data.json()
        },
    });
    console.log(data)
    return {data,isLoading,isFetched,refetch}
    
};

export default useCategoryBooks;