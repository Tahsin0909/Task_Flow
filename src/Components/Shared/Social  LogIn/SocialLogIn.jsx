/* eslint-disable react/prop-types */

import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextApi/ContextApi";

const SocialLogIn = ({ text }) => {
    const { GoogleSignUp } = useContext(AuthContext)
    // const axiosPublic = useAxiosPublic()
    // Navigate After LOgIn
    // const location = useLocation()
    // const navigate = useNavigate()
    const handleGoogle = () => {
        GoogleSignUp()
            .then(result => {
                const User = {
                    name: result.user.displayName,
                    email: result.user.email,
                    emailVerified: result.user.emailVerified,
                    creationTime: result.user.metadata.creationTime,
                    lastSignInTime: result.user.metadata.lastSignInTime,
                    profileImage: result.user.photoURL,
                    role: 'user'
                }
                console.log(User);
                // axiosPublic.patch(`/users/${result.user.email}`, User)
                //     .then(res => {
                //         console.log(res.data);
                //         if (res.data.insertedId  || (res.data.modifiedCount > 0 || res.data.matchedCount > 0) ) {
                //             toast.success(`Authenticating as ${result.user.email}`)
                //             localStorage.setItem('ToastShowed', JSON.stringify('false'))
                //             location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/')
                //         }
                //     })
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div>
            <div className="divider primary-text">{text}</div>

            <div className=" flex gap-8 md:gap-10 items-center justify-center ">
                <img onClick={handleGoogle} className="w-10 hover:shadow-xl  rounded-b-full hover:shadow-[#AFD275] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-200" src="https://cdn-icons-png.flaticon.com/128/281/281764.png" alt="Google Sign Up" />
                <img className="w-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-200" src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook Sign Up" />
                <img className="w-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-200" src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="Instagram Sign up" />
            </div>
            <Toaster />
        </div>
    );
};

export default SocialLogIn;