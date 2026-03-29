import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import SectionWrapper from "../components/SectionWrapper";
import { services } from "../data";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const serviceName = query.get("service");
    if (serviceName) {
      const idx = services.findIndex(s => s.title === serviceName);
      if (idx !== -1) setActiveService(idx);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen">
      <SectionWrapper 
        title="Our Services" 
        subtitle="Comprehensive compliance and business solutions for modern enterprises."
        className="pt-32"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <ServiceCard 
                service={service} 
                active={activeService === idx}
                onToggle={() => setActiveService(activeService === idx ? null : idx)}
              />
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
