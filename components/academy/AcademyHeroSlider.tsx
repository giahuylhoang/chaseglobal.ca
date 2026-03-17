"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "@/lib/academy-data";
import { MagneticButton } from "@/components/motion";

const staggerItem = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } },
});

export default function AcademyHeroSlider() {
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
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIdx, goTo]);

  return (
    <section className="hero-slider">
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`hero-slide${idx === activeIdx ? " active" : ""}`}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
          <div className="container hero-slide-inner">
            <div className="hero-text-col">
              <AnimatePresence mode="wait">
                {idx === activeIdx && (
                  <motion.div key={`hero-text-${idx}`} className="hero-text-stagger">
                    <motion.span className="hero-subtitle" {...staggerItem(0)}>
                      {slide.subtitle}
                    </motion.span>
                    <motion.h1 className="hero-title" {...staggerItem(0.15)}>
                      {slide.titleStart}
                      <span className="hero-highlight">{slide.highlight}</span>
                      {slide.titleEnd}
                    </motion.h1>
                    <motion.p className="hero-description" {...staggerItem(0.3)}>
                      {slide.description}
                    </motion.p>
                    <motion.div {...staggerItem(0.45)}>
                      <MagneticButton>
                        <Link href={slide.cta.href} className="hero-cta-btn">
                          {slide.cta.label} <i className="fas fa-arrow-right" />
                        </Link>
                      </MagneticButton>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="hero-image-col">
              {slide.decorImages.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt=""
                  width={i === 0 ? 500 : 200}
                  height={i === 0 ? 500 : 200}
                  className={`hero-decor-img hero-decor-img-${i}`}
                  priority={idx === 0}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className="hero-dots">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            className={`hero-dot${idx === activeIdx ? " active" : ""}`}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
