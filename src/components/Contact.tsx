'use client';

import { useState } from 'react';
import styles from './Contact.module.css';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className="container">
        <div className={styles.header}>
          <span className="section-label" id="contact-label">Get In Touch</span>
          <h2 className="section-title">
            Ready to <span className="highlight">Elevate</span> Your<br />
            <span className="highlight-cyan">Cyber</span> Journey?
          </h2>
          <p className="section-desc">
            Have questions about courses, memberships, or corporate training? Our team responds within 2 hours.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Left – Info cards */}
          <div className={styles.infoCol}>
            {[
              { icon: Mail,    label: 'Email Us',    value: 'info@eaglexnexus.in',   hint: 'Quick response within 2 hours', href: 'mailto:info@eaglexnexus.in' },
              { icon: Phone,   label: 'Call & WhatsApp', value: '+91 79005-85005',   hint: 'Direct line & WhatsApp chat', href: 'https://wa.me/917900585005' },
              { icon: MapPin,  label: 'Instagram / Founder', value: 'Jatin Raheja (Founder & CEO)', hint: 'Instagram: @eaglexnexus', href: 'https://www.instagram.com/eaglexnexus?igsh=MWdjamZtZ3hpNnVpeg==' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className={styles.infoCard} id={`contact-info-${i}`}>
                  <div className={styles.infoIcon}><Icon size={20} /></div>
                  <div>
                    <div className={styles.infoLabel}>{item.label}</div>
                    <div className={styles.infoValue}>{item.value}</div>
                    <div className={styles.infoHint}>{item.hint}</div>
                  </div>
                </a>
              );
            })}

            {/* Newsletter block */}
            <div className={styles.newsletterCard}>
              <h3 className={styles.nlTitle}>Weekly Intel Report</h3>
              <p className={styles.nlDesc}>Get curated cybersecurity news, CVE alerts, and tool releases every Monday.</p>
              <div className={styles.nlForm}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className={styles.nlInput}
                  id="newsletter-email"
                  aria-label="Newsletter email"
                />
                <button className={styles.nlBtn} id="newsletter-subscribe">Subscribe</button>
              </div>
            </div>
          </div>

          {/* Right – Contact Form */}
          <form className={styles.form} onSubmit={handleSubmit} id="contact-form" noValidate>
            {sent && (
              <div className={styles.successMsg} role="alert">
                <CheckCircle size={18} />
                Message sent! We&apos;ll get back to you within 2 hours.
              </div>
            )}

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="John Doe"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                placeholder="Course enquiry / Corporate training / General"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="Tell us about your goals and how we can help..."
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <button type="submit" className={`btn-primary ${styles.submitBtn}`} id="contact-submit">
              <span>Send Message</span>
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
