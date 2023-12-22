import { Link } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";
import NavOptions from "./NavOptions";
const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    {/* dropdown for mobile  */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavOptions />
                        </ul>
                    </div>
                    <Link to={'/'} className="">
                        <img className="lg:w-16 md:w-14 w-10" src="../../public/image/logo.png" alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <NavOptions />
                </div>
                <div className="navbar-end">
                    <Link to={'/logIn'}>
                        <button className="flex gap-1 items-center cursor-pointer transition-all bg-[#E7717D] text-white px-6 py-2 rounded-lg border-[#AFD275] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-[#AFD275] shadow-[#AFD275] active:shadow-none hover:font-bold">
                            <IoIosLogIn size={20} />
                            Log In
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;