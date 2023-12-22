/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Components/ContextApi/ContextApi";


const PrivateRoutes = ({children}) => {
    const { AuthUser, loading } = useContext(AuthContext)
    if(loading){
        return <p>LOading</p>
    }
    if(AuthUser){
        return children
    }
    return <Navigate to={`/logIn?${location.pathname}`} replace={true} />
};

export default PrivateRoutes;