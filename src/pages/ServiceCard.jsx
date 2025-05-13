import { motion } from "framer-motion";

function ServiceCard({ title, description, icon }) {
    return (
        <motion.div
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-all transform hover:scale-105 border border-gray-200 hover:border-indigo-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="flex justify-center mb-4 text-indigo-500 hover:text-indigo-700 transition-colors duration-300 text-4xl">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300 text-center mb-2">
                {title}
            </h3>
            <p className="text-slate-600 hover:text-slate-800 transition-colors duration-300 text-center">
                {description}
            </p>
        </motion.div>
    );
}

export default ServiceCard;
