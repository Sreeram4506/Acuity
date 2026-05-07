import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import ConsultationForm from "../components/ConsultationForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SectionWrapper
        title="Contact Us"
        subtitle="Get in touch with our team for personalized solutions."
        className="pt-32"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-5"
            >
              <h3 className="mb-3 text-xl font-semibold">Contact Information</h3>
              <p className="mb-2 flex items-center gap-2 text-sm text-muted">
                <Mail size={15} /> info@acuitytax.in
              </p>
              <p className="mb-2 flex items-center gap-2 text-sm text-muted">
                <Phone size={15} /> +91 9573264575
              </p>
              <p className="flex items-center gap-2 text-sm text-muted">
                <MapPin size={15} /> LIG 237, Road No 2, near Dhana Lakshmi Center Phase 1, kPHB Colony Hyderabad, Telangana 500072
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-2xl p-5"
            >
              <h3 className="mb-3 text-xl font-semibold">Business Hours</h3>
              <p className="text-muted">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-5"
            >
              <h3 className="mb-3 text-xl font-semibold">Get in Touch</h3>
              <p className="text-muted">
                Ready to streamline your business compliance? Reach out to our team for personalized solutions tailored to your needs.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ConsultationForm />
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
}
