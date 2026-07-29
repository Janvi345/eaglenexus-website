'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './services-page.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceModal, { ServiceDetails } from '@/components/ServiceModal';
import { servicesData } from '@/data/servicesData';

/* ─── SVG Hexagon Icons ──────────────────────────────────────── */
function WebDevIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" stroke="#F5A623" strokeWidth="1.5" fill="rgba(245,166,35,0.08)" />
      <rect x="7.5" y="8.5" width="9" height="7" rx="1" stroke="#F5A623" strokeWidth="1.4" />
      <path d="M9.5 11.5L8.5 12.5L9.5 13.5" stroke="#F5A623" strokeWidth="1.4" />
      <path d="M14.5 11.5L15.5 12.5L14.5 13.5" stroke="#F5A623" strokeWidth="1.4" />
    </svg>
  );
}

function SocialMediaIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" stroke="#00D4FF" strokeWidth="1.5" fill="rgba(0,212,255,0.08)" />
      <circle cx="8.5" cy="9.5" r="1.5" stroke="#00D4FF" strokeWidth="1.4" />
      <circle cx="15.5" cy="9.5" r="1.5" stroke="#00D4FF" strokeWidth="1.4" />
      <circle cx="12" cy="15.5" r="1.5" stroke="#00D4FF" strokeWidth="1.4" />
      <path d="M9.8 10.3L10.8 14.5" stroke="#00D4FF" strokeWidth="1.2" />
      <path d="M14.2 10.3L13.2 14.5" stroke="#00D4FF" strokeWidth="1.2" />
      <path d="M10 9.5H14" stroke="#00D4FF" strokeWidth="1.2" />
    </svg>
  );
}

function VideoProdIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" stroke="#FF2D78" strokeWidth="1.5" fill="rgba(255,45,120,0.08)" />
      <rect x="7" y="9" width="7" height="6" rx="1" stroke="#FF2D78" strokeWidth="1.4" />
      <polygon points="14 10.5 17 9 17 15 14 13.5" stroke="#FF2D78" strokeWidth="1.4" fill="rgba(255,45,120,0.2)" />
    </svg>
  );
}

function VideoEditIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" stroke="#F5A623" strokeWidth="1.5" fill="rgba(245,166,35,0.08)" />
      <rect x="6.5" y="8" width="11" height="8" rx="1" stroke="#F5A623" strokeWidth="1.4" />
      <path d="M9 8v8M15 8v8" stroke="#F5A623" strokeWidth="1" strokeDasharray="1 1" />
      <path d="M10 12l4-2v4l-4-2z" fill="#F5A623" />
    </svg>
  );
}

function PerformanceMarketingIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" stroke="#00D4FF" strokeWidth="1.5" fill="rgba(0,212,255,0.08)" />
      <path d="M7 16V13" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 16V11" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 16V9" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 16V7" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 13L10 10L13 12L17 7" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="14 7 17 7 17 10" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BrandingIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" stroke="#FF2D78" strokeWidth="1.5" fill="rgba(255,45,120,0.08)" />
      <path d="M12 7L16 11L11 16H7V12L12 7Z" stroke="#FF2D78" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="9.5" cy="13.5" r="0.8" fill="#FF2D78" />
    </svg>
  );
}

const iconsMap: Record<string, React.ReactNode> = {
  'web-development': <WebDevIcon />,
  'social-media': <SocialMediaIcon />,
  'video-production': <VideoProdIcon />,
  'video-editing': <VideoEditIcon />,
  'performance-marketing': <PerformanceMarketingIcon />,
  'branding': <BrandingIcon />,
};

const process = [
  { number: '01', title: 'Discovery', desc: 'We understand your goals, audience and competitors to build a strong foundation.' },
  { number: '02', title: 'Strategy', desc: 'We craft a tailored plan with clear milestones, deliverables and timelines.' },
  { number: '03', title: 'Execution', desc: 'Our team brings the vision to life with premium quality and attention to detail.' },
  { number: '04', title: 'Optimize', desc: 'We measure, analyze and refine to ensure maximum results and growth.' },
];

