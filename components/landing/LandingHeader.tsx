"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/landing-data";
import { MagneticButton } from "@/components/motion";

export default function LandingHeader() {
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`academy-header${sticky ? " is-sticky" : ""}`}>
      <div className="header-top-bar">
        <div className="container">
          <div className="header-top-inner">
            <div className="header-top-left">
              <a href="tel:14039963366" className="header-contact-link">
                <i className="fas fa-phone-alt" /> +1 403-996-3366
              </a>
              <a href="mailto:info@chaseglobalacademy.com" className="header-contact-link">
                <i className="fas fa-envelope" /> info@chaseglobalacademy.com
              </a>
            </div>
            <div className="header-social">
              <a href="https://www.facebook.com/share/1B92DHATJa/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
              <a href="https://www.instagram.com/chaseglobalacademy" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram" /></a>
              <a href="https://www.linkedin.com/company/chase-global-academy/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
              <a href="https://www.youtube.com/channel/UCjhv6tVE1NfRHBHU6qT6jkw" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube" /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="header-main-bar">
        <div className="container">
          <div className="header-main-inner">
            <Link href="/" className="header-logo">
              <Image
                src="/assets/logo-chase-global.png"
                alt="Chase Global"
                width={48}
                height={48}
                className="header-logo-icon"
                priority
              />
              <div className="header-logo-wordmark">
                <span className="header-logo-top">Chase Global</span>
                <span className="header-logo-sub">Group</span>
              </div>
            </Link>

            <nav className={`header-nav${mobileOpen ? " mobile-open" : ""}`}>
              <ul className="nav-menu">
                {navLinks.map((item) => (
                  <li key={item.label} className="nav-item">
                    <Link href={item.href} className="nav-link">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header-actions">
              <MagneticButton>
                <Link href="/education/contact" className="header-cta-btn">
                  Get Started
                </Link>
              </MagneticButton>
              <button
                className={`mobile-toggle${mobileOpen ? " open" : ""}`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
