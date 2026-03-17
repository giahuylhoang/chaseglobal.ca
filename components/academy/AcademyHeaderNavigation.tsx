"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { navMenuItems, socialLinks, crossNavLink } from "@/lib/academy-data";
import { MagneticButton } from "@/components/motion";

export default function AcademyHeaderNavigation() {
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header ref={headerRef} className={`academy-header${sticky ? " is-sticky" : ""}`}>
      <div className="header-top-bar">
        <div className="container">
          <div className="header-top-inner">
            <div className="header-top-left">
              <a href={`tel:14039963366`} className="header-contact-link">
                <i className="fas fa-phone-alt" /> +1 403-996-3366
              </a>
              <a href="mailto:info@chaseglobalacademy.com" className="header-contact-link">
                <i className="fas fa-envelope" /> info@chaseglobalacademy.com
              </a>
            </div>
            <div className="header-top-right">
              <div className="header-social">
                {socialLinks.map((s) => (
                  <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.platform}>
                    <i className={s.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-main-bar">
        <div className="container">
          <div className="header-main-inner">
            <Link href="/education" className="header-logo">
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
                <span className="header-logo-sub">Academy</span>
              </div>
            </Link>

            <nav className={`header-nav${mobileOpen ? " mobile-open" : ""}`}>
              <ul className="nav-menu">
                {navMenuItems.map((item) => (
                  <li
                    key={item.label}
                    className={`nav-item${item.children ? " has-dropdown" : ""}`}
                    onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                    onMouseLeave={() => item.children && setOpenDropdown(null)}
                  >
                    <Link href={item.href} className="nav-link">
                      {item.label}
                      {item.children && <i className="fas fa-chevron-down dropdown-arrow" />}
                    </Link>
                    {item.children && openDropdown === item.label && (
                      <ul className="dropdown-menu">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link href={child.href} className="dropdown-link">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header-actions">
              <Link href={crossNavLink.href} className="nav-link-cross">
                {crossNavLink.label}
              </Link>
              <MagneticButton>
                <Link href="/education/book-appointment" className="header-cta-btn">
                  Start Your Global Journey
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