/* ─── Color Helpers ──────────────────────────────────────────── */
const borderClass = { gold: styles.borderGold, cyan: styles.borderCyan, magenta: styles.borderMagenta };
const iconClass = { gold: styles.iconGold, cyan: styles.iconCyan, magenta: styles.iconMagenta };
const priceClass = { gold: styles.priceGold, cyan: styles.priceCyan, magenta: styles.priceMagenta };
const featureIconClass = { gold: styles.featureIconGold, cyan: styles.featureIconCyan, magenta: styles.featureIconMagenta };

/* ─── Component ──────────────────────────────────────────────── */
export default function ServicesPageContent() {
  const [selectedService, setSelectedService] = useState<ServiceDetails | null>(null);

  const openModal = (svc: typeof servicesData[0]) => {
    setSelectedService({
      ...svc.modalData,
      icon: iconsMap[svc.id],
    });
  };

  return (
    <div className={styles.page}>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOrb1} aria-hidden="true" />
        <div className={styles.heroOrb2} aria-hidden="true" />
        <div className="container">
          <span className={styles.heroBadge}>◆ Our Services</span>
          <h1 className={styles.heroTitle}>
            Premium Digital <br />
            <span className={styles.heroHighlight}>Growth Solutions</span>
          </h1>
          <p className={styles.heroDesc}>
            YOUR VISION, OUR INNOVATION — From web development to branding,
            we deliver end-to-end digital solutions engineered for steady growth.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>50+</div>
              <div className={styles.statLabel}>Projects Delivered</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>98%</div>
              <div className={styles.statLabel}>Client Satisfaction</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>6+</div>
              <div className={styles.statLabel}>Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection} id="services-list">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>What We Offer</span>
            <h2 className={styles.sectionTitle}>
              Explore Our <span className="highlight">Services</span>
            </h2>
            <p className={styles.sectionDesc}>
              Each service is crafted to deliver measurable results and transform your brand&apos;s digital presence.
            </p>
          </div>

          <div className={styles.grid}>
            {servicesData.map((svc, i) => {
              const IconComponent = iconsMap[svc.id];
              return (
                <div
                  key={svc.id}
                  className={`${styles.card} ${borderClass[svc.tagColor]}`}
                  id={`service-detail-${i}`}
                  onClick={() => openModal(svc)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={styles.cardHeader}>
                    <div className={`${styles.iconWrap} ${iconClass[svc.tagColor]}`}>
                      {IconComponent}
                    </div>
                    <div className={styles.priceBadge}>
                      <span className={`${styles.priceValue} ${priceClass[svc.tagColor]}`}>
                        {svc.price.startsWith('Starting at ') ? (
                          <>
                            <span className={styles.startingAt}>Starting at </span>
                            {svc.price.replace('Starting at ', '')}
                          </>
                        ) : svc.price}
                      </span>
                    </div>
                  </div>

                  <h3 className={styles.cardTitle}>{svc.title}</h3>
                  <p className={styles.cardDesc}>{svc.desc}</p>

                  <ul className={styles.features}>
                    {svc.features.map((feat, fi) => (
                      <li key={fi} className={styles.featureItem}>
                        <span className={`${styles.featureIcon} ${featureIconClass[svc.tagColor]}`}>✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.cardFooter}>
                    <button
                      type="button"
                      className={styles.ctaLink}
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(svc);
                      }}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    >
                      Get Details & Overview →
                    </button>
                  </div>
                  <div className={styles.hoverGlow} aria-hidden="true" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>How We Work</span>
            <h2 className={styles.sectionTitle}>
              Our <span className="highlight">Process</span>
            </h2>
            <p className={styles.sectionDesc}>
              A proven 4-step framework that ensures every project delivers exceptional results.
            </p>
          </div>

          <div className={styles.processGrid}>
            {process.map((step, i) => (
              <div key={i} className={styles.processCard} id={`process-step-${i}`}>
                <div className={styles.processNumber}>{step.number}</div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection} id="contact-cta">
        <div className={styles.ctaOrb} aria-hidden="true" />
        <div className="container">
          <h2 className={styles.ctaTitle}>
            Ready to <span className={styles.heroHighlight}>Elevate</span> Your Brand?
          </h2>
          <p className={styles.ctaDesc}>
            Let&apos;s discuss your project and find the perfect solution for your business growth.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/contact" className="btn-primary" id="services-cta-contact">
              <span>Talk to Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      <Footer />
    </div>
  );
}
