
import { useContext, useState } from "react";
 // react icons
import { IoIosArrowUp} from "react-icons/io";
import {TbLogout2} from "react-icons/tb";
import {CiMenuFries} from "react-icons/ci";
import {FiUser} from "react-icons/fi";
import Container from "@/components/layout/Container";
import { NavLink } from "react-router";
import { AuthContext } from "@/contexts/ProviderContext";
import logo from "../../assets/logo.png";


const Navbar = () => {
    const [accountMenuOpen, setAccountMenuOpen] = useState(false)
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);

    return (
        <header className="bg-linear-to-r/decreasing from-indigo-500 to-teal-400 py-6">
            <Container>
                <nav className="flex items-center justify-between w-full relative">

                    {/* logo */}
                    <div className="flex items-center justify-center gap-1">
                        <img src={logo} alt="logo" className="w-[36px] " />
                        <h3 className="text-white uppercase text-[20px] underline decoration-cyan-300 underline-offset-4">ventify</h3>
                    </div>

            {/* nav links */}
            <ul className="items-center gap-[20px] text-[1rem] text-white md:flex hidden">
                <li className="flex items-center hover:text-blue-200 group gap-[5px] cursor-pointer">
                    <NavLink to={"/"}>Home</NavLink>
                </li>

                <li className="flex items-center hover:text-blue-200 group gap-[5px] cursor-pointer">
                    <NavLink to={"/events"}>Events</NavLink>
                </li>

                <li className="flex items-center hover:text-blue-200 group gap-[5px] cursor-pointer">
                        <NavLink to={user? "/add-event" : "/login"}>Add Event</NavLink>
                </li>

                <li className="flex items-center hover:text-blue-200 group gap-[5px] cursor-pointer">
                            <NavLink to={`/users-event`}>My Event</NavLink>
                        </li>
            </ul>

                    {/* user account */}
                    {
                        !user ? <NavLink to={"/login"} className="text-white underline underline-offset-8">Login</NavLink> :

                        <div className="flex items-center gap-[15px]">
                <div className="flex items-center gap-[10px] cursor-pointer relative"
                     onClick={() => setAccountMenuOpen(!accountMenuOpen)}>
                    <div className="relative">
                        <img
                            src={user?.photoURL}
                            alt="avatar" className="w-[35px] h-[35px] rounded-full object-cover"/>
                        <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-[0px] right-0 border-2 border-white"></div>
                    </div>


                    <div
                        className={`${accountMenuOpen ? "translate-y-0 opacity-100 z-[1]" : "translate-y-[10px] opacity-0 z-[-1]"} bg-white w-max rounded-md absolute dark:bg-slate-800 top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-[5px]`}>
                        <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] dark:text-[#abc2d3] dark:hover:bg-slate-900/50 text-gray-600 hover:bg-gray-50">
                            <FiUser/>
                            {user.name}
                        </p>
     

                        <div className="mt-3 border-t dark:border-slate-700 border-gray-200 pt-[5px]">
                            <button onClick={() => logout()} className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] dark:text-red-500 dark:hover:bg-red-500/20 text-red-500 hover:bg-red-50">
                                <TbLogout2/>
                                Logout
                            </button>
                        </div>

                    </div>

                    <IoIosArrowUp
                        className={`${accountMenuOpen ? "rotate-0" : "rotate-[180deg]"} transition-all duration-300 dark:text-[#abc2d3] text-gray-600 sm:block hidden`}/>

                </div>

                <CiMenuFries onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                             className="text-[1.8rem] dark:text-[#abc2d3] text-[#424242]c cursor-pointer md:hidden flex"/>
                        </div>
                     }

            {/* mobile sidebar */}
            <aside
                className={`${mobileSidebarOpen ? "translate-y-0 opacity-100 z-20" : "translate-y-[200px] opacity-0 z-[-1]"} md:hidden bg-white border border-blue-300 p-4 text-center absolute top-[55px] left-0 sm:w-[300px] rounded-lg w-full transition-all duration-300`}>
                <ul className="items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col">
                <li className="flex items-center hover:text-blue-200 group gap-[5px] cursor-pointer">
                    <NavLink to={"/"}>Home</NavLink>
                </li>

                <li className="flex items-center hover:text-blue-200 group gap-[5px] cursor-pointer">
                    <NavLink to={"/events"}>Events</NavLink>
                </li>

                <li className="flex items-center hover:text-blue-200 group gap-[5px] cursor-pointer">
                        <NavLink to={user? "/add-event" : "/login"}>Add Event</NavLink>
                </li>

                <li className="flex items-center hover:text-blue-200 group gap-[5px] cursor-pointer">
                            <NavLink to={`/users-event`}>My Event</NavLink>
                </li>
                </ul>
            </aside>
            </nav>
            </Container>
        </header>
    );
};

export default Navbar;