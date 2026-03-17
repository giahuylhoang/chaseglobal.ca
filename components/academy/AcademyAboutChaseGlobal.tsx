"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { aboutSection } from "@/lib/academy-data";

function AnimatedCounter({ target, duration }: { target: number; duration: number }) {
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

  return <span ref={ref} className="counter-value">{count.toLocaleString()}</span>;
}

export default function AcademyAboutChaseGlobal() {
  const d = aboutSection;
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-inner">
          <div className="about-image-col">
            <Image src={d.image} alt="About Chase Global Academy" width={570} height={570} className="about-main-img" />
          </div>
          <div className="about-text-col">
            <span className="section-subtitle">{d.subtitle}</span>
            <h2 className="section-title">{d.title}</h2>
            <p className="about-desc">{d.description}</p>
            <div className="about-icon-boxes">
              {d.iconBoxes.map((box, i) => (
                <div key={i} className="about-icon-box">
                  <i className={box.icon} />
                  <span>{box.text}</span>
                </div>
              ))}
            </div>
            <ul className="about-list">
              {d.listItems.map((item, i) => (
                <li key={i}>
                  <i className="fas fa-check-circle" /> {item}
                </li>
              ))}
            </ul>
            <Link href="/education/about" className="about-cta-btn">
              Get Started <i className="fas fa-arrow-right" />
            </Link>
            <div className="about-counter-row">
              <div className="about-counter-box">
                <AnimatedCounter target={d.counter.value} duration={d.counter.duration} />
                <span className="counter-label">{d.counter.label}</span>
              </div>
              <div className="about-phone-box">
                <span className="phone-label">Call For Consultation</span>
                <a href={`tel:${d.phone.replace(/\s/g, "")}`} className="phone-number">
                  {d.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
