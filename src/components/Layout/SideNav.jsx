import { NavLink } from 'react-router-dom';
const SideNav = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
                {/* Sidebar content here */}
                <NavLink className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-sm btn-ghost'} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-sm btn-ghost'} to='/addBook'> Add Book</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-sm btn-ghost'} to='/allBooks'> All Books</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-sm btn-ghost'} to='/borrowed'>Borrowed
                    Books</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-sm btn-ghost'} to='/login'>Login</NavLink>

            </ul>
        </div>
    );
};

export default SideNav;