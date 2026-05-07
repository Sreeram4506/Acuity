import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import MagneticButton from "./MagneticButton";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "../data";

function Navbar() {
  const location = useLocation();
  const links = ["About", "Testimonials", "Contact"];
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkPath = (link) => {
    const linkMap = {
      "Services": "/services",
      "About": "/about", 
      "Testimonials": "/testimonials",
      "Contact": "/contact"
    };
    return linkMap[link] || "/";
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "glass-strong border-b border-white/10" : ""
      }`}
    >
      <nav className="container-pad flex items-center justify-between py-4">
        <Link to="/" className="gradient-text text-xl font-bold">
          ACUITY TAX SERVICES
        </Link>

        <ul className="hidden gap-6 md:flex items-center">
          <li 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 transition-colors ${
                location.pathname === "/services"
                  ? "text-saffron"
                  : "text-muted hover:text-white"
              }`}
            >
              Services <ChevronDown size={14} className={`transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 top-full mt-2 w-64 glass-strong rounded-xl border border-white/10 shadow-2xl p-2"
                >
                  <div className="grid gap-1">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        to={`/services?service=${service.title}`}
                        className="block px-4 py-2 text-sm text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                    <div className="border-t border-white/5 mt-1 pt-1">
                      <Link
                        to="/services"
                        className="block px-4 py-2 text-sm text-saffron font-medium hover:bg-white/5 rounded-lg transition-colors"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        View All Services
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          {links.map((link, i) => (
            <motion.li key={link} whileHover={{ scale: 1.05 }}>
              <Link
                to={getLinkPath(link)}
                className={`transition-colors ${
                  location.pathname === getLinkPath(link)
                    ? "text-saffron"
                    : "text-muted hover:text-white"
                }`}
              >
                {link}
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center gap-2 text-white hover:text-saffron transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Contact Button */}
          <MagneticButton className="btn-primary hidden md:block">
            <Link to="/contact" className="block w-full">
              Contact Us
            </Link>
          </MagneticButton>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full glass-strong border-b border-white/10 md:hidden"
          >
            <div className="container-pad py-4 overflow-y-auto max-h-[80vh]">
              <ul className="space-y-2">
                <li className="py-2">
                  <div className="text-sm font-bold text-saffron mb-2">SERVICES</div>
                  <div className="grid gap-2 pl-4">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        to={`/services?service=${service.title}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-muted hover:text-white text-sm"
                      >
                        {service.title}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-saffron text-sm font-medium mt-1"
                    >
                      All Services
                    </Link>
                  </div>
                </li>
                {links.map((link) => (
                  <motion.li key={link} whileHover={{ scale: 1.02 }}>
                    <Link
                      to={getLinkPath(link)}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-3 transition-colors border-t border-white/5 ${
                        location.pathname === getLinkPath(link)
                          ? "text-saffron"
                          : "text-muted hover:text-white"
                      }`}
                    >
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;

