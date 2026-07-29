'use client';

import { useState } from 'react';
import styles from './Services.module.css';
import Link from 'next/link';
import ServiceModal, { ServiceDetails } from '@/components/ServiceModal';
import { servicesData } from '@/data/servicesData';

// Custom SVG Hexagon Icons based on EagleX Nexus business card
function WebDevIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" stroke="#F5A623" strokeWidth="1.5" fill="rgba(245,166,35,0.08)" />
      <rect x="7.5" y="8.5" width="9" height="7" rx="1" stroke="#F5A623" strokeWidth="1.4" />
      <path d="M9.5 11.5L8.5 12.5L9.5 13.5" stroke="#F5A623" strokeWidth="1.4" />
      <path d="M14.5 11.5L15.5 12.5L14.5 13.5" stroke="#F5A623" strokeWidth="1.4" />
    </svg>
  );
}

function SocialMediaIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" stroke="#FF2D78" strokeWidth="1.5" fill="rgba(255,45,120,0.08)" />
      <rect x="7" y="9" width="7" height="6" rx="1" stroke="#FF2D78" strokeWidth="1.4" />
      <polygon points="14 10.5 17 9 17 15 14 13.5" stroke="#FF2D78" strokeWidth="1.4" fill="rgba(255,45,120,0.2)" />
    </svg>
  );
}

function VideoEditIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" stroke="#F5A623" strokeWidth="1.5" fill="rgba(245,166,35,0.08)" />
      <rect x="6.5" y="8" width="11" height="8" rx="1" stroke="#F5A623" strokeWidth="1.4" />
      <path d="M9 8v8M15 8v8" stroke="#F5A623" strokeWidth="1" strokeDasharray="1 1" />
      <path d="M10 12l4-2v4l-4-2z" fill="#F5A623" />
    </svg>
  );
}

function PerformanceMarketingIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceDetails | null>(null);

  const openModal = (svc: typeof servicesData[0]) => {
    setSelectedService({
      ...svc.modalData,
      icon: iconsMap[svc.id],
    });
  };

  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className={styles.orb} aria-hidden="true" />
      <div className="container">
        <div className={styles.header}>
          <span className="section-label" id="services-label">OUR SERVICES</span>
          <h2 className="section-title">
            Engineered for <span className="highlight">Steady Growth</span>
          </h2>
          <p className="section-desc">
            INNOVATE ◆ CREATE ◆ ELEVATE — Premium digital solutions tailored to transform your brand.
          </p>
        </div>

        <div className={styles.grid}>
          {servicesData.map((svc, i) => {
            const IconComponent = iconsMap[svc.id];
            return (
              <div
                key={svc.id}
                className={`${styles.card} ${styles[`border_${svc.tagColor}`]}`}
                id={`service-card-${i}`}
                onClick={() => openModal(svc)}
              >
                <div className={`${styles.iconWrap} ${styles[`icon_${svc.tagColor}`]}`}>
                  {IconComponent}
                </div>
                <div className={`tag tag-${svc.tagColor}`}>{svc.tag}</div>
                <h3 className={styles.cardTitle}>{svc.title}</h3>
                <p className={styles.cardDesc}>{svc.desc}</p>
                <div className={styles.cardFooter}>
                  <button
                    type="button"
                    className={styles.learnMore}
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(svc);
                    }}
                  >
                    View Details →
                  </button>
                </div>
                <div className={styles.hoverGlow} aria-hidden="true" />
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/services" className="btn-primary" id="services-view-all">
            <span>View All Services & Pricing</span>
          </Link>
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
