'use client';

import styles from './Testimonials.module.css';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'Founder @ TechScale',
    avatar: 'AM',
    avatarColor: 'gold',
    rating: 5,
    text: 'EagleX Nexus delivered our web application and branding flawlessly. Our conversion rate jumped by 180% in the first month post-launch. Jatin and his team are extraordinary.',
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Head @ Apex Retail',
    avatar: 'PS',
    avatarColor: 'cyan',
    rating: 5,
    text: 'Their social media management and performance marketing campaigns transformed our brand presence. Highly strategic content and incredible ROI.',
  },
  {
    name: 'Rohan Verma',
    role: 'CEO @ NextGen Media',
    avatar: 'RV',
    avatarColor: 'magenta',
    rating: 5,
    text: 'The promotional video production and video editing quality is cinematic tier. They captured our product vision with immense visual impact.',
  },
  {
    name: 'Sneha Reddy',
    role: 'Brand Manager @ Luxe Living',
    avatar: 'SR',
    avatarColor: 'gold',
    rating: 5,
    text: 'EagleX Nexus crafted our complete brand identity. From logo design to visual guidelines, everything reflects steady growth and premium luxury.',
  },
  {
    name: 'Karthik Nair',
    role: 'Co-Founder @ SaaSify',
    avatar: 'KN',
    avatarColor: 'cyan',
    rating: 5,
    text: 'Outstanding web development and performance ad campaigns. They scaled our customer acquisition by 4x within 60 days.',
  },
  {
    name: 'Amisha Patel',
    role: 'Director @ CommerceX',
    avatar: 'AP',
    avatarColor: 'magenta',
    rating: 5,
    text: 'If you want steady growth, EagleX Nexus is the ultimate partner. Innovate, Create, Elevate in every sense of the words.',
  },
];

const avatarColors: Record<string, { bg: string; text: string }> = {
  gold:    { bg: 'rgba(245,166,35,0.15)', text: '#F5A623' },
  cyan:    { bg: 'rgba(245,166,35,0.15)', text: '#F5A623' },
  magenta: { bg: 'rgba(245,166,35,0.15)', text: '#F5A623' },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className={`section ${styles.testimonials}`}>
      <div className={styles.orb} aria-hidden="true" />

      <div className="container">
        <div className={styles.header} style={{ textAlign: 'center' }}>
          <span className="section-label" id="testimonials-label">Client Success</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            What Our <span className="highlight">Clients</span> Say
          </h2>
          <p className="section-desc" style={{ textAlign: 'center', margin: '16px auto 0', maxWidth: '640px' }}>
            Real results from real professionals. Thousands have transformed their careers through EagleX Nexus.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => {
            const ac = avatarColors[t.avatarColor];
            return (
              <div key={i} className={styles.card} id={`testimonial-${i}`}>
                <Quote size={24} className={styles.quoteIcon} aria-hidden="true" />
                <p className={styles.text}>{t.text}</p>
                <div className={styles.stars} aria-label={`${t.rating} stars`}>
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} size={14} fill="currentColor" style={{ color: 'var(--gold)' }} />
                  ))}
                </div>
                <div className={styles.author}>
                  <div
                    className={styles.avatar}
                    style={{ background: ac.bg, color: ac.text }}
                    aria-hidden="true"
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className={styles.authorName}>{t.name}</div>
                    <div className={styles.authorRole}>{t.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
