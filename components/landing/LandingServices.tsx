"use client";

import { educationServices, immigrationServices } from "@/lib/landing-data";
import { GlowOrb, ScrollReveal, ScrollRevealItem } from "@/components/motion";

export default function LandingServices() {
  return (
    <section className="l-services">
      <GlowOrb color="rgba(225,56,51,0.06)" top="10%" left="80%" size={350} duration={16} />
      <GlowOrb color="rgba(93,79,255,0.04)" top="70%" left="10%" size={300} duration={20} />
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">OUR SERVICES</span>
          <h2 className="section-title" style={{ color: "var(--white)" }}>
            Comprehensive Solutions for Education &amp; Immigration
          </h2>
        </div>

        <ScrollReveal stagger={0.05}>
          <div className="l-services-columns">
            <div>
              <div className="l-services-col-heading">
                <i className="fas fa-graduation-cap" /> Education
              </div>
              <div className="l-services-list">
                {educationServices.map((s, i) => (
                  <ScrollRevealItem key={i}>
                    <div className="l-service-item">
                      <div className="l-service-item-icon"><i className={s.icon} /></div>
                      <span className="l-service-item-title">{s.title}</span>
                    </div>
                  </ScrollRevealItem>
                ))}
              </div>
            </div>

            <div>
              <div className="l-services-col-heading">
                <i className="fas fa-passport" /> Immigration
              </div>
              <div className="l-services-list">
                {immigrationServices.map((s, i) => (
                  <ScrollRevealItem key={i}>
                    <div className="l-service-item">
                      <div className="l-service-item-icon"><i className={s.icon} /></div>
                      <span className="l-service-item-title">{s.title}</span>
                    </div>
                  </ScrollRevealItem>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
