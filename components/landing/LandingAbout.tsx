"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { aboutContent, stats } from "@/lib/landing-data";
import { ScrollReveal, ScrollRevealItem } from "@/components/motion";

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
    <span ref={ref} className="l-about-stat-value">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function LandingAbout() {
  const d = aboutContent;
  return (
    <section className="l-about">
      <div className="container">
        <div className="l-about-inner">
          <div className="l-about-image-col">
            <Image
              src={d.image}
              alt="Chase Global Group Team"
              width={570}
              height={570}
              className="l-about-img"
            />
          </div>
          <div className="l-about-text-col">
            <ScrollReveal>
              <span className="section-subtitle">{d.subtitle}</span>
              <h2 className="section-title">{d.title}</h2>
              {d.paragraphs.map((p, i) => (
                <p key={i} className="l-about-desc">{p}</p>
              ))}
            </ScrollReveal>
            <ScrollReveal stagger={0.08}>
              <ul className="l-about-list">
                {d.listItems.map((item, i) => (
                  <ScrollRevealItem key={i}>
                    <li><i className="fas fa-check-circle" /> {item}</li>
                  </ScrollRevealItem>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal stagger={0.1} delay={0.2}>
              <div className="l-about-stats">
                {stats.map((s, i) => (
                  <ScrollRevealItem key={i}>
                    <div className="l-about-stat">
                      <AnimatedCounter target={s.value} suffix={s.suffix} duration={s.duration} />
                      <span className="l-about-stat-label">{s.label}</span>
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
