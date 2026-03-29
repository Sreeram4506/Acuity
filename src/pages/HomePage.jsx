import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MagneticButton from "../components/MagneticButton";
import SectionWrapper from "../components/SectionWrapper";
import ServiceCard from "../components/ServiceCard";
import Counter from "../components/Counter";
import TestimonialCarousel from "../components/TestimonialCarousel";
import BlogSection from "../components/BlogSection";
import { services, stats, testimonials, blogPosts } from "../data";
import { UserCheck, ShieldCheck, WalletCards, Zap, Sparkles, Star } from "lucide-react";

const whyItems = [
  { icon: UserCheck, title: "Expert Professionals", text: "CAs, CSs, and compliance specialists." },
  { icon: ShieldCheck, title: "Secure Data Handling", text: "Encrypted workflows and controlled access." },
  { icon: WalletCards, title: "Affordable Pricing", text: "Transparent INR plans with no hidden fees." },
  { icon: Zap, title: "Fast Processing", text: "Execution-oriented workflows with SLA discipline." },
  { icon: Sparkles, title: "Dedicated Support", text: "Human support with advisory-level clarity." },
  { icon: Star, title: "Nationwide Services", text: "Serving founders and SMEs across India." },
];

function Hero() {
  const { scrollY } = useScroll();
  const cardY = useTransform(scrollY, [0, 600], [0, -70]);

  return (
    <section className="relative overflow-hidden pb-16 pt-20 md:pb-24 md:pt-28">
      <div className="float-shape left-[5%] top-24 h-24 w-24 bg-amber-400/30" />
      <div className="float-shape right-[8%] top-36 h-20 w-20 bg-teal-400/30" />
      <div className="container-pad grid items-center gap-10 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <motion.h1
            className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="gradient-text">ACUITY TAX SERVICES</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl">Business Compliance Made Simple</span>
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl text-muted"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            From registration and filings to accounting and advisory, run your operations with a single trusted partner.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <MagneticButton className="btn-primary">
              <Link to="/contact">Contact Us</Link>
            </MagneticButton>
            <Link
              to="/services"
              className="btn-secondary inline-flex items-center gap-2 transition-all hover:scale-105"
            >
              Explore Services <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          style={{ y: cardY }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          <div className="glass-strong relative rounded-3xl p-8 shadow-2xl">
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-amber-400 to-teal-400 opacity-20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-gradient-to-tr from-blue-400 to-saffron opacity-20 blur-2xl" />
            <div className="relative">
              <h3 className="mb-4 text-xl font-semibold">Start Your Compliance Journey</h3>
              <p className="mb-6 text-muted">Get expert guidance for your business needs.</p>
              <div className="grid gap-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  <span>Business Registration & GST</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-400" />
                  <span>Tax Filing & Compliance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-amber-400" />
                  <span>Accounting & Advisory</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [activeService, setActiveService] = useState(null);

  return (
    <>
      <Hero />
      
      <SectionWrapper id="services" title="Our Services" subtitle="Comprehensive compliance and business solutions for modern enterprises.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <ServiceCard 
                service={service} 
                active={activeService === idx}
                onToggle={() => setActiveService(activeService === idx ? null : idx)}
              />
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="why" title="Why Choose ACUITY TAX SERVICES?" subtitle="We combine technology, expertise, and customer-centric approach to deliver exceptional compliance experiences.">
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
      </SectionWrapper>

      <SectionWrapper id="stats" className="bg-gradient-to-b from-transparent to-saffron/5">
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
      </SectionWrapper>

      <SectionWrapper id="testimonials" title="Client Success Stories" subtitle="Real experiences from businesses we've helped transform.">
        <TestimonialCarousel items={testimonials} />
      </SectionWrapper>

      <SectionWrapper id="blog" title="Insights & Updates" subtitle="Stay informed with the latest compliance trends and business insights.">
        <BlogSection posts={blogPosts} />
      </SectionWrapper>
    </>
  );
}
