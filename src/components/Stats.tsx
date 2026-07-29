'use client';

import { useEffect, useRef } from 'react';
import styles from './Stats.module.css';
import { Users, Award, Star } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Award, value: '1200+', label: 'Projects Completed' },
  { icon: Star, value: '98%', label: 'Success Rate' },
];

function useCountUp(ref: React.RefObject<HTMLSpanElement | null>, end: string) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const num = parseInt(end.replace(/\D/g, ''));
    if (isNaN(num)) {
      el.textContent = end;
      return;
    }
    const suffix = end.replace(/[\d,]/g, '');
    let start = 0;
    const duration = 1600;
    const step = (num / duration) * 16;
    const tick = () => {
      start = Math.min(start + step, num);
      el.textContent = Math.floor(start).toLocaleString() + suffix;
      if (start < num) requestAnimationFrame(tick);
    };
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tick();
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, ref]);
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const valRef = useRef<HTMLSpanElement>(null);
  useCountUp(valRef, stat.value);
  const Icon = stat.icon;

  return (
    <div className={styles.statCard} id={`stat-card-${index}`}>
      <div className={styles.leftContent}>
        <span className={styles.value} ref={valRef}>
          {stat.value}
        </span>
        <span className={styles.label}>{stat.label}</span>
      </div>
      <div className={styles.iconWrap}>
        <Icon size={22} />
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className={styles.statsSection} id="stats" aria-label="Statistics">
      <div className="container">
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
