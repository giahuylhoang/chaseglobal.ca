"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems, bookingSection, pieCharts } from "@/lib/academy-data";
import { GlowOrb } from "@/components/motion";

function PieChart({ percent, color, trackColor, label }: { percent: number; color: string; trackColor: string; label: string }) {
  const [animPercent, setAnimPercent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / 1500, 1);
            setAnimPercent(Math.round(progress * percent));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [percent]);

  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const strokeDash = (animPercent / 100) * circumference;

  return (
    <div ref={ref} className="faqb-pie-item">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={radius} fill="none" stroke={trackColor} strokeWidth="5" />
        <circle
          cx="60" cy="60" r={radius} fill="none" stroke={color} strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={`${strokeDash} ${circumference}`}
          transform="rotate(-90 60 60)"
          style={{ transition: "stroke-dasharray 0.1s ease" }}
        />
        <text x="60" y="60" textAnchor="middle" dominantBaseline="central" className="faqb-pie-text">
          {animPercent}%
        </text>
      </svg>
      <span className="faqb-pie-label">{label}</span>
    </div>
  );
}

export default function AcademyFaqBooking() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const d = bookingSection;
  const [form, setForm] = useState({ country: "", service: "", name: "", phone: "", date: "", time: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="faqb-section">
      <GlowOrb color="rgba(255,255,255,0.03)" top="50%" left="30%" size={480} duration={16} />
      <div className="container">
        {/* Top row: FAQ left + Booking right */}
        <div className="faqb-top">
          {/* Left column: FAQ + description */}
          <div className="faqb-left">
            <span className="faqb-subtitle">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="faqb-title">Questions &amp; Answer</h2>

            <div className="faqb-accordion">
              {faqItems.map((item, idx) => (
                <div key={idx} className={`faqb-item${openIdx === idx ? " open" : ""}`}>
                  <button
                    className="faqb-question"
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  >
                    <span>{item.question}</span>
                    <i
                      className="fas fa-chevron-right faqb-chevron"
                      style={{ transform: openIdx === idx ? "rotate(90deg)" : "rotate(0deg)" }}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openIdx === idx && (
                      <motion.div
                        className="faqb-answer-motion"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <p>{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <p className="faqb-desc">{d.description}</p>
          </div>

          {/* Right column: Booking form + call */}
          <div className="faqb-right">
            <div className="faqb-form-card">
              <h3 className="faqb-form-title">{d.title}</h3>
              <form className="faqb-form" onSubmit={(e) => e.preventDefault()}>
                <div className="faqb-form-row">
                  <select name="country" value={form.country} onChange={handleChange} className="faqb-select">
                    <option value="">Select Country</option>
                    {d.countries.map((c) => (<option key={c} value={c}>{c}</option>))}
                  </select>
                  <select name="service" value={form.service} onChange={handleChange} className="faqb-select">
                    <option value="">Select Service</option>
                    {d.serviceOptions.map((s) => (<option key={s} value={s}>{s}</option>))}
                  </select>
                </div>
                <div className="faqb-form-row">
                  <input type="text" name="name" placeholder="Your Full Name" value={form.name} onChange={handleChange} className="faqb-input" />
                  <input type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="faqb-input" />
                </div>
                <div className="faqb-form-row">
                  <input type="date" name="date" value={form.date} onChange={handleChange} className="faqb-input" />
                  <input type="time" name="time" value={form.time} onChange={handleChange} className="faqb-input" />
                </div>
                <button type="submit" className="faqb-submit">CONTACT US</button>
              </form>
            </div>

            <div className="faqb-call-box">
              <h4 className="faqb-call-title">{d.orCallTitle}</h4>
              <a href={`tel:${d.phone.replace(/\s/g, "")}`} className="faqb-phone">{d.phone}</a>
              <p className="faqb-support">{d.supportText}</p>
            </div>
          </div>
        </div>

        {/* Bottom row: Pie charts */}
        <div className="faqb-pies">
          {pieCharts.map((chart, idx) => (
            <PieChart key={idx} {...chart} />
          ))}
        </div>
      </div>
    </section>
  );
}
