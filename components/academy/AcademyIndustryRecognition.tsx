"use client";

import Image from "next/image";
import { industryRecognitions } from "@/lib/academy-data";

export default function AcademyIndustryRecognition() {
  return (
    <section className="recognition-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Memberships</span>
          <h2 className="section-title">Industry Recognitions</h2>
        </div>
        <div className="recognition-grid">
          {industryRecognitions.map((item, idx) => (
            <div key={idx} className="recognition-card">
              <Image src={item.src} alt={item.alt} width={200} height={120} className="recognition-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
