"use client";

import Image from "next/image";
import Link from "next/link";
import { footerData } from "@/lib/academy-data";
import { GlowOrb, MagneticButton, ScrollReveal, ScrollRevealItem } from "@/components/motion";

export default function AcademyFooterContact() {
  const d = footerData;

  return (
    <footer className="academy-footer">
      <GlowOrb color="rgba(255,255,255,0.025)" top="20%" left="75%" size={400} duration={18} />
      <div className="footer-main">
        <div className="container">
          <ScrollReveal stagger={0.1}>
          <div className="footer-grid-4">
            <ScrollRevealItem>
            <div className="footer-col">
              <h4 className="footer-heading">{d.aboutTitle}</h4>
              <p className="footer-text">{d.aboutText}</p>
              <h5 className="footer-subheading">Useful Links</h5>
              <div className="footer-links-two-col">
                <ul className="footer-links">
                  {d.usefulLinks.slice(0, 3).map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
                <ul className="footer-links">
                  {d.usefulLinks.slice(3).map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <MagneticButton>
                <Link href="/education/contact" className="footer-consult-btn">
                  Get Consultancy
                </Link>
              </MagneticButton>
            </div>
            </ScrollRevealItem>

            <ScrollRevealItem>
            <div className="footer-col">
              <h4 className="footer-heading">Opportunities</h4>
              <div className="footer-heading-line" />
              <ul className="footer-bullet-list">
                {d.opportunities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            </ScrollRevealItem>

            <ScrollRevealItem>
            <div className="footer-col">
              <h4 className="footer-heading">Our Locations</h4>
              <div className="footer-heading-line" />
              <div className="footer-locations">
                {d.locations.map((loc) => (
                  <div key={loc.country} className="footer-location-item">
                    <Image src={loc.flag} alt={loc.country} width={28} height={20} className="footer-flag" />
                    <div>
                      <strong>{loc.country}</strong>
                      <p>{loc.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </ScrollRevealItem>

            <ScrollRevealItem>
            <div className="footer-col">
              <h4 className="footer-heading">Contact Us</h4>
              <div className="footer-heading-line" />
              <div className="footer-contacts">
                <div className="footer-contact-row">
                  <i className="fas fa-envelope" />
                  <div>
                    <strong>Email Us</strong>
                    <a href={`mailto:${d.contacts.email}`}>{d.contacts.email}</a>
                  </div>
                </div>
                {d.contacts.phones.map((p) => (
                  <div key={p.country} className="footer-contact-row">
                    <Image src={p.flag} alt={p.country} width={28} height={20} className="footer-flag" />
                    <div>
                      <strong>{p.country}</strong>
                      {"numbers" in p && p.numbers ? (
                        p.numbers.map((n) => (
                          <div key={n.number}>
                            <i className="fas fa-whatsapp footer-whatsapp" />
                            <a href={`tel:${n.number.replace(/\s/g, "")}`}>{n.number}</a>{" "}
                            <span className="footer-phone-label">{n.label}</span>
                          </div>
                        ))
                      ) : (
                        <a href={`tel:${"number" in p ? (p as {number: string}).number.replace(/\s/g, "") : ""}`}>
                          {"number" in p ? (p as {number: string}).number : ""}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </ScrollRevealItem>
          </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Certification strip + disclaimer */}
      <div className="footer-cert-strip">
        <div className="container">
          <div className="footer-cert-inner">
            <div className="footer-cert-logos">
              {d.certLogos.map((logo, i) => (
                <Image key={i} src={logo.src} alt={logo.alt} width={80} height={80} className="footer-cert-img" />
              ))}
            </div>
            <div className="footer-disclaimer">
              <p>{d.disclaimer}</p>
              <p>
                For all Immigration Queries – Visit{" "}
                <a href={d.immigrationLink.href} target="_blank" rel="noopener noreferrer">
                  {d.immigrationLink.label}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; Copyrights {new Date().getFullYear()}{" "}
            <span className="footer-brand-name">{d.copyright}</span>{" "}
            All Rights Reserved | Developed &amp; Managed by{" "}
            <a href="https://sanshtech.com" target="_blank" rel="noopener noreferrer" className="footer-dev-link">
              Sanshtech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
