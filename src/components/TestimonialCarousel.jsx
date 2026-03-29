import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function TestimonialCarousel({ items }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3800);
    return () => clearInterval(id);
  }, [items.length]);

  const item = items[index];

  return (
    <div className="mx-auto max-w-3xl">
      <AnimatePresence mode="wait">
        <motion.article
          key={item.name}
          initial={{ opacity: 0, y: 24, rotateX: -10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -24, rotateX: 10 }}
          transition={{ duration: 0.45, type: "spring", stiffness: 100 }}
          className="glass-strong rounded-3xl p-8 text-center backdrop-blur-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            className="mb-3 text-4xl"
          >
            ⭐
          </motion.div>
          <p className="mb-5 text-lg leading-relaxed md:text-xl">"{item.quote}"</p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="font-semibold text-amber-600">{item.name}</p>
            <p className="text-sm text-muted">{item.company}</p>
          </motion.div>
        </motion.article>
      </AnimatePresence>
      <div className="mt-6 flex justify-center gap-3">
        {items.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setIndex(i)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: i === index ? 1 : 0.4 }}
            className={`rounded-full transition-all ${
              i === index
                ? "h-3 w-8 bg-amber-600 shadow-lg shadow-amber-600/50"
                : "h-3 w-3 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialCarousel;
