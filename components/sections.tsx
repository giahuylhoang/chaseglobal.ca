import Link from "next/link";
import {
  countryTiles,
  navItems,
  partnerLogos,
  testimonialSnippets,
  trustStats
} from "@/lib/content";

export function Header({ ctaText = "Book Consultation" }: { ctaText?: string }) {
  return (
    <header className="header">
      <div className="shell nav">
        <Link href="/" className="brand">
          <span className="brandMark">CG</span>
          <span>
            Chase Global
            <small>Education + Immigration</small>
          </span>
        </Link>
        <nav>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a className="btn btnPrimary" href="#cta">
            {ctaText}
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Hero({
  eyebrow,
  title,
  description,
  ctaA,
  ctaB
}: {
  eyebrow: string;
  title: string;
  description: string;
  ctaA: { href: string; label: string };
  ctaB: { href: string; label: string };
}) {
  return (
    <section className="hero">
      <div className="shell heroGrid">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="ctaRow">
            <Link className="btn btnPrimary" href={ctaA.href}>
              {ctaA.label}
            </Link>
            <Link className="btn btnGhost" href={ctaB.href}>
              {ctaB.label}
            </Link>
          </div>
        </div>
        <aside className="glassCard">
          <img src="/assets/flag-canada.svg" alt="Canada branding visual" />
          <p>
            Inspired by source messaging: <strong>Get Your Free Assessment Today</strong> and
            <strong> Makes Canadian Immigration Simple</strong>.
          </p>
        </aside>
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <section className="section">
      <div className="shell trust">
        {trustStats.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ServiceGrid({
  title,
  items
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="section">
      <div className="shell">
        <h2>{title}</h2>
        <div className="cards">
          {items.map((item) => (
            <article key={item} className="card">
              <h3>{item}</h3>
              <p>Built from your original WordPress service positioning with modernized layout and CTA flow.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="section soft">
      <div className="shell">
        <h2>Testimonial and Trust Proof</h2>
        <p className="lead">Inspired by the immigration homepage Google-review pattern and long-form trust statements.</p>
        <div className="cards">
          {testimonialSnippets.map((text, index) => (
            <article key={text} className="card quote">
              <h3>Client Feedback {index + 1}</h3>
              <p>"{text}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PartnersAndCertifications() {
  return (
    <section className="section">
      <div className="shell">
        <h2>Partners and Certifications</h2>
        <p className="lead">Institution and brand assets from downloaded folders, displayed as proof of ecosystem credibility.</p>
        <div className="logoRow">
          {partnerLogos.map((logo) => (
            <article key={logo.src} className="logoCard">
              <img src={logo.src} alt={logo.alt} />
            </article>
          ))}
        </div>
        <div className="certRow">
          <span>Consultation-First Workflow</span>
          <span>Documented Process Control</span>
          <span>Country-Specific Advising</span>
        </div>
      </div>
    </section>
  );
}

export function CountryBrands() {
  return (
    <section className="section soft">
      <div className="shell">
        <h2>Country and Brand Presence</h2>
        <p className="lead">Destination emphasis inspired by education and immigration source menus and country blocks.</p>
        <div className="countryGrid">
          {countryTiles.map((country) => (
            <article key={country} className="countryTile">
              <span>{country}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA({
  title,
  body
}: {
  title: string;
  body: string;
}) {
  return (
    <section id="cta" className="section">
      <div className="shell ctaBand">
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className="ctaRow">
          <a className="btn btnPrimary" href="mailto:info@chaseglobalacademy.com">
            Book by Email
          </a>
          <a className="btn btnGhostDark" href="https://wa.me/14039963366">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">© {new Date().getFullYear()} Chase Global. Unified brand demo: Home, Immigration, Education.</div>
    </footer>
  );
}
