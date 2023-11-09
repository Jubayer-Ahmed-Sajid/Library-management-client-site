import useBorrow from "../../hooks/useBorrow";
import Borrowed from "./Borrowed";
const BorrowedBooks = () => {
   
const {data,isLoading,refetch} = useBorrow()
if(isLoading){
    return <h1>loading</h1>
}


    return (
        <div>
            <h2 className="text-2xl font-bold text-center my-4">Your total Borrowed Books: {data?.length}</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4">
                {
                    data?.map((borrowedBook, ind) => <Borrowed key={ind} refetch={refetch} borrowedBook={borrowedBook}></Borrowed>)
                }
            </div>
        </div>
    );
};

export default BorrowedBooks;