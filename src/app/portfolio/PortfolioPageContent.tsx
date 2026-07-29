'use client';
import Portfolio from '@/components/Portfolio';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './portfolio-page.module.css';

export default function PortfolioPageContent() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Portfolio />
      <Footer />
    </div>
  );
}
