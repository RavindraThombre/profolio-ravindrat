// src/pages/Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/heroImage.png"; // Use your PNG or SVG

function Home() {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex items-center justify-center py-12 px-4 md:px-20">
            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                        Hi, I'm <span className="text-blue-600">Ravindra Thombre</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
                        Web Developer & Lead Generation Specialist
                    </h2>
                    <p className="text-gray-600 mb-6">
                        I build modern, fast, and responsive websites that convert. I help
                        businesses generate leads and grow their online presence through
                        clean UI and smart digital strategies.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium animate-bounce">
                            3+ Years Experience
                        </span>
                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                            50+ Projects Delivered
                        </span>
                    </div>

                    <div className="flex gap-4">
                        <Link
                            to="/portfolio"
                            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
                        >
                            View Portfolio
                        </Link>
                        <Link
                            to="/contact"
                            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={heroImage}
                        alt="Web Developer"
                        className="w-full max-w-md mx-auto drop-shadow-xl"
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default Home;
