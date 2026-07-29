'use client';

import React, { useEffect } from 'react';
import styles from './ServiceModal.module.css';
import { X, Check, ArrowRight } from 'lucide-react';

export interface ServiceDetails {
  title: string;
  subtitle: string;
  investment: string;
  timeline: string;
  technologies: string[];
  benefits: string[];
  successStory: string;
  icon?: React.ReactNode;
}

interface ServiceModalProps {
  service: ServiceDetails | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const handleStartProject = () => {
    onClose();
    window.location.href = '/contact';
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Top Close Button */}
        <button className={styles.closeBtnTop} onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Header */}
        <div className={styles.header}>
          {service.icon && <div className={styles.iconBox}>{service.icon}</div>}
          <div className={styles.headerText}>
            <h2 className={styles.title}>{service.title}</h2>
            <p className={styles.subtitle}>{service.subtitle}</p>
          </div>
        </div>

        {/* Content Body Grid */}
        <div className={styles.bodyGrid}>
          {/* Key Benefits */}
          <div>
            <h3 className={styles.columnTitle}>Key Benefits</h3>
            <div className={styles.benefitsList}>
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className={styles.benefitItem}>
                  <div className={styles.checkIcon}>
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <h3 className={styles.columnTitle}>Project Details</h3>
            <div className={styles.detailsGroup}>
              <div>
                <div className={styles.detailLabel}>Investment</div>
                <div className={styles.detailValue}>{service.investment}</div>
              </div>

              <div>
                <div className={styles.detailLabel}>Timeline</div>
                <div className={styles.detailValue}>{service.timeline}</div>
              </div>

              <div>
                <div className={styles.detailLabel}>Technologies</div>
                <div className={styles.techPills}>
                  {service.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techPill}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        {/* Success Story & Actions */}
        <div className={styles.successStory}>
          <h4 className={styles.successTitle}>Success Story</h4>
          <p className={styles.successDesc}>{service.successStory}</p>
        </div>

        <div className={styles.actions}>
          <button className={styles.startBtn} onClick={handleStartProject}>
            <ArrowRight size={16} />
            <span>Start Your Project</span>
          </button>
          <button className={styles.closeBtn} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
