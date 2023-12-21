import {
    createBrowserRouter
} from "react-router-dom";
import Layout from "../Layout/Layout";
import MainHome from "../Layout/MainHome";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/> ,
        children:[
            {
                path:'/',
                element: <MainHome/> ,
            }
        ]
    },
]);