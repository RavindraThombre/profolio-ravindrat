import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import ScrollToTop from "./pages/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import Navbar from "./pages/Navbar";
import Footer from "./Components/Footer";

function App() {

  return (
    <AnimatePresence mode="wait">
      <Router>
        <div className="font-sans text-gray-800">
          <ScrollToTop />
          {/* Navbar */}
          <Navbar />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AnimatePresence>
  );
}

export default App;
