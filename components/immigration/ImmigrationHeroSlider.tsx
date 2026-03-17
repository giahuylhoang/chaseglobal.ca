"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "@/lib/immigration-data";
import { MagneticButton } from "@/components/motion";

const staggerItem = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } },
});

export default function ImmigrationHeroSlider() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (animating) return;
      setAnimating(true);
      setActiveIdx(idx);
      setTimeout(() => setAnimating(false), 800);
    },
    [animating],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((activeIdx + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIdx, goTo]);

  return (
    <section className="imm-hero">
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`imm-hero-slide${idx === activeIdx ? " active" : ""}`}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
          <div className="container imm-hero-inner">
            <div className="imm-hero-text">
              <AnimatePresence mode="wait">
                {idx === activeIdx && (
                  <motion.div key={`imm-hero-${idx}`}>
                    <motion.span className="imm-hero-subtitle" {...staggerItem(0)}>
                      {slide.subtitle}
                    </motion.span>
                    <motion.h1 className="imm-hero-title" {...staggerItem(0.15)}>
                      {slide.titleStart}
                      <span className="imm-hero-highlight">{slide.highlight}</span>
                      {slide.titleEnd}
                    </motion.h1>
                    <motion.p className="imm-hero-desc" {...staggerItem(0.3)}>
                      {slide.description}
                    </motion.p>
                    <motion.div {...staggerItem(0.45)}>
                      <MagneticButton>
                        <Link href={slide.cta.href} className="imm-hero-cta">
                          {slide.cta.label} <i className="fas fa-arrow-right" />
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
      <div className="imm-hero-dots">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            className={`imm-hero-dot${idx === activeIdx ? " active" : ""}`}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
