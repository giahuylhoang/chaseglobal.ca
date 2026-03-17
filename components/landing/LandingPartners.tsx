"use client";

import Image from "next/image";
import { partnerLogos } from "@/lib/landing-data";
import { ScrollReveal, ScrollRevealItem } from "@/components/motion";

export default function LandingPartners() {
  return (
    <section className="l-partners">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">TRUSTED BY</span>
          <h2 className="section-title">Our Partners &amp; Certifications</h2>
        </div>
        <ScrollReveal stagger={0.06}>
          <div className="l-partners-grid">
            {partnerLogos.map((logo, i) => (
              <ScrollRevealItem key={i}>
                <div className="l-partner-card">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    className="l-partner-img"
                  />
                </div>
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
