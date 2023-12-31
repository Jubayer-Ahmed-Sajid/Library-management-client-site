import { useQuery } from "@tanstack/react-query";

const useAllBooks= () => {
   
    const { data, isLoading ,isFetched,refetch} = useQuery({
        queryKey: ['categoryBooks'],
        queryFn: async () => {
            const data = await fetch('https://assignment-11-server-site-4jptgqsg4-jubayer-ahmed-sajid.vercel.app/allbooks')
            return await data.json()
        },
    });
    return {data,isLoading,isFetched,refetch}
    

};

export default useAllBooks;