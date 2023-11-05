import { NavLink } from 'react-router-dom';
const SideNav = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
                {/* Sidebar content here */}
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/about'>About</NavLink>

            </ul>
        </div>
    );
};

export default SideNav;