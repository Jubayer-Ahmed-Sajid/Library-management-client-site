import { Outlet } from "react-router-dom";
import Navbar from "../page/Home/Header/NavBar";
import Footer from '../components/Footer'

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;