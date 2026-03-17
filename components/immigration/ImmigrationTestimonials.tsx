"use client";

import { useRef, useState, useCallback } from "react";
import { testimonials, testimonialsMeta } from "@/lib/immigration-data";
import { ScrollReveal } from "@/components/motion";

export default function ImmigrationTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const TEXT_LIMIT = 120;

  const scroll = useCallback((dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  }, []);

  return (
    <section className="imm-testimonials">
      <div className="container">
        <ScrollReveal>
          <div className="imm-google-reviews-widget">
            <div className="imm-google-sidebar">
              <span className="imm-google-excellent">{testimonialsMeta.rating}</span>
              <div className="imm-google-sidebar-stars">
                {[...Array(testimonialsMeta.score)].map((_, i) => (
                  <i key={i} className="fas fa-star" />
                ))}
              </div>
              <span className="imm-google-based">
                Based on <strong>{testimonialsMeta.totalReviews} reviews</strong>
              </span>
              <div className="imm-google-logo">
                <span className="imm-g-letter g-blue">G</span>
                <span className="imm-g-letter g-red">o</span>
                <span className="imm-g-letter g-yellow">o</span>
                <span className="imm-g-letter g-blue">g</span>
                <span className="imm-g-letter g-green">l</span>
                <span className="imm-g-letter g-red">e</span>
              </div>
            </div>

            <div className="imm-google-cards-wrapper">
              <div className="imm-google-cards-scroll" ref={scrollRef}>
                {testimonials.map((t, idx) => {
                  const isLong = t.text.length > TEXT_LIMIT;
                  const isExpanded = expandedIdx === idx;
                  const displayText = isLong && !isExpanded ? t.text.slice(0, TEXT_LIMIT) + "..." : t.text;

                  return (
                    <div key={idx} className="imm-google-card">
                      <div className="imm-google-card-header">
                        <div className="imm-google-card-profile">
                          <div
                            className="imm-google-avatar"
                            style={{ background: t.avatarColor }}
                          >
                            {t.name.charAt(0)}
                          </div>
                          <div>
                            <div className="imm-google-name">{t.name.toUpperCase()}</div>
                            <div className="imm-google-date">{t.date}</div>
                          </div>
                        </div>
                        <div className="imm-google-g-icon">
                          <span className="imm-g-letter g-blue">G</span>
                        </div>
                      </div>
                      <div className="imm-google-card-stars">
                        {[...Array(t.rating)].map((_, i) => (
                          <i key={i} className="fas fa-star" />
                        ))}
                      </div>
                      <p className="imm-google-card-text">{displayText}</p>
                      {isLong && (
                        <button
                          className="imm-google-read-more"
                          onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                        >
                          {isExpanded ? "Show less" : "Read more"}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
              <button className="imm-google-scroll-btn left" onClick={() => scroll("left")} aria-label="Scroll left">
                <i className="fas fa-chevron-left" />
              </button>
              <button className="imm-google-scroll-btn right" onClick={() => scroll("right")} aria-label="Scroll right">
                <i className="fas fa-chevron-right" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
