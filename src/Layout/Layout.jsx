import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <p>NAvbar</p>
            <Outlet/>
            <p>Footer</p>
        </div>
    );
};

export default Layout;