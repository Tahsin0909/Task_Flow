import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";

const Layout = () => {
    return (
        <div className="max-w-[95vw] mx-auto">
            <Navbar/>
            <Outlet/>
            <p>Footer</p>
        </div>
    );
};

export default Layout;