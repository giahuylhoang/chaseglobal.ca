import Link from "next/link";

export default function ImmigrationCtaBanner() {
  return (
    <section className="imm-cta-banner">
      <div className="container">
        <div className="imm-cta-banner-inner">
          <Link href="/immigration/contact" className="imm-cta-banner-btn filled">
            <i className="fas fa-file-alt" /> Get Your Free Assessment Today
          </Link>
          <Link href="/immigration/contact" className="imm-cta-banner-btn">
            <i className="fas fa-calendar-check" /> Book Your Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
