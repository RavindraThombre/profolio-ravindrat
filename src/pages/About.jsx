import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection ";



const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 text-gray-800 px-4 py-12">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.h2
                    className="text-3xl md:text-3xl font-bold mb-6 text-center uppercase text-indigo-700 underline underline-offset-4"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h2>

                {/* Intro Section */}
                <motion.div
                    className="md:flex items-center gap-12 mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <img
                        src="/src/assets/heroImage.png" // use your own illustration or image
                        alt="About"
                        className="w-full md:w-[400px] rounded-xl shadow-lg mb-8 md:mb-0"
                    />
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-indigo-700 hover:text-indigo-900 transition duration-300">
                            Hi, I'm Ravindra Thombre
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-700 hover:text-gray-900 transition duration-300">
                            I’m a passionate Web Developer and Lead Generation Specialist with experience in
                            building modern and responsive websites and applications. I thrive in fast-paced
                            environments and enjoy solving problems through clean, efficient code and effective
                            client engagement strategies.
                        </p>
                    </div>
                </motion.div>

                {/* Skills Section */}
                <SkillsSection />
                {/* Experience Section */}
                <ExperienceSection />
                {/* Resume Download Button */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="/src/assets/Immediate_Joiner.pdf" // update path if needed
                        download
                        className="inline-block px-8 py-3 rounded-full shadow-lg text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-600 hover:to-indigo-600 transition-all duration-500 ease-in-out transform hover:scale-105"
                    >
                        📄 Download Resume
                    </a>
                </motion.div>

            </div>
        </div>
    );
};

export default About;
