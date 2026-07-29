'use client';

import styles from './Portfolio.module.css';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'SoloCorp',
    description: 'A fully responsive website built for a startup.',
    tags: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Express.js'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'MTTF Hub',
    description: 'A fully functional website for an NGO showing their work and their services including payment gateways and many more',
    tags: ['React', 'Next.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Dashmesh Scaled Models Makers',
    description: 'A fully functional website for a business Selling 3d printed models on custom orders and pre defined orders',
    tags: ['React', 'Next.js', 'MongoDB', 'Express Js', 'Nodemailer'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Hostel Management System',
    description: 'A Complete software to manage staff and Students in a hostel',
    tags: ['React', 'Next.js', 'MongoDB', 'Express Js', 'Nodemailer', 'Type Script', 'Tailwind Css'],
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Seating Plan Management System',
    description: 'A Complete software to manage Seating arrangement in examination and excel import for the Seating arrangement generated',
    tags: ['React', 'Next.js', 'MongoDB', 'Express Js', 'Nodemailer', 'Type Script', 'Tailwind Css'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Narindra Techno Tools',
    description: 'An eCommerce site for a business to Showcase its products online and selling them online',
    tags: ['React', 'Next.js', 'MongoDB', 'Nodemailer', 'Type Script', 'Tailwind Css'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Glossify',
    description: 'An eCommerce site for a Car care brand to start its business Online',
    tags: ['React', 'Next.js', 'MongoDB', 'Nodemailer', 'Type Script', 'Tailwind Css'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
  },
];

export default function Portfolio() {
  return (
    <section className={styles.portfolioSection}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Our Work</span>
          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <p className="section-desc">
            Explore our portfolio of web applications, custom platforms, and e-commerce solutions built for steady digital growth.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card} id={`project-card-${index}`}>
              <div className={styles.imageWrap}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
