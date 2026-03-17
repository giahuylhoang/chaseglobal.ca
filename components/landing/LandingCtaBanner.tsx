"use client";

import Link from "next/link";
import { MagneticButton, ScrollReveal, ScrollRevealItem } from "@/components/motion";

export default function LandingCtaBanner() {
  return (
    <section className="l-cta-banner">
      <div className="container">
        <ScrollReveal stagger={0.15}>
          <div className="l-cta-grid">
            <ScrollRevealItem>
              <div className="l-cta-block">
                <div className="l-cta-block-icon">
                  <i className="fas fa-graduation-cap" />
                </div>
                <h3 className="l-cta-block-title">Ready to Study Abroad?</h3>
                <p className="l-cta-block-desc">
                  Explore universities across 14+ countries with expert guidance on admissions, scholarships, and exam preparation.
                </p>
                <MagneticButton>
                  <Link href="/education" className="l-cta-btn">
                    Explore Education <i className="fas fa-arrow-right" />
                  </Link>
                </MagneticButton>
              </div>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <div className="l-cta-block">
                <div className="l-cta-block-icon">
                  <i className="fas fa-passport" />
                </div>
                <h3 className="l-cta-block-title">Start Your Immigration Journey?</h3>
                <p className="l-cta-block-desc">
                  Licensed Canadian immigration consultants ready to guide you through Express Entry, PR, work permits, and more.
                </p>
                <MagneticButton>
                  <Link href="/immigration" className="l-cta-btn">
                    Explore Immigration <i className="fas fa-arrow-right" />
                  </Link>
                </MagneticButton>
              </div>
            </ScrollRevealItem>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
