import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
} from "lucide-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [loading, setLoading] = useState(true);
  const [showWhatsAppOptions, setShowWhatsAppOptions] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  const openWhatsAppChat = () => {
    const phoneNumber = '+919573264575';
    const message = encodeURIComponent('Hi! I would like to know more about your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Router>
      <LoadingScreen show={loading} />
      <div className="bg-animated" />
      <div className="grain" />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <WhatsAppButton 
        showOptions={showWhatsAppOptions}
        onToggle={() => setShowWhatsAppOptions(!showWhatsAppOptions)}
        onOpenChat={openWhatsAppChat}
      />
    </Router>
  );
}

function WhatsAppButton({ showOptions, onToggle, onOpenChat }) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenChat}
              className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-white shadow-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={20} />
              <span className="font-medium">Open Chat</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onToggle}
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
          showOptions 
            ? 'bg-gray-600 hover:bg-gray-700 rotate-45' 
            : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {showOptions ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </motion.button>
    </div>
  );
}

export default App;
