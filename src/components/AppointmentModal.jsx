import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function AppointmentModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="glass-strong w-full max-w-lg rounded-3xl p-6"
          >
            <h3 className="mb-2 text-2xl font-semibold">Book Consultation</h3>
            <p className="mb-4 text-sm text-muted">
              Pick a preferred slot and our advisor will call you back.
            </p>
            <form onSubmit={submit} className="space-y-3">
              <input placeholder="Full Name" required />
              <input placeholder="Phone Number" required />
              <input type="date" required />
              <select required>
                <option value="">Select time slot</option>
                <option>10:00 AM - 12:00 PM</option>
                <option>12:00 PM - 2:00 PM</option>
                <option>4:00 PM - 6:00 PM</option>
              </select>
              <div className="mt-4 flex items-center gap-3">
                <button className="btn-primary">{submitted ? "Booked" : "Confirm"}</button>
                <button type="button" className="btn-secondary" onClick={onClose}>
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AppointmentModal;
