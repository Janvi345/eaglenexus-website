import type { Metadata } from 'next';
import AboutPageContent from './AboutPageContent';

export const metadata: Metadata = {
  title: 'About Us – EagleX Nexus | Digital Growth Agency',
  description:
    'Learn about EagleX Nexus — a full-service digital transformation agency led by Jatin Raheja. We specialize in Web Development, Video Production, Performance Marketing, and Branding.',
  openGraph: {
    title: 'About Us – EagleX Nexus',
    description: 'Full-service digital growth agency engineered for steady growth.',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
