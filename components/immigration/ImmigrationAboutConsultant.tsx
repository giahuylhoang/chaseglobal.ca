"use client";

import Image from "next/image";
import Link from "next/link";
import { aboutSection } from "@/lib/immigration-data";
import { MagneticButton, ScrollReveal, ScrollRevealItem } from "@/components/motion";

export default function ImmigrationAboutConsultant() {
  const d = aboutSection;
  return (
    <section className="imm-about">
      <div className="container">
        <div className="imm-about-inner">
          <div className="imm-about-image-col">
            <Image
              src={d.image}
              alt={d.name}
              width={570}
              height={570}
              className="imm-about-img"
            />
          </div>
          <div className="imm-about-text-col">
            <ScrollReveal>
              <span className="section-subtitle">{d.subtitle}</span>
              <h2 className="imm-about-name">{d.name}</h2>
              <p className="imm-about-role">{d.title}</p>
              <p className="imm-about-desc">{d.description}</p>
              <p className="imm-about-desc">{d.longDescription}</p>
            </ScrollReveal>
            <ScrollReveal stagger={0.08}>
              <ul className="imm-about-quals">
                {d.qualifications.map((q, i) => (
                  <ScrollRevealItem key={i}>
                    <li><i className="fas fa-check-circle" /> {q}</li>
                  </ScrollRevealItem>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <MagneticButton>
                <Link href="/immigration/about" className="imm-about-cta">
                  Learn More <i className="fas fa-arrow-right" />
                </Link>
              </MagneticButton>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
