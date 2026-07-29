'use client';

import styles from './Footer.module.css';
import { ArrowUp, ExternalLink } from 'lucide-react';

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function WhatsappIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21l1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
      <path d="M9.5 8.5c.3 1.2 1.2 2.7 2.4 3.9 1.2 1.2 2.7 2.1 3.9 2.4.4.1.8-.1 1-.4l.7-.9c.2-.3.1-.7-.2-.9l-1.4-.7c-.3-.2-.7-.1-.9.1l-.4.5c-.7-.3-1.6-.9-2.2-1.6-.7-.6-1.3-1.5-1.6-2.2l.5-.4c.2-.2.3-.6.1-.9l-.7-1.4c-.2-.3-.6-.4-.9-.2l-.9.7c-.3.2-.5.6-.4 1z" />
    </svg>
  );
}

const links = {
  Services: [
    { label: 'Web Development', href: '/services' },
    { label: 'Social Media Management', href: '/services' },
    { label: 'Video Production', href: '/services' },
    { label: 'Video Editing', href: '/services' },
    { label: 'Performance Marketing', href: '/services' },
    { label: 'Branding', href: '/services' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ],
  'Contact Info': [
    { label: 'Jatin Raheja (Founder & CEO)', href: '/contact' },
    { label: '+91 79005-85005 (WhatsApp)', href: 'https://wa.me/917900585005' },
    { label: 'info@eaglexnexus.in', href: 'mailto:info@eaglexnexus.in' },
    { label: '@eaglexnexus (Instagram)', href: 'https://www.instagram.com/eaglexnexus?igsh=MWdjamZtZ3hpNnVpeg==' },
  ],
};

const socials = [
  { icon: InstagramIcon, href: 'https://www.instagram.com/eaglexnexus?igsh=MWdjamZtZ3hpNnVpeg==', label: 'Instagram' },
  { icon: WhatsappIcon, href: 'https://wa.me/917900585005', label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer" role="contentinfo">
      {/* CTA Banner */}
      <div className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.bannerInner}>
            <div className={styles.bannerText}>
              <h2 className={styles.bannerTitle}>
                Ready to <span className={styles.gold}>Soar</span> with EagleX?
              </h2>
              <p className={styles.bannerDesc}>
                Engineered for steady growth — YOUR VISION, OUR INNOVATION
              </p>
            </div>
            <div className={styles.bannerCtas}>
              <a href="/contact" className="btn-primary" id="footer-cta-start">
                <span>Start Your Project</span>
                <ExternalLink size={16} />
              </a>
              <a href="/services" className="btn-outline" id="footer-cta-contact">
                <span>Explore Services</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <div className={styles.logo}>
                <img src="/eagle-logo.png" alt="EagleX Nexus" width={60} height={60} className={styles.logoImg} />
                <div>
                  <div className={styles.logoName}>EagleX NEXUS</div>
                  <div className={styles.logoTagline}>engineered for steady growth</div>
                </div>
              </div>
              <p className={styles.brandDesc}>
                Premier digital growth agency delivering Web Development, Social Media Management,
                Video Production, Performance Marketing, and Branding solutions.
              </p>
              <div className={styles.socials}>
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a key={s.label} href={s.href} className={styles.socialLink} aria-label={s.label} id={`footer-social-${s.label.toLowerCase()}`}>
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links */}
            {Object.entries(links).map(([group, items]) => (
              <div key={group} className={styles.linkGroup}>
                <h3 className={styles.groupTitle}>{group}</h3>
                <ul className={styles.linkList}>
                  {items.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={styles.footerLink} id={`footer-link-${link.label.toLowerCase().replace(/\s/g, '-')}`}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © 2025 EagleX Nexus. All rights reserved. Made in India
            </p>
            <div className={styles.certBadges}>
              <span className={styles.certBadge}>ISO 27001</span>
              <span className={styles.certBadge}>CERT-In</span>
              <span className={styles.certBadge}>NASSCOM</span>
            </div>
            <button
              className={styles.backTop}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              id="footer-back-top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
