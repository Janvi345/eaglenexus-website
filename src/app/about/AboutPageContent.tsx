'use client';

import Link from 'next/link';
import styles from './about-page.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Eye, Lightbulb, Shield, Rocket, Heart, Users, Award, Zap } from 'lucide-react';

/* ─── Data ───────────────────────────────────────────────────── */
const pillars = [
  {
    icon: Target,
    title: 'Mission',
    desc: 'Engineered for steady growth — helping brands scale with custom web engineering, high-impact video production, and performance marketing.',
    color: 'gold',
  },
  {
    icon: Eye,
    title: 'Vision',
    desc: 'To be the most trusted digital growth partner for innovative companies worldwide, delivering measurable results.',
    color: 'cyan',
  },
  {
    icon: Lightbulb,
    title: 'Approach',
    desc: 'Combining data-driven strategy, cinematic storytelling, and sleek brand identities to create unforgettable digital experiences.',
    color: 'magenta',
  },
];

const values = [
  { icon: Shield, title: 'Trust & Transparency', desc: 'We operate with complete honesty. No hidden costs, no empty promises — just results.' },
  { icon: Rocket, title: 'Innovation First', desc: 'We stay ahead of trends, using cutting-edge technology and creative approaches for every project.' },
  { icon: Heart, title: 'Client Obsession', desc: 'Your success is our success. We treat every project as our own and go above and beyond to deliver.' },
  { icon: Users, title: 'Collaboration', desc: 'We work as an extension of your team, ensuring seamless communication and aligned goals.' },
  { icon: Award, title: 'Quality Excellence', desc: 'Premium output, every time. We never compromise on the quality of our deliverables.' },
  { icon: Zap, title: 'Speed & Agility', desc: 'Fast turnarounds without cutting corners. We adapt quickly and deliver on tight deadlines.' },
];

const team = [
  { name: 'Jatin Raheja', role: 'Founder & CEO', initials: 'JR', desc: 'Visionary leader with expertise in digital strategy, performance marketing, and brand building.' },
  { name: 'Creative Team', role: 'Design & Video', initials: 'CT', desc: 'Award-winning designers and videographers crafting cinematic content and stunning visuals.' },
  { name: 'Tech Team', role: 'Development', initials: 'TT', desc: 'Full-stack developers building high-performance, responsive web applications and platforms.' },
];

const stats = [
  { value: '50+', label: 'Projects Delivered', color: 'gold' },
  { value: '200+', label: 'Videos Produced', color: 'cyan' },
  { value: '98%', label: 'Client Satisfaction', color: 'magenta' },
  { value: '10x', label: 'Average ROI', color: 'gold' },
];

/* ─── Component ──────────────────────────────────────────────── */
export default function AboutPageContent() {
  return (
    <div className={styles.page}>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOrb1} aria-hidden="true" />
        <div className={styles.heroOrb2} aria-hidden="true" />
        <div className="container">

          <span className={styles.heroBadge}>◆ About EagleX Nexus</span>
          <h1 className={styles.heroTitle}>
            Your Vision, <br />
            <span className={styles.highlight}>Our Innovation.</span>
          </h1>
          <p className={styles.heroDesc}>
            EagleX Nexus is a full-service digital transformation agency led by Jatin Raheja.
            We engineer robust web applications, craft cinematic video content, and execute
            high-ROI performance marketing campaigns.
          </p>
        </div>
      </section>

      {/* Story + Pillars */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <h2>
                Our <span className={styles.highlight}>Story</span>
              </h2>
              <p>
                Born from a passion for digital excellence, EagleX Nexus was founded with a singular
                vision — to bridge the gap between creative storytelling and data-driven results.
              </p>
              <p>
                We&apos;ve grown from a small team of passionate creators into a full-service digital
                agency delivering end-to-end solutions across web development, social media management,
                video production, performance marketing, and branding.
              </p>
              <p>
                Today, we serve clients across industries — from ambitious startups to established
                enterprises — helping them build powerful digital presences that drive real business growth.
              </p>
            </div>
            <div className={styles.storyVisual}>
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={i} className={styles.storyCard} id={`about-pillar-${i}`}>
                    <div className={`${styles.storyIconWrap} ${styles[`icon${p.color.charAt(0).toUpperCase() + p.color.slice(1)}`]}`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className={styles.storyCardTitle}>{p.title}</h3>
                      <p className={styles.storyCardDesc}>{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <div className={styles.statsBanner}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <div key={i} id={`about-stat-${i}`}>
                <div className={`${styles.statValue} ${styles.highlight}`}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <section className={styles.valuesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Our Values</span>
            <h2 className={styles.sectionTitle}>
              What <span className={styles.highlight}>Drives</span> Us
            </h2>
            <p className={styles.sectionDesc}>
              The core principles that guide every project and every decision we make.
            </p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className={styles.valueCard} id={`about-value-${i}`}>
                  <div className={styles.valueIcon}>
                    <Icon size={24} />
                  </div>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.desc}</p>
                  <div className={styles.valueGlow} aria-hidden="true" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.teamSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Our Team</span>
            <h2 className={styles.sectionTitle}>
              The <span className={styles.highlight}>People</span> Behind EagleX
            </h2>
            <p className={styles.sectionDesc}>
              A team of creative strategists, developers, and marketers passionate about your growth.
            </p>
          </div>
          <div className={styles.teamGrid}>
            {team.map((t, i) => (
              <div key={i} className={styles.teamCard} id={`about-team-${i}`}>
                <div className={styles.teamAvatar}>{t.initials}</div>
                <h3 className={styles.teamName}>{t.name}</h3>
                <div className={styles.teamRole}>{t.role}</div>
                <p className={styles.teamDesc}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaOrb} aria-hidden="true" />
        <div className="container">
          <h2 className={styles.ctaTitle}>
            Want to <span className={styles.highlight}>Work</span> With Us?
          </h2>
          <p className={styles.ctaDesc}>
            Let&apos;s build something extraordinary together. Tell us about your project and goals.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/contact" className="btn-primary" id="about-cta-contact">
              <span>Get In Touch</span>
            </a>
            <a href="/services" className="btn-outline" id="about-cta-services">
              <span>View Services</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
