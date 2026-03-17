"use client";

import "../shared.css";
import "./education.css";
import {
  AcademyHeaderNavigation,
  AcademyHeroSlider,
  AcademyCountryDestinations,
  AcademyPartnersLogoStrip,
  AcademyCertificationsTrust,
  AcademyIndustryRecognition,
  AcademyInstitutionPartners,
  AcademyFeaturesValueBlocks,
  AcademyServices,
  AcademyAboutChaseGlobal,
  AcademyWhyChooseUsTestimonial,
  AcademyFaqBooking,
} from "@/components/academy";
import SiteFooter from "@/components/shared/SiteFooter";
import { ScrollReveal, ScrollProgressBar } from "@/components/motion";

export default function EducationPage() {
  return (
    <div className="academy-page">
      <ScrollProgressBar />
      <AcademyHeaderNavigation />
      <AcademyHeroSlider />

      <ScrollReveal>
        <AcademyCountryDestinations />
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <AcademyPartnersLogoStrip />
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <AcademyCertificationsTrust />
      </ScrollReveal>

      <ScrollReveal>
        <AcademyIndustryRecognition />
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <AcademyInstitutionPartners />
      </ScrollReveal>

      <ScrollReveal>
        <AcademyFeaturesValueBlocks />
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <AcademyServices />
      </ScrollReveal>

      <ScrollReveal>
        <AcademyAboutChaseGlobal />
      </ScrollReveal>

      <ScrollReveal>
        <AcademyWhyChooseUsTestimonial />
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <AcademyFaqBooking />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <SiteFooter />
      </ScrollReveal>
    </div>
  );
}
