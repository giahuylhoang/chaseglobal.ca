"use client";

import Link from "next/link";
import { valueProps } from "@/lib/landing-data";
import { ScrollReveal, ScrollRevealItem } from "@/components/motion";

export default function LandingValueProps() {
  return (
    <section className="l-value">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">WHO WE ARE</span>
          <h2 className="section-title">Two Divisions, One Mission</h2>
        </div>
        <ScrollReveal stagger={0.15}>
          <div className="l-value-grid">
            {valueProps.map((card, i) => (
              <ScrollRevealItem key={i}>
                <div className="l-value-card">
                  <div className="l-value-icon">
                    <i className={card.icon} />
                  </div>
                  <h3 className="l-value-card-title">{card.title}</h3>
                  <p className="l-value-card-desc">{card.description}</p>
                  <div className="l-value-highlights">
                    {card.highlights.map((h) => (
                      <span key={h} className="l-value-tag">{h}</span>
                    ))}
                  </div>
                  <Link href={card.href} className="l-value-cta">
                    {card.cta} <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
