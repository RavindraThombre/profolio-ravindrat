import { motion } from "framer-motion";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub,
    FaChartLine,
    FaFileExcel,
    FaAngular,
    FaDatabase
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiVite, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const categorizedSkills = {
    "Frontend": [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Angular", icon: <FaAngular /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    "Backend": [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Lead Generation", icon: <FaChartLine /> },
        { name: "MongoDb", icon: <FaDatabase /> },
        { name: "Express.js", icon: <FaNodeJs /> },
        { name: "REST APIs", icon: <FaNodeJs /> },
    ],
    "Tools": [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <VscVscode /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "Excel", icon: <FaFileExcel /> },

    ]
};

const SkillsSection = () => {
    return (
        <section className="py-16 bg-gray-100" id="skills">
            {/* Section Title with hover effect */}
            <motion.h2
                className="text-3xl md:text-3xl uppercase font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 transition-transform duration-300 hover:scale-105 hover:underline underline-offset-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                My Skills
            </motion.h2>



            {/* Skills Categories */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
                {Object.entries(categorizedSkills).map(([category, skills], catIndex) => (
                    <div key={catIndex}>
                        {/* Category Title with Hover Effect */}
                        <motion.h3
                            className="text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 hover:scale-105 hover:underline underline-offset-4"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            {category}
                        </motion.h3>

                        {/* Skill Items */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-medium shadow-md hover:bg-indigo-100 transition-all duration-300 hover:scale-105"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    {/* Skill Icon */}
                                    <span className="text-lg text-indigo-600">{skill.icon}</span>
                                    {/* Skill Name */}
                                    <span>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
