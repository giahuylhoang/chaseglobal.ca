"use client";

import Link from "next/link";
import { features } from "@/lib/academy-data";
import { GlowOrb, MagneticButton, ScrollReveal, ScrollRevealItem } from "@/components/motion";

export default function AcademyFeaturesValueBlocks() {
  return (
    <section className="features-section" style={{ backgroundImage: "url(/assets/academy/images/backgrounds/map-bg.png)" }}>
      <GlowOrb color="rgba(255,255,255,0.04)" top="40%" left="20%" size={500} duration={15} />
      <div className="container">
        <div className="features-inner">
          <ScrollReveal>
            <div className="features-text-col">
              <span className="section-subtitle">OUR FEATURES</span>
              <h2 className="section-title features-title">Committed to provide you the best services</h2>
              <MagneticButton>
                <Link href="/education/about" className="features-cta-btn">
                  Get Started <i className="fas fa-arrow-right" />
                </Link>
              </MagneticButton>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger={0.12} delay={0.15}>
            <div className="features-cards-col">
              {features.map((feature, idx) => (
                <ScrollRevealItem key={idx}>
                  <div className="feature-card">
                    <div className="feature-icon">
                      <i className={feature.icon} />
                    </div>
                    <div className="feature-content">
                      <h3 className="feature-title">{feature.title}</h3>
                      <p className="feature-desc">{feature.description}</p>
                    </div>
                  </div>
                </ScrollRevealItem>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
