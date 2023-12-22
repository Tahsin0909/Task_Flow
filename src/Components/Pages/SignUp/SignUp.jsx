/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogIn from "../../Shared/Social  LogIn/SocialLogIn";
import useAxiosPublic from "../../Hook/useAxiosPublic";
const SignUp = () => {
    const { createUser, UpdateUser } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    // Navigate After LOgIn
    const location = useLocation()
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm();
    const [passwordError, setPasswordError] = useState('')

    //Handle Login
    const onSubmit = data => {


        // regx to check UpperCAse
        const UpperRegX = /(?=.*[A-Z])/;

        // regx to check special charecter
        const SpecialRegX = /(?=.*[@$!%*?&])/

        if (data.password.length >= 6) {

            // to check UpperCAse
            if (UpperRegX.test(data.password)) {

                // to check special charecter
                if (SpecialRegX.test(data.password)) {
                    setPasswordError('')
                    createUser(data.email, data.password)
                        .then(result => {
                            UpdateUser(data.name, data.photoURL)
                                .then(() => {
                                    console.log(result.user);
                                    const User = {
                                        name: result.user.displayName,
                                        email: result.user.email,
                                        emailVerified: result.user.emailVerified,
                                        creationTime: result.user.metadata.creationTime,
                                        lastSignInTime: result.user.metadata.lastSignInTime,
                                        profileImage: result.user.photoURL,
                                    }
                                    console.log(User)
                                    // axiosPublic.post('/users', User)
                                    //     .then(res => {
                                    //         if (res.data.insertedId) {
                                    //             localStorage.setItem('ToastShowed', JSON.stringify('false'))
                                    //             toast.success(`Authenticating as ${result.user.email}`)
                                    //             location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/')
                                    //         }
                                    //     })

                                })
                                .catch((error) => {
                                    const errorMessage = error.message;
                                    toast.error(`${errorMessage}`)
                                });

                        })
                        .catch((error) => {
                            const errorMessage = error.message;
                            toast.error(`${errorMessage}`)
                        });

                    reset()
                }
                else {
                    setPasswordError('Password must contain at least one special character.')
                }
            }
            else {
                setPasswordError('Password must contain at least one uppercase letter')
            }
        }
        else { setPasswordError('Password must be at least 6 characters long.') }
    }
    return (
        <div>
            <Helmet>
                <title>Task Flow | Sign Up</title>
            </Helmet>
            <div className="flex items-center justify-center py-10">
                <div className="md:w-96 flex flex-col items-center">
                    <h1 className=" text-2xl  font-bold primary-text text-center">Register Now:</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="">
                            <label className="label">
                                <span className="label-text  primary-text">Name</span>
                            </label>

                            <input {...register("name")} type="text" placeholder="Your Name" className="focus:border-[#AFD275] focus:outline-none focus:border-2 border rounded-md placeholder:p-1 w-[300px] h-[40px]" required />

                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text  primary-text">Photo Url</span>
                            </label>

                            <input {...register("photoUrl")} type="text" placeholder="Your Photo" className="focus:border-[#AFD275] focus:outline-none focus:border-2 border rounded-md placeholder:p-1 w-[300px] h-[40px]" required />

                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text  primary-text">Email</span>
                            </label>

                            <input {...register("email")} type="email" placeholder="email" className="focus:border-[#AFD275] focus:outline-none focus:border-2 border rounded-md placeholder:p-1 w-[300px] h-[40px]" required />

                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text  primary-text">Password</span>
                            </label>

                            <input {...register("password")} type="password" placeholder="password" className="focus:border-[#AFD275] focus:outline-none focus:border-2 border rounded-md placeholder:p-1 w-[300px] h-[40px]" required />

                            <label className="label">
                                <span className="label-text text-red-600">{passwordError}</span>
                            </label>
                        </div>
                        <p className="text-black text-sm primary-text">Already have an account? <Link className="hover:underline " to={'/logIn'}>Log In</Link> </p>
                        <div className="mt-4 w-[300px] h-14">
                            <button className="w-full cursor-pointer transition-all bg-[#E7717D] text-white px-6 py-2 rounded-lg border-[#AFD275] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-[#AFD275] shadow-[#AFD275] active:shadow-none hover:font-bold">
                                Register
                            </button>
                        </div>
                    </form>
                    {/* social Login */}
                    <div>
                        <SocialLogIn text={'Or Log In With'} />
                    </div>
                </div>
                <div>
                    <img className="w-[500px]" src="https://i.ibb.co/RCd48jB/image-removebg-preview-19-1.png" alt="" />
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default SignUp;