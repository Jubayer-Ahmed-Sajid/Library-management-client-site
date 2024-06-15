import { useContext} from "react"
import { AuthContext } from "../components/AuthProvider/AuthProvider"
import { useQuery } from "@tanstack/react-query"

const  useBorrow=() => {
    const { user} = useContext(AuthContext)
    console.log(user)
    
        const { data, isLoading ,isFetched,refetch} = useQuery({
            queryKey: ['borrowedBooks'],
            queryFn: async () => {
                const data = await fetch(`https://library-management-server-site.vercel.app/borrowings?email=${user?.email}`, )
                return await data.json()
            },
        });
        return {data,isLoading,isFetched,refetch}
        
  
    
}
export default useBorrow
