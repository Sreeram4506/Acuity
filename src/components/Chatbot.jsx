import { useState } from "react";
import { Bot, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const qa = [
  {
    q: "How long does GST registration take?",
    a: "Usually 5-10 working days depending on document quality and verification.",
  },
  {
    q: "Do you support PAN India?",
    a: "Yes, we provide nationwide service delivery with remote onboarding.",
  },
  {
    q: "Can I bundle services?",
    a: "Yes, bundled plans reduce overall cost and improve compliance continuity.",
  },
];

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Namaste. Ask me about tax, registration, or compliance." },
  ]);

  const ask = (question, answer) => {
    setMessages((prev) => [...prev, { from: "user", text: question }, { from: "bot", text: answer }]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="glass-strong mb-3 w-[320px] rounded-2xl p-4 shadow-2xl"
          >
            <div className="mb-3 flex items-center justify-between">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-semibold"
              >
                AI Service Assistant
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setOpen(false)}
              >
                <X size={16} />
              </motion.button>
            </div>
            <div className="mb-3 max-h-56 space-y-2 overflow-y-auto">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: m.from === "bot" ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`rounded-xl p-2 text-sm ${
                    m.from === "bot" ? "bg-white/10 text-muted" : "bg-amber-400/20"
                  }`}
                >
                  {m.text}
                </motion.div>
              ))}
            </div>
            <div className="space-y-2">
              {qa.map((item, i) => (
                <motion.button
                  key={item.q}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.12)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => ask(item.q, item.a)}
                  className="w-full rounded-lg border border-white/10 p-2 text-left text-xs hover:bg-white/10 transition-all"
                >
                  {item.q}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-teal-400 text-slate-950 shadow-2xl animate-bounce-in"
      >
        <Bot />
      </motion.button>
    </div>
  );
}

export default Chatbot;
