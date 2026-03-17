"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "@/lib/landing-data";
import { MagneticButton } from "@/components/motion";

const stagger = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } },
});

export default function LandingHero() {
  const [idx, setIdx] = useState(0);
  const [locked, setLocked] = useState(false);

  const goTo = useCallback((n: number) => {
    if (locked) return;
    setLocked(true);
    setIdx(n);
    setTimeout(() => setLocked(false), 1000);
  }, [locked]);

  useEffect(() => {
    const t = setInterval(() => goTo((idx + 1) % heroSlides.length), 7000);
    return () => clearInterval(t);
  }, [idx, goTo]);

  return (
    <section className="l-hero">
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`l-hero-slide${i === idx ? " active" : ""}`}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
          <div className="container l-hero-inner">
            <div className="l-hero-text">
              <AnimatePresence mode="wait">
                {i === idx && (
                  <motion.div key={`hero-${i}`}>
                    <motion.span className="l-hero-badge" {...stagger(0)}>
                      {slide.subtitle}
                    </motion.span>
                    <motion.h1 className="l-hero-title" {...stagger(0.15)}>
                      {slide.titleStart}
                      <span className="l-hero-highlight">{slide.highlight}</span>
                      {slide.titleMid}
                      <span className="l-hero-highlight">{slide.highlight2}</span>
                      {slide.titleEnd}
                    </motion.h1>
                    <motion.p className="l-hero-desc" {...stagger(0.3)}>
                      {slide.description}
                    </motion.p>
                    <motion.div className="l-hero-ctas" {...stagger(0.45)}>
                      <MagneticButton>
                        <Link href="/education" className="l-hero-cta primary">
                          Explore Education <i className="fas fa-arrow-right" />
                        </Link>
                      </MagneticButton>
                      <MagneticButton>
                        <Link href="/immigration" className="l-hero-cta outline">
                          Explore Immigration <i className="fas fa-arrow-right" />
                        </Link>
                      </MagneticButton>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      ))}
      <div className="l-hero-dots">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            className={`l-hero-dot${i === idx ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
