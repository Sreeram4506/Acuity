import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";
import emailjs from '@emailjs/browser';

const initial = {
  name: "",
  email: "",
  city: "",
  service: "",
  message: "",
};

function ConsultationForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Valid email required";
    if (!form.service) next.service = "Please select a service";
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    
    setLoading(true);
    
    try {
      // EmailJS configuration
      const serviceID = 'service_etize5g';
      const templateID = 'template_6k3f7hh';
      const publicKey = 'svPMBfOpUE5M0NpeY';
      
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        city: form.city,
        service: form.service,
        message: form.message,
        to_email: 'sreerammulukuri6@gmail.com',
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setSubmitted(true);
      setForm(initial);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send email. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="glass-strong rounded-3xl p-12 text-center flex flex-col items-center justify-center min-h-[400px]"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 12, delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6"
            >
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
            <p className="text-muted max-w-xs">
              Thank you for reaching out. Our team will get back to you within 24 hours.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSubmitted(false)}
              className="mt-8 text-sm text-saffron font-medium hover:underline"
            >
              Send another message
            </motion.button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="glass-strong rounded-3xl p-6 md:p-8"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { label: "Name", key: "name", placeholder: "Your full name" },
                { label: "Email", key: "email", placeholder: "you@domain.com" },
                { label: "City", key: "city", placeholder: "Mumbai" },
              ].map((field, i) => (
                <motion.div
                  key={field.key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Field label={field.label} value={form[field.key]} error={errors[field.key]}>
                    <input
                      value={form[field.key]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                    />
                  </Field>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.32 }}
            >
              <Field label="Select Service" value={form.service} error={errors.service}>
                <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                  <option value="">Choose a service</option>
                  <option>Business Registration</option>
                  <option>GST Registration</option>
                  <option>Company Incorporation</option>
                  <option>Tax Filing Services</option>
                  <option>Accounting Services</option>
                  <option>Compliance Management</option>
                  <option>Business Advisory</option>
                  <option>Trademark Registration</option>
                </select>
              </Field>
            </motion.div>

            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Field label="Message" value={form.message}>
                <textarea
                  rows="4"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your requirement..."
                />
              </Field>
            </motion.div>

            <motion.div
              className="mt-5 flex items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.48 }}
            >
              <MagneticButton 
                type="submit" 
                className={`btn-primary w-full md:w-auto relative overflow-hidden transition-all duration-300 ${loading ? 'opacity-80 pr-12' : ''}`} 
                disabled={loading}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className={loading ? 'text-transparent' : ''}>Submit Request</span>
                  {loading && (
                    <motion.div 
                      className="absolute right-4"
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </motion.div>
                  )}
                </div>
              </MagneticButton>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, children, error }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-muted">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-rose-300">{error}</span>}
    </label>
  );
}

export default ConsultationForm;

