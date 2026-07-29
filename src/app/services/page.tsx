import type { Metadata } from 'next';
import ServicesPageContent from './ServicesPageContent';

export const metadata: Metadata = {
  title: 'Our Services – EagleX Nexus | Premium Digital Growth Solutions',
  description:
    'Explore EagleX Nexus premium services: Web Development, Social Media Management, Video Production, Video Editing, Performance Marketing, and Branding. Engineered for steady growth.',
  openGraph: {
    title: 'Our Services – EagleX Nexus',
    description: 'Premium digital solutions tailored to transform your brand.',
    type: 'website',
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
