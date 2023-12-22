import {
    createBrowserRouter
} from "react-router-dom";
import Layout from "../Layout/Layout";
import MainHome from "../Layout/MainHome";
import TAsk from "../Components/Pages/Task/TAsk";
import LogIn from "../Components/Pages/Login/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/> ,
        children:[
            {
                path:'/',
                element: <MainHome/> ,
            },
            {
                path:'/manageTask',
                element: <TAsk/> ,
            },
            {
                path:'/logIn',
                element: <LogIn/> ,
            },
        ]
    },
]);