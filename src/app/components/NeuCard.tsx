'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface NeuCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'highlight';
  hoverable?: boolean;
}

const NeuCard = ({ 
  children, 
  className = '', 
  variant = 'default',
  hoverable = false 
}: NeuCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isTouchDevice = 'ontouchstart' in window;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isMobileDevice || (isTouchDevice && isSmallScreen));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return; // Only use native observer on mobile

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [isMobile]);

  const baseClasses = "border-4 border-black transition-all duration-200";
  
  const variants = {
    default: "bg-gray-100",
    highlight: "bg-white"
  };
  
  const shadowClasses = hoverable 
    ? "shadow-[6px_6px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-x-[4px] hover:translate-y-[4px]"
    : "shadow-[6px_6px_0px_black]";
  
  // Use native approach on mobile, Framer Motion on desktop
  if (isMobile) {
    return (
      <div
        ref={cardRef}
        className={`${baseClasses} ${variants[variant]} ${shadowClasses} ${className} transition-opacity duration-300 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {children}
      </div>
    );
  }

  // Desktop - use Framer Motion
  return (
    <motion.div
      className={`${baseClasses} ${variants[variant]} ${shadowClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default NeuCard; 