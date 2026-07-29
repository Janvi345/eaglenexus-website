import type { Metadata } from 'next';
import PortfolioPageContent from './PortfolioPageContent';

export const metadata: Metadata = {
  title: 'Portfolio – EagleX Nexus | Projects & Courses',
  description: 'Explore our portfolio of web projects, video productions, and marketing campaigns, plus detailed course offerings.',
  openGraph: {
    title: 'Portfolio – EagleX Nexus',
    description: 'Showcase of our work and educational courses.',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
