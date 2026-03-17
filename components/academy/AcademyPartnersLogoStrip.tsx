"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { partnerLogos } from "@/lib/academy-data";
import "swiper/css";

export default function AcademyPartnersLogoStrip() {
  return (
    <section className="partners-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">OUR Collaborations</span>
          <h2 className="section-title">Collaborated with</h2>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
          className="partners-swiper"
        >
          {partnerLogos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <div className="partner-logo-card">
                <Image src={logo.src} alt={logo.alt} width={300} height={120} className="partner-logo-img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
