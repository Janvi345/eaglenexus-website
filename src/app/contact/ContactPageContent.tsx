'use client';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './contact-page.module.css';

export default function ContactPageContent() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}
