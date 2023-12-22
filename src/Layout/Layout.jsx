import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const Layout = () => {
    return (
        <div className="max-w-[95vw] mx-auto ">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;