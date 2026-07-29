'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { ArrowRight, Shield, Globe, ChevronDown } from 'lucide-react';

const PARTICLES = 60;

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: PARTICLES }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
      color: ['#F5A623', '#FFD166', '#C47D0E'][Math.floor(Math.random() * 3)],
      alpha: Math.random() * 0.6 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((q) => {
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            const alpha = (1 - dist / 120) * 0.15;
            ctx.strokeStyle = `rgba(245,166,35,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(p.alpha * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Cursor Parallax / Tilt Effect for Eagle Logo
  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    let currentX = 0, currentY = 0;
    let targetX = 0, targetY = 0;
    let reqId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = logo.getBoundingClientRect();
      const logoCenterX = rect.left + rect.width / 2;
      const logoCenterY = rect.top + rect.height / 2;

      // Distance relative to center of logo
      const deltaX = (e.clientX - logoCenterX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - logoCenterY) / (window.innerHeight / 2);

      targetX = deltaX * 32; // max displacement
      targetY = deltaY * 32;
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const animate = () => {
      // Smooth lerp for fluid motion
      currentX += (targetX - currentX) * 0.07;
      currentY += (targetY - currentY) * 0.07;

      const tiltX = -(currentY / 32) * 14; // max 14deg tilt
      const tiltY = (currentX / 32) * 14;

      logo.style.transform = `perspective(1000px) translate3d(${currentX}px, ${currentY}px, 0px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

      reqId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(reqId);
    };
  }, []);

  return (
    <section id="home" className={styles.hero}>
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />

      {/* Orbs */}
      <div className={`${styles.orb} ${styles.orb1}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb2}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb3}`} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        {/* Badge */}
        <div className={styles.badge} id="hero-badge">
          <span className={styles.badgeDot} />
          <Shield size={13} />
          <span>engineered for steady growth</span>
        </div>

        {/* Eagle + Headline layout */}
        <div className={styles.mainRow}>
          <div className={styles.textBlock}>
            <h1 className={styles.headline}>
              {/* <span className={styles.line1}>Innovate ◆ Create ◆ Elevate</span> */}
              <span className={styles.line2}>
                Scale your brand with
              </span>
              <span className={styles.line3}>
                <span className={styles.gradientGold}>EagleX Nexus</span>
              </span>
            </h1>
            <p className={styles.subheadline}>
              Custom Web Development, Social Media Management, Video Production, Video Editing,
              Performance Marketing & Strategic Branding.
            </p>

            <div className={styles.ctaRow}>
              <a href="/services" className="btn-primary" id="hero-cta-start">
                <span>Explore Services</span>
                <ArrowRight size={18} />
              </a>
              <a href="/contact" className="btn-outline" id="hero-cta-community">
                <Globe size={16} />
                <span>Contact Us</span>
              </a>
            </div>

            {/* Mini Stats */}
            <div className={styles.miniStats}>
              {[
                { val: '6+', label: 'Core Services' },
                { val: '100%', label: 'Steady Growth' },
                { val: '24/7', label: 'Dedicated Support' },
              ].map((s) => (
                <div key={s.label} className={styles.miniStat}>
                  <span className={styles.miniVal}>{s.val}</span>
                  <span className={styles.miniLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Eagle Logo Container with Cursor Tracking */}
          <div ref={logoRef} className={styles.eagleWrap} aria-label="EagleX Nexus Eagle Logo">
            <div className={styles.ringOuter} aria-hidden="true" />
            <div className={styles.ringInner} aria-hidden="true" />
            <img
              src="/eagle-logo.png"
              alt="EagleX Nexus Eagle"
              className={styles.eagle}
            />
            {/* Floating nodes */}
            <div className={`${styles.node} ${styles.nodeTop}`} aria-hidden="true" />
            <div className={`${styles.node} ${styles.nodeLeft}`} aria-hidden="true" />
            <div className={`${styles.node} ${styles.nodeRight}`} aria-hidden="true" />
            <div className={`${styles.node} ${styles.nodeBottom}`} aria-hidden="true" />
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#about" className={styles.scrollDown} aria-label="Scroll to about section" id="hero-scroll-down">
          <ChevronDown size={22} />
        </a>
      </div>

      {/* Scan line effect */}
      <div className={styles.scanLine} aria-hidden="true" />
    </section>
  );
}
