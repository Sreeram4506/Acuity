import { motion } from "framer-motion";

function SectionWrapper({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section-gap">
      <motion.div
        className="container-pad"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && <h2 className="mb-4 text-3xl font-bold md:text-5xl">{title}</h2>}
            {subtitle && <p className="mx-auto max-w-3xl text-muted">{subtitle}</p>}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}

export default SectionWrapper;
