"use client";

import { useState } from "react";
import { faqItems } from "@/lib/academy-data";

export default function AcademyFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="section-title">Questions &amp; Answer</h2>
        </div>
        <div className="faq-list">
          {faqItems.map((item, idx) => (
            <div key={idx} className={`faq-item${openIdx === idx ? " open" : ""}`}>
              <button className="faq-question" onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
                <span>{item.question}</span>
                <i className={`fas fa-${openIdx === idx ? "minus" : "plus"}`} />
              </button>
              <div className="faq-answer" style={{ maxHeight: openIdx === idx ? "200px" : "0" }}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
