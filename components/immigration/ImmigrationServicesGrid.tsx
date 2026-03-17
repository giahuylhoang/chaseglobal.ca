"use client";

import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/immigration-data";
import { ScrollReveal, ScrollRevealItem } from "@/components/motion";

export default function ImmigrationServicesGrid() {
  return (
    <section className="imm-services">
      <div className="container">
        <div className="imm-services-header">
          <span className="section-subtitle">OUR SERVICES</span>
          <h2 className="section-title">We Provide Canadian Immigration Services</h2>
          <p>Expert guidance through every step of your Canadian immigration journey.</p>
        </div>
        <ScrollReveal stagger={0.08}>
          <div className="imm-services-grid">
            {services.map((service, idx) => (
              <ScrollRevealItem key={idx}>
                <div className="imm-service-card">
                  <div className="imm-service-card-img">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={200}
                    />
                  </div>
                  <div className="imm-service-card-body">
                    <span className="imm-service-number">{service.number}</span>
                    <div className="imm-service-icon">
                      <i className={service.icon} />
                    </div>
                    <h3 className="imm-service-card-title">{service.title}</h3>
                    <p className="imm-service-card-desc">{service.description}</p>
                    <Link href="/immigration/services" className="imm-service-card-link">
                      Learn More <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
