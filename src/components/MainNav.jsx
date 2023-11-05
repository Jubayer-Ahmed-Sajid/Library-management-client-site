import { NavLink } from "react-router-dom";


const MainNav = () => {
    return (
        <div className="w-full rounded-sm  max-w-7xl mx-auto">

            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <div className="flex-1 px-2 mx-2">Navbar Title</div>
            <div className="flex-none gap-5 hidden lg:block">
                <div className="menu menu-horizontal flex gap-5">
                    {/* Navbar menu content here */}
                    <NavLink className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-sm btn-ghost'} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-sm btn-ghost'} to='/addBook'> Add Book</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-sm btn-ghost'} to='/allBooks'> All Books</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-sm btn-ghost'} to='/borrowed'>Borrowed
                        Books</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-sm btn-ghost'} to='/login'>Login</NavLink>
                </div>
            </div>
        </div>
    );
};

export default MainNav;