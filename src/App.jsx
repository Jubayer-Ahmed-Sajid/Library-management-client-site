import { Children } from "react";
import MainLayout from "./components/Layout/MainLayout";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <div>
            <MainLayout >
            <Outlet></Outlet>
            </MainLayout>
            
        </div>
    );
};

export default App;