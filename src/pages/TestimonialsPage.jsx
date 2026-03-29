import { motion } from "framer-motion";
import TestimonialCarousel from "../components/TestimonialCarousel";
import SectionWrapper from "../components/SectionWrapper";
import { testimonials } from "../data";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <SectionWrapper 
        title="Client Success Stories" 
        subtitle="Real experiences from businesses we've helped transform."
        className="pt-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="glass rounded-2xl p-8 text-center">
            <h3 className="mb-4 text-2xl font-semibold">What Our Clients Say</h3>
            <p className="text-muted leading-relaxed">
              Don't just take our word for it. Hear from the businesses we've helped achieve 
              compliance excellence and operational efficiency. Their success stories are our greatest motivation.
            </p>
          </div>
        </motion.div>

        <TestimonialCarousel items={testimonials} />
      </SectionWrapper>
    </div>
  );
}
