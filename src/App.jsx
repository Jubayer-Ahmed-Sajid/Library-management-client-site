import MainLayout from "./components/Layout/MainLayout";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <MainLayout >
            <Outlet></Outlet>
            <Footer></Footer>
            </MainLayout>
            
        </div>
    );
};

export default App;