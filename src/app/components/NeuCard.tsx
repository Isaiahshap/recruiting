'use client';

import { motion } from 'framer-motion';

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
  const baseClasses = "border-4 border-black transition-all duration-200";
  
  const variants = {
    default: "bg-gray-100",
    highlight: "bg-white"
  };
  
  const shadowClasses = hoverable 
    ? "shadow-[6px_6px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-x-[4px] hover:translate-y-[4px]"
    : "shadow-[6px_6px_0px_black]";
  
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