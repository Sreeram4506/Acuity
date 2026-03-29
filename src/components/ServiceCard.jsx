import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

function ServiceCard({ service, active = false, onToggle = () => {} }) {
  const Icon = service.icon;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="glass group rounded-2xl p-5 shadow-premium transition-transform duration-300 hover:shadow-glow hover:scale-[1.02] animate-fade-in"
    >
      <button onClick={onToggle} className="w-full text-left">
        <div className="mb-4 flex items-start justify-between">
          <div className="rounded-xl bg-white/10 p-3">
            <Icon size={22} className="text-amber-600" />
          </div>
          <ChevronDown
            size={18}
            className={`transition-transform ${active ? "rotate-180" : ""}`}
          />
        </div>
        <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
        <p className="text-sm text-muted">{service.description}</p>
      </button>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-4 border-t border-white/10 pt-4">
              <p className="text-sm text-muted mb-3 italic">
                {service.details}
              </p>
              {service.features && (
                <ul className="space-y-1">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-saffron/80">
                      <div className="h-1 w-1 rounded-full bg-saffron" />
                      {feat}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default ServiceCard;
