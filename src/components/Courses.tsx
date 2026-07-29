'use client';

import { useState } from 'react';
import styles from './Courses.module.css';
import { ArrowRight, BadgeCheck, Star, Flame, Zap } from 'lucide-react';

const categories = ['All', 'Web', 'Social', 'Video', 'Marketing', 'Branding'];

const serviceShowcase = [
  {
    title: 'Custom Web Engineering',
    desc: 'Full-stack responsive websites, web applications, and e-commerce platforms built for speed and conversion.',
    category: 'Web',
    level: 'Web Dev',
    duration: '2-4 Weeks',
    students: '50+ Built',
    rating: 5.0,
    price: 'Custom Quote',
    oldPrice: '',
    badge: 'Popular',
    badgeColor: 'gold',
    accent: 'gold',
  },
  {
    title: 'Social Media Management',
    desc: 'End-to-end content creation, post scheduling, community engagement, and brand growth across Instagram, LinkedIn & Twitter.',
    category: 'Social',
    level: 'Growth',
    duration: 'Monthly',
    students: '100K+ Reach',
    rating: 4.9,
    price: 'Monthly Plans',
    oldPrice: '',
    badge: 'Trending',
    badgeColor: 'cyan',
    accent: 'cyan',
  },
  {
    title: 'Promotional & Product Video Production',
    desc: 'High-definition 4K commercial videos, product demos, brand stories, and social reels produced with cinematic flair.',
    category: 'Video',
    level: 'Production',
    duration: '1-2 Weeks',
    students: '200+ Videos',
    rating: 4.9,
    price: 'Per Project',
    oldPrice: '',
    badge: 'Featured',
    badgeColor: 'magenta',
    accent: 'magenta',
  },
  {
    title: 'Professional Video Post-Production',
    desc: 'Expert video editing, color grading, sound design, motion graphics, and visual effects for raw footage.',
    category: 'Video',
    level: 'Post-Prod',
    duration: '3-5 Days',
    students: '500+ Hours',
    rating: 4.8,
    price: 'Fast Delivery',
    oldPrice: '',
    badge: 'High Demand',
    badgeColor: 'gold',
    accent: 'gold',
  },
  {
    title: 'Data-Driven Performance Marketing',
    desc: 'Targeted ad campaigns on Meta, Google & LinkedIn designed for maximum lead generation and ROI.',
    category: 'Marketing',
    level: 'ROI Focused',
    duration: 'Ongoing',
    students: '10x Return',
    rating: 5.0,
    price: 'Performance',
    oldPrice: '',
    badge: 'High ROI',
    badgeColor: 'cyan',
    accent: 'cyan',
  },
  {
    title: 'Complete Brand Identity & Design',
    desc: 'Logo creation, brand guidelines, typography, color palettes, marketing collateral, and digital asset packages.',
    category: 'Branding',
    level: 'Identity',
    duration: '1-2 Weeks',
    students: '30+ Brands',
    rating: 4.9,
    price: 'Complete Package',
    oldPrice: '',
    badge: 'Essential',
    badgeColor: 'magenta',
    accent: 'magenta',
  },
];

const levelColors: Record<string, string> = {
  'Web Dev': 'gold',
  'Growth': 'cyan',
  'Production': 'magenta',
  'Post-Prod': 'gold',
  'ROI Focused': 'cyan',
  'Identity': 'magenta',
};

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? serviceShowcase
    : serviceShowcase.filter((c) => c.category === activeCategory);

  return (
    <section id="courses" className={`section ${styles.courses}`}>
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="section-label" id="courses-label">Service Solutions</span>
          <h2 className="section-title">
            Tailored <span className="highlight">Growth Packages</span><br />
            Built for <span className="highlight-cyan">Maximum Impact</span>
          </h2>
          <p className="section-desc">
            Explore our specialized service offerings engineered for steady growth and brand excellence.
          </p>
        </div>

        {/* Category Filter */}
        <div className={styles.filters} role="tablist" aria-label="Service categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
              id={`service-filter-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((item, i) => (
            <div key={i} className={`${styles.card} ${styles[`accent_${item.accent}`]}`} id={`showcase-card-${i}`}>
              {/* Header */}
              <div className={styles.cardHeader}>
                <div className={styles.cardMeta}>
                  <span className={`tag tag-${levelColors[item.level] || 'gold'}`}>{item.level}</span>
                </div>
                {item.badge && (
                  <span className={`${styles.badge} ${styles[`badge_${item.badgeColor}`]}`}>
                    {item.badge === 'Popular' && <Flame size={11} />}
                    {item.badge === 'Trending' && <Zap size={11} />}
                    {item.badge === 'Featured' && <BadgeCheck size={11} />}
                    {item.badge}
                  </span>
                )}
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>

              {/* Info Row */}
              <div className={styles.infoRow}>
                <span className={styles.infoItem}>{item.duration}</span>
                <span className={styles.infoItem}>{item.students}</span>
                <span className={styles.ratingItem}>
                  <Star size={13} fill="currentColor" /> {item.rating}
                </span>
              </div>

              {/* Price + CTA */}
              <div className={styles.cardFooter}>
                <div className={styles.pricing}>
                  <span className={styles.price}>{item.price}</span>
                </div>
                <a href="/contact" className={styles.enrollBtn} id={`showcase-cta-${i}`}>
                  Enquire <ArrowRight size={14} />
                </a>
              </div>

              <div className={styles.glowLine} aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.bottomCta}>
          <a href="/contact" className="btn-primary" id="services-view-all">
            Discuss Your Custom Requirement →
          </a>
        </div>
      </div>
    </section>
  );
}
