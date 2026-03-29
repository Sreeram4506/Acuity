import { useMemo, useState } from "react";
import { motion } from "framer-motion";

function PricingCalculator({ services }) {
  const [selected, setSelected] = useState([]);
  const [urgency, setUrgency] = useState("Standard");

  const total = useMemo(() => {
    const base = services
      .filter((s) => selected.includes(s.title))
      .reduce((acc, s) => acc + s.price, 0);
    if (urgency === "Priority") return Math.round(base * 1.2);
    return base;
  }, [services, selected, urgency]);

  const toggle = (title) => {
    setSelected((prev) => (prev.includes(title) ? prev.filter((i) => i !== title) : [...prev, title]));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100 }}
      className="glass rounded-3xl p-6 md:p-8"
    >
      <h3 className="mb-4 text-2xl font-semibold">Pricing Calculator</h3>
      <p className="mb-5 text-sm text-muted">
        Build a custom estimate for your service stack in INR.
      </p>
      <div className="grid gap-3 md:grid-cols-2">
        {services.map((service, i) => (
          <motion.label
            key={service.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
            className="flex items-center gap-3 rounded-xl border border-white/10 p-3 cursor-pointer transition-all"
          >
            <input
              type="checkbox"
              checked={selected.includes(service.title)}
              onChange={() => toggle(service.title)}
              className="h-4 w-4 cursor-pointer"
            />
            <span className="text-sm">{service.title}</span>
          </motion.label>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <label className="text-sm text-muted">Processing:</label>
        <motion.select
          value={urgency}
          onChange={(e) => setUrgency(e.target.value)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="max-w-[180px] cursor-pointer"
        >
          <option>Standard</option>
          <option>Priority</option>
        </motion.select>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-6 rounded-2xl border border-amber-600/40 bg-amber-600/10 p-4"
      >
        <p className="text-sm text-muted">Estimated Package</p>
        <motion.p
          key={total}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-amber-600"
        >
          INR {total.toLocaleString("en-IN")}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default PricingCalculator;
