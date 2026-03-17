"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { institutionPartners } from "@/lib/academy-data";
import "swiper/css";

export default function AcademyInstitutionPartners() {
  return (
    <section className="institutions-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Institutional Associations</span>
          <h2 className="section-title">Partnered with</h2>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          breakpoints={{
            0: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="institutions-swiper"
        >
          {institutionPartners.map((partner, idx) => (
            <SwiperSlide key={idx}>
              <div className="institution-logo-card">
                <Image src={partner.src} alt={partner.alt} width={180} height={80} className="institution-logo-img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
