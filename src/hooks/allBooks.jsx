import { useQuery } from "@tanstack/react-query";

const useAllBooks= () => {
   
    const { data, isLoading ,isFetched,refetch} = useQuery({
        queryKey: ['categoryBooks'],
        queryFn: async () => {
            const data = await fetch('http://localhost:5000/allbooks')
            return await data.json()
        },
    });
    return {data,isLoading,isFetched,refetch}
    

};

export default useAllBooks;