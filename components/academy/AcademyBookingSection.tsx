"use client";

import { useState } from "react";
import { bookingSection } from "@/lib/academy-data";

export default function AcademyBookingSection() {
  const d = bookingSection;
  const [form, setForm] = useState({
    country: "",
    service: "",
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="booking-section">
      <div className="container">
        <div className="booking-inner">
          <div className="booking-form-col">
            <h2 className="booking-title">{d.title}</h2>
            <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <select name="country" value={form.country} onChange={handleChange} className="form-select">
                  <option value="">Select Country</option>
                  {d.countries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <select name="service" value={form.service} onChange={handleChange} className="form-select">
                  <option value="">Select Service</option>
                  {d.serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="form-row">
                <input type="text" name="name" placeholder="Your Full Name" value={form.name} onChange={handleChange} className="form-input" />
                <input type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="form-input" />
              </div>
              <div className="form-row">
                <input type="date" name="date" value={form.date} onChange={handleChange} className="form-input" />
                <input type="time" name="time" value={form.time} onChange={handleChange} className="form-input" />
              </div>
              <button type="submit" className="booking-submit-btn">CONTACT US</button>
            </form>
          </div>
          <div className="booking-info-col">
            <h3 className="booking-call-title">{d.orCallTitle}</h3>
            <a href={`tel:${d.phone.replace(/\s/g, "")}`} className="booking-phone">
              <i className="fas fa-phone-alt" /> {d.phone}
            </a>
            <p className="booking-support">{d.supportText}</p>
            <p className="booking-desc">{d.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
