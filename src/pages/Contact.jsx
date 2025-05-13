import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [formStatus, setFormStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Send email using EmailJS
        emailjs
            .sendForm("service_yqxqtqk", "template_m24dgk9", e.target, "JGxZrsrv23jFru7OE")
            .then(
                (result) => {
                    setIsSubmitting(false);
                    setFormStatus("Thank you for your message! I'll get back to you shortly.");
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setIsSubmitting(false);
                    setFormStatus("Oops! Something went wrong, please try again later.");
                }
            );
    };

    return (
        <motion.section
            className="py-16 px-4 bg-gray-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >

            <div className="max-w-6xl mx-auto">
                {/* Contact Me Heading */}
                <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10 uppercase underline">
                    Contact Me
                </h2>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Left Side: Address and Socials */}
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-md space-y-4"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-xl font-semibold text-indigo-600 mb-4">Let's Connect</h3>
                        <div className="flex items-start gap-3 text-gray-700">
                            <FaEnvelope className="text-indigo-500 mt-1" />
                            <span>ravindrathombre66@gmail.com</span>
                        </div>

                        <div className="flex items-start gap-3 text-gray-700">
                            <FaPhoneAlt className="text-indigo-500 mt-1" />
                            <span>+91 93591 64626</span>
                        </div>

                        <div className="flex items-start gap-3 text-gray-700">
                            <FaMapMarkerAlt className="text-indigo-500 mt-1" />
                            <span>Sector 27, Sambhaji Chowk, Akudri, Pune - 411044, Maharashtra, India</span>
                        </div>

                        <div className="flex flex-col gap-4 pt-2 text-2xl text-indigo-600">
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/ravindrathombre"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-yellow-500 transition"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/ravindra-thombre-3823371ba"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-yellow-500 transition"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="https://www.instagram.com/mr_ravindra_09official/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-yellow-500 transition"
                                >
                                    <FaInstagram />
                                </a>
                            </div>
                            <div className="w-full h-48 rounded-lg overflow-hidden shadow">
                                <iframe
                                    title="Google Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.6750846853854!2d73.75341657469564!3d18.59056816750648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91cdeaaaad3%3A0x1803f5ee9f4c01c2!2sSambhaji%20Chowk%2C%20Sector%2027%2C%20Akurdi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411044!5e0!3m2!1sen!2sin!4v1715601833091!5m2!1sen!2sin"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    className="rounded-lg shadow"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </motion.div>



                    {/* Right Side: Contact Form */}
                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-md"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </div>
                        </form>

                        {formStatus && (
                            <div className="mt-4 text-center text-green-600">{formStatus}</div>
                        )}
                    </motion.div>
                </div>

                {/* <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>

                    {formStatus && (
                        <div className="mt-4 text-center text-green-600">{formStatus}</div>
                    )}
                </div> */}
            </div>
        </motion.section>
    );
}
