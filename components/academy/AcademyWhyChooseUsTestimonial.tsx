"use client";

import { useEffect, useRef, useState } from "react";
import { whyChooseUs, statsCounters, pieCharts } from "@/lib/academy-data";
import { GlowOrb, ScrollReveal, ScrollRevealItem } from "@/components/motion";

function AnimatedCounter({ target, suffix, duration }: { target: number; suffix: string; duration: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
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
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.round(progress * target * 10) / 10);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="stat-value">
      {Number.isInteger(count) ? count : count.toFixed(1)}{suffix}
    </span>
  );
}

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

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDash = (animPercent / 100) * circumference;

  return (
    <div ref={ref} className="pie-chart-item">
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r={radius} fill="none" stroke={trackColor} strokeWidth="7" />
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={`${strokeDash} ${circumference}`}
          transform="rotate(-90 70 70)"
          style={{ transition: "stroke-dasharray 0.1s ease" }}
        />
        <text x="70" y="70" textAnchor="middle" dominantBaseline="central" className="pie-chart-text">
          {animPercent}%
        </text>
      </svg>
      <span className="pie-chart-label">{label}</span>
    </div>
  );
}

export default function AcademyWhyChooseUsTestimonial() {
  return (
    <section className="why-choose-section" style={{ backgroundImage: "url(/assets/academy/images/backgrounds/client-carousel-bg.jpg)" }}>
      <GlowOrb color="rgba(255,255,255,0.03)" top="10%" left="80%" size={550} duration={14} />
      <div className="container">
        <div className="why-choose-inner">
          <div className="why-choose-left">
            <span className="section-subtitle light">{whyChooseUs.subtitle}</span>
            <h2 className="section-title light">{whyChooseUs.title}</h2>
            <ScrollReveal stagger={0.1}>
              <div className="why-choose-items">
                {whyChooseUs.items.map((item, idx) => (
                  <ScrollRevealItem key={idx}>
                    <div className="why-choose-item">
                      <div className="why-choose-item-num">{String(idx + 1).padStart(2, "0")}</div>
                      <div className="why-choose-item-content">
                        <h4>{item.title}</h4>
                        {item.description && <p>{item.description}</p>}
                        {item.rating && (
                          <div className="rating-display">
                            <AnimatedCounter target={item.rating} suffix="" duration={2000} />
                            <div className="rating-stars">
                              {[...Array(5)].map((_, i) => (
                                <i key={i} className={`fas fa-star${i < Math.floor(item.rating!) ? "" : " half"}`} style={{ animationDelay: `${i * 0.15}s` }} />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </ScrollRevealItem>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="why-choose-right">
            <ScrollReveal stagger={0.1}>
              <div className="stats-grid">
                {statsCounters.map((stat, idx) => (
                  <ScrollRevealItem key={idx}>
                    <div className="stat-card">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2000} />
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  </ScrollRevealItem>
                ))}
              </div>
            </ScrollReveal>
            <div className="pie-charts-row">
              {pieCharts.map((chart, idx) => (
                <PieChart key={idx} {...chart} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
