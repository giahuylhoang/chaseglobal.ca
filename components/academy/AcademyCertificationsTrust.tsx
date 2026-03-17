"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { certifications } from "@/lib/academy-data";
import "swiper/css";
import "swiper/css/pagination";

export default function AcademyCertificationsTrust() {
  return (
    <section className="certifications-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">OUR Achievements</span>
          <h2 className="section-title">Credentials and Certifications</h2>
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="certifications-swiper"
        >
          {certifications.map((cert, idx) => (
            <SwiperSlide key={idx}>
              <div className="cert-card">
                <Image src={cert.src} alt={cert.alt} width={280} height={200} className="cert-img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
