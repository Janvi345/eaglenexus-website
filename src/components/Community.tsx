'use client';

import styles from './Community.module.css';
import { MessageSquare, Trophy, Radio, Users2, Calendar, GitBranch, ArrowRight } from 'lucide-react';

const perks = [
  { icon: MessageSquare, title: 'Discord Server', desc: '+ members. Dedicated channels for every domain, daily discussions, and 24/7 peer support.', color: 'cyan' },
  { icon: Trophy, title: 'CTF Competitions', desc: 'Weekly Capture The Flag challenges. Compete solo or in teams. Win prizes and build your portfolio.', color: 'gold' },
  { icon: Radio, title: 'Live Webinars', desc: 'Monthly expert webinars from CISO-level practitioners, CVE authors, and security researchers.', color: 'magenta' },
  { icon: Users2, title: 'Mentorship Program', desc: 'Get paired with an industry mentor. Weekly 1-on-1 sessions to accelerate your career growth.', color: 'gold' },
  { icon: Calendar, title: 'Hackathons & Events', desc: 'Virtual and in-person events. Bootcamps, job fairs, and networking meets across India & globally.', color: 'cyan' },
  { icon: GitBranch, title: 'Open Source Projects', desc: 'Contribute to security tools. Build your GitHub portfolio with real-world security projects.', color: 'magenta' },
];

export default function Community() {
  return (
    <section id="community" className={`section ${styles.community}`}>
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.orb} aria-hidden="true" />

      <div className="container">
        <div className={styles.layout}>
          {/* Left: heading + CTA */}
          <div className={styles.left}>
            <span className="section-label" id="community-label">The Community</span>
            <h2 className="section-title">
              Join the <span className="highlight">EagleX</span><br />
              <span className="highlight-cyan">Nexus</span> Community
            </h2>
            <div className="divider" />
            <p className="section-desc">
              Over 50,000 cybersecurity professionals, students, and enthusiasts under one
              roof. Connect, collaborate, compete — and grow faster than you ever thought possible.
            </p>

            <div className={styles.ctaGroup}>
              <a href="#" className="btn-primary" id="community-discord">
                <span>Join Discord</span>
                <ArrowRight size={16} />
              </a>
              <a href="/contact" className="btn-outline" id="community-newsletter">
                <span>Get Newsletter</span>
              </a>
            </div>

            {/* Discord live stat */}
            <div className={styles.liveCard} id="community-live-stat">
              <span className={styles.liveDot} />
              <div>
                <div className={styles.liveNum}>3,240</div>
                <div className={styles.liveLabel}>Members online right now</div>
              </div>
            </div>
          </div>

          {/* Right: Perks grid */}
          <div className={styles.right}>
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <div key={i} className={`${styles.perkCard} ${styles[`color_${perk.color}`]}`} id={`community-perk-${i}`}>
                  <div className={styles.perkIcon}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className={styles.perkTitle}>{perk.title}</div>
                    <div className={styles.perkDesc}>{perk.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
