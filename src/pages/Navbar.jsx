import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Make sure you're using the correct hooks
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // useLocation hook works only inside Router

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo and name */}
                <div className="flex items-center space-x-4">
                    {/* Logo */}
                    <motion.img
                        src="/src/assets/logo.png"
                        alt="Logo"
                        className="h-12 w-12 rounded-full shadow-md hover:scale-105 transition duration-300 hover:shadow-lg cursor-pointer hover:shadow-indigo-500/50 "
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    />

                    {/* Name + Subtitle */}
                    <div className="leading-tight">
                        <motion.div
                            className="text-lg font-bold text-indigo-600 hover:text-indigo-800 transition duration-300 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-indigo-600"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            Ravindra Thombre
                        </motion.div>
                        <motion.div
                            className="text-sm text-gray-500"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                        >
                            Website Developer & Lead Generation
                        </motion.div>
                    </div>
                </div>



                {/* Hamburger for mobile */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-3xl text-gray-700 focus:outline-none"
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Desktop Menu Links */}
                <motion.ul className="hidden md:flex md:items-center md:space-x-10 text-lg font-semibold">
                    {["Home", "About", "Services", "Portfolio", "Contact"].map((text) => (
                        <li key={text}>
                            <Link
                                to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                                className={`relative inline-block px-1 py-1 transition-colors duration-300 group ${location.pathname === `/${text.toLowerCase()}` || (text === "Home" && location.pathname === "/")
                                    ? "text-blue-600"
                                    : "text-gray-800"
                                    }`}
                            >
                                {text}
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                </motion.ul>
            </div>


            {/* Mobile Menu Links */}
            <motion.ul
                className={`md:hidden flex flex-col items-center w-full bg-white absolute left-0 top-20 py-4 space-y-4 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 hidden"
                    } text-lg font-medium`}
            >
                {["Home", "About", "Services", "Portfolio", "Contact"].map((text) => (
                    <li key={text}>
                        <Link
                            to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                            className={`relative inline-block px-1 py-1 transition-colors duration-300 group ${location.pathname === `/${text.toLowerCase()}` || (text === "Home" && location.pathname === "/")
                                ? "text-blue-600"
                                : "text-gray-800"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {text}
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                ))}
            </motion.ul>

        </nav>
    );
}

export default Navbar;
