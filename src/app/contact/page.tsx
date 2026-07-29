import type { Metadata } from 'next';
import ContactPageContent from './ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact – EagleX Nexus | Get In Touch',
  description: 'Reach out to EagleX Nexus for inquiries about services, courses, or collaborations. Quick response within 2 hours.',
  openGraph: {
    title: 'Contact – EagleX Nexus',
    description: 'Get in touch with our digital growth agency.',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
