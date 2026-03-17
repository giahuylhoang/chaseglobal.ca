"use client";

import Link from "next/link";
import { footerData, socialLinks } from "@/lib/immigration-data";
import { GlowOrb, MagneticButton, ScrollReveal, ScrollRevealItem } from "@/components/motion";

export default function ImmigrationFooterContact() {
  const d = footerData;
  return (
    <footer className="academy-footer">
      <GlowOrb color="rgba(255,255,255,0.025)" top="20%" left="75%" size={400} duration={18} />
      <div className="footer-main">
        <div className="container">
          <ScrollReveal stagger={0.1}>
            <div className="footer-grid-4">
              <ScrollRevealItem>
                <div>
                  <h3 className="footer-heading">{d.aboutTitle}</h3>
                  <div className="footer-heading-line" />
                  <p className="footer-text">{d.aboutText}</p>
                  <div className="footer-social">
                    {socialLinks.map((s) => (
                      <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.platform}>
                        <i className={s.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <div>
                  <h3 className="footer-heading">Useful Links</h3>
                  <div className="footer-heading-line" />
                  <ul className="footer-links">
                    {d.usefulLinks.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <div>
                  <h3 className="footer-heading">Our Services</h3>
                  <div className="footer-heading-line" />
                  <ul className="footer-links">
                    {d.serviceLinks.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <div>
                  <h3 className="footer-heading">Contact Us</h3>
                  <div className="footer-heading-line" />
                  <div className="footer-contacts">
                    <div className="footer-contact-row">
                      <i className="fas fa-envelope" />
                      <div>
                        <strong>Email Us</strong>
                        <a href={`mailto:${d.contacts.email}`}>{d.contacts.email}</a>
                      </div>
                    </div>
                    <div className="footer-contact-row">
                      <i className="fas fa-phone-alt" />
                      <div>
                        <strong>Call Us</strong>
                        <a href={`tel:${d.contacts.phone.replace(/\s/g, "")}`}>{d.contacts.phone}</a>
                      </div>
                    </div>
                    <div className="footer-contact-row">
                      <i className="fas fa-map-marker-alt" />
                      <div>
                        <strong>Visit Us</strong>
                        <span>{d.contacts.address}</span>
                      </div>
                    </div>
                  </div>
                  <MagneticButton>
                    <Link href="/immigration/contact" className="footer-consult-btn" style={{ marginTop: 20 }}>
                      Get Consultancy
                    </Link>
                  </MagneticButton>
                </div>
              </ScrollRevealItem>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {d.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
