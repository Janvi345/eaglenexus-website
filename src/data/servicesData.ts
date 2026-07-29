import { ServiceDetails } from '@/components/ServiceModal';

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  tag: string;
  tagColor: 'gold' | 'cyan' | 'magenta';
  price: string;
  features: string[];
  modalData: ServiceDetails;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'WEB DEVELOPMENT',
    desc: 'Custom, responsive and high-performance websites that drive results and elevate your digital presence.',
    tag: 'Starting at 20k',
    tagColor: 'gold',
    price: 'Starting at 20k',
    features: [
      'Responsive & Mobile-First Design',
      'SEO Optimized Architecture',
      'High-Performance & Fast Loading',
      'Custom CMS Integration',
    ],
    modalData: {
      title: 'Website Development',
      subtitle: 'Custom, high-performance websites that convert visitors into customers and drive business growth.',
      investment: '20,000',
      timeline: '2-4 weeks',
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
      benefits: [
        'Responsive design for all devices',
        'Lightning-fast loading speeds',
        'SEO-optimized architecture',
        'Scalable and maintainable code',
        'E-commerce integration',
        'CMS implementation',
        'Progressive Web Apps',
        'API integration',
      ],
      successStory: 'E-commerce platform with 300% conversion increase and sub-second page load times.',
    },
  },
  {
    id: 'social-media',
    title: 'SOCIAL MEDIA MANAGEMENT',
    desc: 'Strategic content, engaging posts and community management that builds a strong brand presence.',
    tag: 'Starting at 8k/month',
    tagColor: 'cyan',
    price: 'Starting at 8k/month',
    features: [
      'Content Strategy & Calendar',
      'Community Engagement',
      'Analytics & Reporting',
      'Multi-Platform Management',
    ],
    modalData: {
      title: 'Social Media Management',
      subtitle: 'Strategic content creation, reels, and community engagement to scale your brand online.',
      investment: '8,000 per month',
      timeline: 'Monthly',
      technologies: ['Meta Ads', 'Canva', 'Photoshop', 'Analytics', 'Premiere Pro'],
      benefits: [
        'High-converting visual content & reels',
        'Comprehensive content calendar',
        'Active community engagement',
        'Targeted audience demographics',
        'Monthly performance & ROI reports',
        'Multi-platform strategy (Insta, LinkedIn, X)',
      ],
      successStory: 'Scaled client brand organic reach by 100K+ impressions in under 60 days.',
    },
  },
  {
    id: 'video-production',
    title: 'PROMOTIONAL & PRODUCT VIDEO',
    desc: 'Cinematic videos that showcase your brand, products and vision with maximum impact.',
    tag: 'Starting at 5k',
    tagColor: 'magenta',
    price: 'Starting at 5k',
    features: [
      'Professional Cinematography',
      'Script & Storyboarding',
      'Motion Graphics & VFX',
      'Multi-Platform Formats',
    ],
    modalData: {
      title: 'Promotional & Product Video',
      subtitle: 'Cinematic commercial films and product highlights designed to captivate your audience.',
      investment: '5,000',
      timeline: '1-2 weeks',
      technologies: ['4K Camera Rig', 'Lighting Setup', 'DaVinci Resolve', 'After Effects', 'Drone Footage'],
      benefits: [
        '4K High-Definition Cinematography',
        'Scriptwriting & Storyboarding',
        'Studio & On-Location Shoot Setup',
        'Motion Graphics & Visual Effects',
        'Multi-platform formats (Reels & YouTube)',
        'Licensed background music & voiceovers',
      ],
      successStory: 'Produced 200+ commercial videos resulting in 5x higher ad click-through rates.',
    },
  },
  {
    id: 'video-editing',
    title: 'PROFESSIONAL VIDEO EDITING',
    desc: 'High-quality editing that turns raw footage into powerful visual stories.',
    tag: 'Starting at 6k',
    tagColor: 'gold',
    price: 'Starting at 6k',
    features: [
      'Color Grading & Correction',
      'Sound Design & Mixing',
      'Transitions & Effects',
      'Quick Turnaround Time',
    ],
    modalData: {
      title: 'Professional Video Editing',
      subtitle: 'Expert post-production editing, color grading, sound design, and motion graphics.',
      investment: '6,000',
      timeline: '3-5 days',
      technologies: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Audition'],
      benefits: [
        'Professional Color Grading',
        'Sound Design & SFX Mastering',
        'Dynamic Transitions & Effects',
        'Kinetic Typography & Captions',
        'Fast 48-hour turnaround available',
        'Optimized for Reels & Shorts',
      ],
      successStory: 'Transformed raw video content into viral short-form reels with over 1M+ views.',
    },
  },
  {
    id: 'performance-marketing',
    title: 'PERFORMANCE MARKETING',
    desc: 'Data-driven campaigns designed to maximize reach, leads and conversions across all channels.',
    tag: 'Starting at 18k/month',
    tagColor: 'cyan',
    price: 'Starting at 18k/month',
    features: [
      'Google & Meta Ads',
      'Conversion Rate Optimization',
      'A/B Testing & Analytics',
      'ROI Tracking & Reports',
    ],
    modalData: {
      title: 'Performance Marketing',
      subtitle: 'Targeted ad campaigns designed for maximum lead generation, sales, and return on ad spend.',
      investment: '18,000 per month',
      timeline: 'Ongoing Campaign',
      technologies: ['Google Ads', 'Meta Pixel', 'LinkedIn Ads', 'Google Analytics 4', 'A/B Testing'],
      benefits: [
        'Targeted Google Search & Display Ads',
        'High-ROAS Meta (Instagram & FB) Ads',
        'Conversion Rate Optimization (CRO)',
        'Pixel & Custom Event Tracking',
        'A/B Copywriting & Creative Testing',
        'Weekly transparent performance reports',
      ],
      successStory: 'Delivered 10x ROI for client campaigns generating 15L+ revenue in 30 days.',
    },
  },
  {
    id: 'branding',
    title: 'BRANDING',
    desc: 'Creative identity and branding solutions that make your brand memorable and trustworthy.',
    tag: 'Starting at 1k',
    tagColor: 'magenta',
    price: 'Starting at 1k',
    features: [
      'Logo & Visual Identity',
      'Brand Guidelines',
      'Visiting Card Design',
      'Letter Head Design',
      'Packaging Design',
      'Brand Strategy & Positioning',
    ],
    modalData: {
      title: 'Complete Brand Identity',
      subtitle: 'Comprehensive brand strategies, logos, typography, and visual guidelines.',
      investment: '1,000',
      timeline: '1-2 weeks',
      technologies: ['Illustrator', 'Figma', 'Photoshop', 'Brand Guidelines', 'Vector Assets'],
      benefits: [
        'Premium Logo & Vector Marks',
        'Complete Visual Brand Guidelines',
        'Color Palette & Typography System',
        'Social Media Kits & Banners',
        'Stationery & Business Card Layouts',
        'Full Copyright Transfer & Source Files',
      ],
      successStory: 'Rebranded 30+ companies, enabling them to elevate their brand authority.',
    },
  },
];
