import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[#07101f]/95 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-saffron/60 to-transparent" />
      <div className="container-pad py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Link to="/" className="gradient-text text-2xl font-bold">
              ACUITY TAX SERVICES
            </Link>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 md:text-base">
              Senior tax and compliance support for businesses that want clear communication, reliable execution, and a smooth enquiry experience.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-saffron px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
              >
                Enquire Now
                <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">Quick Links</h3>
              <ul className="mt-4 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/72 transition hover:text-saffron"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">Contact</h3>
              <div className="mt-4 space-y-4 text-sm text-white/72">
                <p className="flex items-start gap-3">
                  <Mail size={16} className="mt-0.5 shrink-0 text-saffron" />
                  <span>info@acuitytax.in</span>
                </p>
                <p className="flex items-start gap-3">
                  <Phone size={16} className="mt-0.5 shrink-0 text-saffron" />
                  <span>+91 9573264575</span>
                </p>
                <p className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-saffron" />
                  <span>
                    LIG 237, Road No 2, near Dhana Lakshmi Center,
                    <br />
                    Phase 1, KPHB Colony, Hyderabad, Telangana 500072
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Acuity Tax Services. All rights reserved.</p>
          <p>Tax, compliance, registration, accounting, and advisory support.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
