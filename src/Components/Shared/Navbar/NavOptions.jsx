
import { NavLink } from 'react-router-dom';

const NavOptions = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-2  items-start lg:items-center'>
            <NavLink to={`/`}
                className={({ isActive, isPending }) =>
                    isActive ? "active border-b-4 border-[#AFD275] bg-[#E7717D] rounded-md py-1 px-3 text-white" :
                        isPending ? "pending" : "hover:scale-[1.02] hover:border-b-4 border-[#AFD275] rounded-md py-1 px-3  transition-all "
                }
            >
                Home
            </NavLink>
            <NavLink to={`/manageTask`}
                className={({ isActive, isPending }) =>
                    isActive ? "active border-b-4 border-[#AFD275] bg-[#E7717D] rounded-md py-1 px-3 text-white" :
                        isPending ? "pending" : "hover:scale-[1.02] hover:border-b-4 border-[#AFD275] rounded-md py-1 px-3  transition-all "
                }
            >
                Manage Task
            </NavLink>
            <NavLink to={`/contactUs`}
                className={({ isActive, isPending }) =>
                    isActive ? "active border-b-4 border-[#AFD275] bg-[#E7717D] rounded-md py-1 px-3 text-white" :
                        isPending ? "pending" : "hover:scale-[1.02] hover:border-b-4 border-[#AFD275] rounded-md py-1 px-3  transition-all "
                }
            >
                Contact Us
            </NavLink>
        </div>
    );
};

export default NavOptions;