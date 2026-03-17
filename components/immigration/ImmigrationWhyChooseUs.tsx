"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { whyChooseUs } from "@/lib/immigration-data";
import { MagneticButton, ScrollReveal, ScrollRevealItem } from "@/components/motion";

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
            setCount(Math.floor(progress * target));
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
    <span ref={ref} className="imm-stat-value">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function ImmigrationWhyChooseUs() {
  const d = whyChooseUs;
  return (
    <section className="imm-why-choose">
      <div className="container">
        <div className="imm-why-choose-inner">
          <div className="imm-why-choose-image-col">
            <Image
              src={d.image}
              alt="Vikas & Nisha - Chase Global Immigration"
              width={570}
              height={700}
              className="imm-why-choose-img"
            />
          </div>

          <div className="imm-why-choose-content">
            <ScrollReveal>
              <h2 className="imm-why-choose-title">{d.title}</h2>
              <p className="imm-why-choose-desc">{d.description}</p>
              <MagneticButton>
                <Link href={d.ctaHref} className="imm-why-choose-cta">
                  {d.ctaLabel}
                </Link>
              </MagneticButton>
            </ScrollReveal>

            <ScrollReveal stagger={0.06} delay={0.15}>
              <div className="imm-why-choose-reasons">
                {d.reasons.map((reason, idx) => (
                  <ScrollRevealItem key={idx}>
                    <div className="imm-why-choose-reason">
                      <span className="imm-reason-text">{reason}</span>
                      <i className="fas fa-chevron-right imm-reason-arrow" />
                    </div>
                  </ScrollRevealItem>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={0.1} delay={0.3}>
              <div className="imm-stats-grid">
                {d.stats.map((stat, idx) => (
                  <ScrollRevealItem key={idx}>
                    <div className="imm-stat-card">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2000} />
                      <span className="imm-stat-label">{stat.label}</span>
                    </div>
                  </ScrollRevealItem>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
