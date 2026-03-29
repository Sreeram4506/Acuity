import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import Counter from "../components/Counter";
import { UserCheck, ShieldCheck, WalletCards, Zap, Sparkles, Star } from "lucide-react";

const whyItems = [
  { icon: UserCheck, title: "Expert Professionals", text: "CAs, CSs, and compliance specialists." },
  { icon: ShieldCheck, title: "Secure Data Handling", text: "Encrypted workflows and controlled access." },
  { icon: WalletCards, title: "Affordable Pricing", text: "Transparent INR plans with no hidden fees." },
  { icon: Zap, title: "Fast Processing", text: "Execution-oriented workflows with SLA discipline." },
  { icon: Sparkles, title: "Dedicated Support", text: "Human support with advisory-level clarity." },
  { icon: Star, title: "Nationwide Services", text: "Serving founders and SMEs across India." },
];

const stats = [
  { label: "Businesses Served", value: 5000, suffix: "+" },
  { label: "Compliance Tasks", value: 50000, suffix: "+" },
  { label: "Expert Professionals", value: 50, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SectionWrapper 
        title="About ACUITY TAX SERVICES" 
        subtitle="We are your trusted partner for business compliance and growth."
        className="pt-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="mb-4 text-2xl font-semibold">Our Mission</h3>
            <p className="text-muted leading-relaxed">
              At ACUITY TAX SERVICES, we simplify business compliance for Indian enterprises. Our mission is to provide 
              comprehensive, technology-driven solutions that help businesses focus on growth while we handle 
              their regulatory requirements. From startups to established enterprises, we deliver personalized 
              services that ensure compliance, efficiency, and peace of mind.
            </p>
          </div>
        </motion.div>

        <div className="mb-12">
          <h3 className="mb-8 text-2xl font-semibold text-center">Why Choose ACUITY TAX SERVICES?</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-saffron/10 text-saffron">
                    <item.icon size={24} />
                  </div>
                </div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-b from-transparent to-saffron/5 rounded-2xl p-8">
          <h3 className="mb-8 text-2xl font-semibold text-center">Our Impact</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 text-3xl font-bold text-saffron">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
