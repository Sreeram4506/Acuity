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
      
      setForm(initial);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send email. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
        <MagneticButton type="submit" className="btn-primary" disabled={loading}>
          {loading ? (
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
              Sending...
            </motion.span>
          ) : (
            "Submit Request"
          )}
        </MagneticButton>
      </motion.div>
    </motion.form>
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
