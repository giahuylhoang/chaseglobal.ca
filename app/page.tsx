"use client";

import "./shared.css";
import "./landing.css";
import {
  LandingHeader,
  LandingHero,
  LandingValueProps,
  LandingServices,
  LandingAbout,
  LandingPartners,
  LandingCtaBanner,
} from "@/components/landing";
import SiteFooter from "@/components/shared/SiteFooter";
import { ScrollReveal, ScrollProgressBar } from "@/components/motion";

export default function HomePage() {
  return (
    <div className="landing-page">
      <ScrollProgressBar />
      <LandingHeader />
      <LandingHero />

      <ScrollReveal>
        <LandingValueProps />
      </ScrollReveal>

      <ScrollReveal>
        <LandingServices />
      </ScrollReveal>

      <ScrollReveal>
        <LandingAbout />
      </ScrollReveal>

      <ScrollReveal>
        <LandingPartners />
      </ScrollReveal>

      <ScrollReveal>
        <LandingCtaBanner />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <SiteFooter />
      </ScrollReveal>
    </div>
  );
}
