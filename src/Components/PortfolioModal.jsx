import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioModal({ show, onClose, item }) {
    if (!item) return null;

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative"
                        initial={{ scale: 0.9, y: -20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-red-500"
                        >
                            ×
                        </button>
                        <img src={item.image} alt={item.title} className="rounded mb-4" />
                        <h3 className="text-xl font-semibold text-indigo-600 mb-2">{item.title}</h3>
                        <p className="text-gray-700 mb-4">{item.description}</p>
                        <div className="flex gap-3">
                            <a
                                href={item.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-1 bg-gray-100 border border-indigo-400 text-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition"
                            >
                                GitHub
                            </a>
                            <a
                                href={item.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
                            >
                                Live Demo
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
