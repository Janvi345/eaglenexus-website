'use client';

import styles from './About.module.css';
import { Target, Eye, Lightbulb, CheckCircle2 } from 'lucide-react';

const pillars = [
  { icon: Target,      title: 'Mission',   desc: 'Engineered for steady growth — helping brands scale with custom web engineering and performance marketing.' },
  { icon: Eye,         title: 'Vision',    desc: 'To be the most trusted digital growth partner for innovative companies worldwide.' },
  { icon: Lightbulb,   title: 'Approach',  desc: 'Combining data-driven strategy, high-impact video production, and sleek brand identities.' },
];

const highlights = [
  'Custom High-Performance Web Development',
  'Strategic Social Media Management',
  'Cinematic Product & Promotional Video Production',
  'Professional Post-Production & Video Editing',
  'Data-Driven Performance Marketing Campaigns',
  'Complete Creative Branding & Identity Design',
];

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      {/* Orb */}
      <div className={styles.orb} aria-hidden="true" />

      <div className="container">
        <div className={styles.layout}>
          {/* Left */}
          <div className={styles.left}>
            <span className="section-label" id="about-label">Who We Are</span>
            <h2 className="section-title">
              Engineered for <span className="highlight">Steady Growth</span><br />
              <span className="highlight-cyan">Your Vision, Our Innovation.</span>
            </h2>
            <div className="divider" />
            <p className="section-desc" style={{ marginBottom: '28px' }}>
              EagleX Nexus is a full-service digital transformation agency led by Jatin Raheja (Founder & CEO).
              We specialize in engineering robust web applications, crafting engaging video content,
              and executing high-ROI performance marketing campaigns.
            </p>
            <p className="section-desc">
              Founded by a collective of ex-DRDO researchers, ethical hackers, and enterprise
              architects, we&apos;ve trained professionals across government agencies, MNCs, and
              startups worldwide.
            </p>

            {/* Highlights */}
            <ul className={styles.highlights}>
              {highlights.map((h, i) => (
                <li key={i} className={styles.highlightItem} id={`about-highlight-${i}`}>
                  <CheckCircle2 size={16} className={styles.check} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className={styles.right}>
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className={styles.pillarCard} id={`about-pillar-${i}`}>
                  <div className={styles.pillarIconWrap}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className={styles.pillarTitle}>{p.title}</h3>
                    <p className={styles.pillarDesc}>{p.desc}</p>
                  </div>
                </div>
              );
            })}

            {/* Badge card */}
            <div className={styles.badgeCard}>
              <div className={styles.badgeInner}>
                <img src="/eagle-logo.png" alt="" className={styles.badgeEagle} aria-hidden="true" />
                <div>
                  <div className={styles.badgeTitle}>EagleX Certified</div>
                  <div className={styles.badgeSub}>Recognized Globally by 200+ Enterprises</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
