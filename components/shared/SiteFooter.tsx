"use client";

import Image from "next/image";
import Link from "next/link";
import { GlowOrb, MagneticButton, ScrollReveal, ScrollRevealItem } from "@/components/motion";

const socialLinks = [
  { platform: "facebook", href: "https://www.facebook.com/share/1B92DHATJa/?mibextid=wwXIfr", icon: "fab fa-facebook-f" },
  { platform: "instagram", href: "https://www.instagram.com/chaseglobalacademy?igsh=eDF3MW9kdzFxbmFj", icon: "fab fa-instagram" },
  { platform: "linkedin", href: "https://www.linkedin.com/company/chase-global-academy/", icon: "fab fa-linkedin-in" },
  { platform: "tiktok", href: "https://www.tiktok.com/@chaseglobalacademy", icon: "fab fa-tiktok" },
  { platform: "youtube", href: "https://www.youtube.com/channel/UCjhv6tVE1NfRHBHU6qT6jkw", icon: "fab fa-youtube" },
];

const usefulLinks = [
  { label: "Home", href: "/" },
  { label: "Education", href: "/education" },
  { label: "Immigration", href: "/immigration" },
  { label: "About Us", href: "/education/about" },
  { label: "Services", href: "/education/services" },
  { label: "Contact Us", href: "/education/contact" },
];

const opportunities = [
  "Foreign Scholarships",
  "Study Abroad",
  "Express Entry",
  "Family Sponsorship",
  "Career Guidance",
  "Language Exam Preparation",
];

const locations = [
  { country: "Canada", flag: "/assets/academy/images/countries/canada.png", address: "Cityscape Landing, Unit 2248-4310 104 Ave NE, Calgary Alberta T3N-1W2" },
  { country: "USA", flag: "/assets/academy/images/countries/usa.png", address: "501 Silverside Road, Suite 105 Wilmington, Delaware" },
  { country: "India", flag: "/assets/academy/images/countries/india-flag.png", address: "Sector 117 SCO 424 2nd Floor, TDI City, South Ex.2, Sahibzada Ajit Singh Nagar, Chandigarh, Punjab 140301" },
  { country: "UAE", flag: "/assets/academy/images/countries/uae-flag.png", address: "Upcoming office" },
  { country: "New Zealand", flag: "/assets/academy/images/countries/nz-flag.png", address: "Upcoming office" },
];

const contactPhones = [
  { country: "Canada", flag: "/assets/academy/images/countries/canada.png", number: "+1 403-996-3366" },
  { country: "USA", flag: "/assets/academy/images/countries/usa.png", number: "+1 403-996-3366" },
  { country: "New Zealand", flag: "/assets/academy/images/countries/nz-flag.png", number: "+64 212165367" },
  {
    country: "India",
    flag: "/assets/academy/images/countries/india-flag.png",
    numbers: [
      { number: "+91 9888345753", label: "(Pref.)" },
      { number: "+91 9888605753", label: "(Alt.)" },
    ],
  },
] as const;

const certLogos = [
  { src: "/assets/academy/images/recognition/recognition-8.jpg", alt: "AIRC Certified" },
  { src: "/assets/academy/images/recognition/rcic-logo.jpeg", alt: "RCIC - Regulated Canadian Immigration Consultant" },
];

const contactEmail = "info@chaseglobalacademy.com";
const disclaimer = "All information on this website is generic in nature and should not be considered legal advice. We are not responsible for your application decisions.";
const immigrationLink = { label: "www.chaseglobalimmigration.com", href: "https://www.chaseglobalimmigration.com" };

export default function SiteFooter() {
  return (
    <footer className="academy-footer">
      <GlowOrb color="rgba(255,255,255,0.025)" top="20%" left="75%" size={400} duration={18} />
      <div className="footer-main">
        <div className="container">
          <ScrollReveal stagger={0.1}>
            <div className="footer-grid-4">
              {/* Column 1: About + Links */}
              <ScrollRevealItem>
                <div className="footer-col">
                  <h4 className="footer-heading">About Chase Global Group</h4>
                  <p className="footer-text">
                    Chase Global Group is your trusted partner for international education and Canadian immigration.
                    We offer comprehensive, end-to-end support — from study abroad guidance to immigration consulting.
                  </p>
                  <h5 className="footer-subheading">Useful Links</h5>
                  <div className="footer-links-two-col">
                    <ul className="footer-links">
                      {usefulLinks.slice(0, 3).map((link) => (
                        <li key={link.label}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                    <ul className="footer-links">
                      {usefulLinks.slice(3).map((link) => (
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

              {/* Column 2: Opportunities */}
              <ScrollRevealItem>
                <div className="footer-col">
                  <h4 className="footer-heading">Opportunities</h4>
                  <div className="footer-heading-line" />
                  <ul className="footer-bullet-list">
                    {opportunities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="footer-social">
                    {socialLinks.map((s) => (
                      <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.platform}>
                        <i className={s.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollRevealItem>

              {/* Column 3: Locations */}
              <ScrollRevealItem>
                <div className="footer-col">
                  <h4 className="footer-heading">Our Locations</h4>
                  <div className="footer-heading-line" />
                  <div className="footer-locations">
                    {locations.map((loc) => (
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

              {/* Column 4: Contact Us */}
              <ScrollRevealItem>
                <div className="footer-col">
                  <h4 className="footer-heading">Contact Us</h4>
                  <div className="footer-heading-line" />
                  <div className="footer-contacts">
                    <div className="footer-contact-row">
                      <i className="fas fa-envelope" />
                      <div>
                        <strong>Email Us</strong>
                        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                      </div>
                    </div>
                    {contactPhones.map((p) => (
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
                            <a href={`tel:${("number" in p ? p.number : "").replace(/\s/g, "")}`}>
                              {"number" in p ? p.number : ""}
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
              {certLogos.map((logo, i) => (
                <Image key={i} src={logo.src} alt={logo.alt} width={80} height={80} className="footer-cert-img" />
              ))}
            </div>
            <div className="footer-disclaimer">
              <p>{disclaimer}</p>
              <p>
                For all Immigration Queries – Visit{" "}
                <a href={immigrationLink.href} target="_blank" rel="noopener noreferrer">
                  {immigrationLink.label}
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
            &copy; {new Date().getFullYear()}{" "}
            <span className="footer-brand-name">Chase Global Group</span>.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
