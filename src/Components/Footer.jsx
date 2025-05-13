import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-indigo-600 text-white py-6">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <motion.div
                    className="text-lg font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    © {new Date().getFullYear()} Ravindra Thombre | All Rights Reserved
                </motion.div>

                <motion.div
                    className="flex gap-4 mt-4 md:mt-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <a
                        href="https://github.com/ravindrathombre"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-300 transition duration-300 text-2xl"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ravindra-thombre-3823371ba"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-300 transition duration-300 text-2xl"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://www.instagram.com/mr_ravindra_09official/"
                        className="hover:text-yellow-300 transition duration-300 text-2xl"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="mailto:ravindrathombre66@email.com"
                        className="hover:text-yellow-300 transition duration-300 text-2xl"
                    >
                        <FaEnvelope />
                    </a>
                </motion.div>
            </div>
        </footer>
    );
}
