import MainLayout from "./page/Home/Header/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <MainLayout></MainLayout>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default App;