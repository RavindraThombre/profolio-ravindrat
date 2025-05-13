import { motion } from "framer-motion";

const ExperienceSection = () => {
    return (
        <div className="mt-16">
            {/* Section title */}
            <h4 className="text-2xl font-semibold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 transition-all duration-300 hover:scale-105 hover:underline underline-offset-4">
                Experience & Journey
            </h4>

            {/* Timeline Container */}
            <div className="space-y-8 max-w-3xl mx-auto relative border-l-4 border-indigo-400 pl-6">
                {/* Experience 1 */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="mb-2 font-bold text-indigo-600">2024 – Present</div>
                    <h5 className="text-lg font-semibold">Freelance Web Developer & Lead Generation</h5>
                    <p className="text-gray-700">
                        Designing and building responsive websites for various clients using React, Tailwind, Node.js and Lead Generation.
                    </p>
                </motion.div>

                {/* Experience 2 */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="mb-2 font-bold text-indigo-600">2021 – Present</div>
                    <h5 className="text-lg font-semibold">Software Developer at Aloha Technology</h5>
                    <p className="text-gray-700">
                        Worked on multiple frontend projects using Angular, React, and PostgreSQL, focusing on scalable UI and performance.
                    </p>
                </motion.div>

                {/* Experience 3 */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="mb-2 font-bold text-indigo-600">2020 – 2022</div>
                    <h5 className="text-lg font-semibold">MCA Studies</h5>
                    <p className="text-gray-700">
                        Completed Master’s in Computer Applications while developing a strong foundation in programming and full-stack development.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default ExperienceSection;
