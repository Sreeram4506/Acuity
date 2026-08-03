import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import MagneticButton from "../components/MagneticButton";
import SectionWrapper from "../components/SectionWrapper";
import ServiceCard from "../components/ServiceCard";
import Counter from "../components/Counter";
import TestimonialCarousel from "../components/TestimonialCarousel";
import BlogSection from "../components/BlogSection";
import { services, stats, testimonials, blogPosts } from "../data";
import { UserCheck, WalletCards, Zap, Star } from "lucide-react";

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
            <span className="text-3xl md:text-4xl lg:text-5xl">Senior Tax and Compliance Support for Growing Businesses</span>
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl text-muted"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            A focused, fast-loading website built to earn trust quickly, explain services clearly, and turn business visitors into qualified enquiries.
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
          <motion.div
            className="mt-8 grid gap-3 sm:grid-cols-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            {[
              "ITR, GST, compliance, audit support, advisory",
              "Clear enquiry and callback pathway",
              "Mobile-responsive and fast-loading",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted">
                <CheckCircle2 className="mt-0.5 shrink-0 text-saffron" size={16} />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          style={{ y: cardY }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          <div className="glass-strong relative rounded-[2rem] p-8 shadow-2xl">
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-amber-400 to-teal-400 opacity-20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-gradient-to-tr from-blue-400 to-saffron opacity-20 blur-2xl" />
            <div className="relative">
              <h3 className="mb-4 text-xl font-semibold">One partner for the essentials</h3>
              <p className="mb-6 text-muted">Simple structure, clear services, and an obvious route to enquire or request a callback.</p>
              <div className="grid gap-3 text-sm">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-saffron" size={16} />
                  <span>Trust-first presentation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="text-teal-400" size={16} />
                  <span>Senior tax and compliance positioning</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneCall className="text-blue-400" size={16} />
                  <span>Enquiry, callback, and WhatsApp friendly</span>
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

      <SectionWrapper id="services" title="Our Services" subtitle="Services arranged for quick scanning, trust building, and lead conversion.">
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

      <SectionWrapper id="why" title="Why Choose ACUITY TAX SERVICES?" subtitle="A credible, senior-facing experience designed for business owners who need clarity fast.">
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

      <SectionWrapper id="testimonials" title="Client Success Stories" subtitle="Real experiences from businesses we've helped streamline.">
        <TestimonialCarousel items={testimonials} />
      </SectionWrapper>

      <SectionWrapper id="blog" title="Insights & Updates" subtitle="Practical guidance for business owners, founders, and finance teams.">
        <BlogSection posts={blogPosts} />
      </SectionWrapper>
    </>
  );
}
