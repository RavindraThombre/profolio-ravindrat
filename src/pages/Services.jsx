import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard"; // adjust path as needed
import { FaCode, FaChartLine, FaSearch } from "react-icons/fa";

export default function Services() {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12 text-indigo-700 uppercase"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    My Services
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <ServiceCard
                        icon={<FaCode />}
                        title="Web Development"
                        description="Responsive and attractive websites using modern technologies."
                    />
                    <ServiceCard
                        icon={<FaChartLine />}
                        title="Lead Generation"
                        description="Helping businesses find and convert potential clients."
                    />
                    <ServiceCard
                        icon={<FaSearch />}
                        title="SEO Optimization"
                        description="Improving website visibility on search engines."
                    />
                </div>
            </div>
        </section>
    );
}
