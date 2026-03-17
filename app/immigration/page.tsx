"use client";

import "../shared.css";
import "./immigration.css";
import {
  ImmigrationHeaderNavigation,
  ImmigrationHeroSlider,
  ImmigrationCtaBanner,
  ImmigrationServicesGrid,
  ImmigrationAboutConsultant,
  ImmigrationWhyChooseUs,
  ImmigrationTestimonials,
} from "@/components/immigration";
import SiteFooter from "@/components/shared/SiteFooter";
import { ScrollReveal, ScrollProgressBar } from "@/components/motion";

export default function ImmigrationPage() {
  return (
    <div className="immigration-page">
      <ScrollProgressBar />
      <ImmigrationHeaderNavigation />
      <ImmigrationHeroSlider />
      <ImmigrationCtaBanner />

      <ScrollReveal>
        <ImmigrationWhyChooseUs />
      </ScrollReveal>


      <ScrollReveal>
        <ImmigrationServicesGrid />
      </ScrollReveal>

      <ImmigrationAboutConsultant />

      <ScrollReveal>
        <ImmigrationTestimonials />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <SiteFooter />
      </ScrollReveal>
    </div>
  );
}
