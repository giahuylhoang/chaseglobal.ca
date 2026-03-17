"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { countries, countrySharedContent } from "@/lib/academy-data";
import { GlowOrb } from "@/components/motion";

const staggerItem = (delay: number) => ({
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, delay, ease: [0.25, 0.1, 0.25, 1] as const } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
});

export default function AcademyCountryDestinations() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="cag-section">
      <GlowOrb color="rgba(255,255,255,0.035)" top="20%" left="70%" size={450} />
      <div className="cag-gallery">
        <div className="cag-accent" />

        {countries.map((country, idx) => {
          const isActive = idx === activeIdx;
          return (
            <div
              key={country.name}
              className={`cag-panel${isActive ? " active" : ""}`}
              onClick={() => setActiveIdx(idx)}
            >
              <div className="cag-collapsed">
                <span className="cag-vertical-text">{country.name.toUpperCase()}</span>
              </div>

              <div className="cag-expanded">
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div key={`cag-content-${idx}`} className="cag-content">
                      <motion.span className="cag-country-label" {...staggerItem(0)}>
                        {country.name}
                      </motion.span>
                      <motion.h3 className="cag-title" {...staggerItem(0.1)}>
                        {countrySharedContent.titleTemplate.replace("{country}", country.name)}
                      </motion.h3>
                      <motion.p className="cag-desc" {...staggerItem(0.2)}>
                        Explore study and career development opportunities..
                      </motion.p>
                      <motion.ul className="cag-features" {...staggerItem(0.25)}>
                        {countrySharedContent.features.map((f, i) => (
                          <motion.li key={f} {...staggerItem(0.3 + i * 0.05)}>
                            <span className="cag-dot" />
                            {f}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="cag-flag-wrap">
                  <Image
                    src={country.flag}
                    alt={country.name}
                    width={200}
                    height={200}
                    className="cag-flag-img"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="cag-flag-strip">
        {countries.map((country, idx) => (
          <button
            key={country.name}
            className={`cag-flag-btn${idx === activeIdx ? " active" : ""}`}
            onClick={() => setActiveIdx(idx)}
            aria-label={country.name}
          >
            <Image
              src={country.flag}
              alt={country.name}
              width={48}
              height={48}
              className="cag-flag-thumb"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
