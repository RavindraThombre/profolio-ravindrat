import { useState } from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import PortfolioModal from "../components/PortfolioModal";

const portfolioItems = [
    {
        title: "Schecullar",
        image: "/src/assets/schedullr.jpeg",
        description:
            "Built with React, Tailwind, and Stripe for online shopping. This platform allows users to browse products, add to cart, and securely make payments.",
        category: "Full Stack",
        github: "https://github.com/RavindraThombre/schedulrr.git",
        demo: "https://schedulrr-two.vercel.app/",
    },
    {
        title: "Portfolio Website",
        image: "/src/assets/portfolio.jpeg",
        description:
            "Modern personal portfolio with animations, smooth transitions, and a contact form for easy communication. Built with React and TailwindCSS.",
        category: "Frontend",
        github: "https://github.com/ravindrathombre",
        demo: "https://mern-portfolio-app-2gqr.onrender.com/",
    },
    // Add more items...
];

const categories = ["All", "Frontend", "Backend", "Full Stack"];

export default function Portfolio() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const openModal = (item) => {
        setSelectedItem(item);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedItem(null);
    };

    const filteredItems =
        selectedCategory === "All"
            ? portfolioItems
            : portfolioItems.filter((item) => item.category === selectedCategory);

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-3xl font-bold text-center text-indigo-600 mb-10 uppercase underline"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, type: "spring", stiffness: 100 }}
                >
                    My Portfolio
                </motion.h2>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition duration-300 ${selectedCategory === cat
                                ? "bg-indigo-600 text-white border-indigo-600"
                                : "bg-white text-indigo-600 border-indigo-300 hover:bg-indigo-100"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            onClick={() => openModal(item)}
                        >
                            <LazyLoadImage
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                                effect="blur"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-indigo-600">{item.title}</h3>
                                <div className="mt-2">
                                    {/* Category Badge */}
                                    <span className="inline-block px-3 py-1 text-xs bg-indigo-100 text-indigo-600 rounded-full">{item.category}</span>
                                </div>
                                <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                                <div className="flex gap-3 mt-4">
                                    <a
                                        href={item.github}
                                        onClick={(e) => e.stopPropagation()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1 text-sm bg-gray-100 border border-indigo-300 text-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={item.demo}
                                        onClick={(e) => e.stopPropagation()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1 text-sm bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <PortfolioModal show={modalOpen} onClose={closeModal} item={selectedItem} />
        </section>
    );
}
