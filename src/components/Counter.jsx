import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Counter({ end, suffix = "", duration = 1200 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTs = null;
    const animate = (ts) => {
      if (!startTs) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      const next = end >= 10 ? Math.floor(progress * end) : (progress * end).toFixed(1);
      setCount(next);
      if (progress < 1) requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);

  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl font-bold md:text-4xl"
    >
      <motion.span
        key={count}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {count}
        {suffix}
      </motion.span>
    </motion.p>
  );
}

export default Counter;
