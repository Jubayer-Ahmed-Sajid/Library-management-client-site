import MainNav from "../MainNav";
import SideNav from "./SideNav";
import PropTypes from 'prop-types'


const MainLayout = ({ children }) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full  navbar bg-base-300">
                    <MainNav></MainNav>
                </div>
                {/* Page content here */}
                {children}
            </div>
            <SideNav></SideNav>
        </div>
    );
};
MainLayout.propTypes ={
children: PropTypes.node
}

export default MainLayout;