"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { services } from "@/lib/academy-data";
import "swiper/css";
import "swiper/css/navigation";

export default function AcademyServices() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">OUR SERVICES</span>
          <h2 className="section-title">Choose Your Required Services from our list</h2>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className="services-swiper"
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <div className="service-card">
                <div className="service-card-icon">
                  <i className={service.icon} />
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <Link href={service.href} className="service-card-btn">
                  View More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
