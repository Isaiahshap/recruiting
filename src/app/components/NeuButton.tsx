'use client';

import { motion } from 'framer-motion';

interface NeuButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const NeuButton = ({ 
  children, 
  onClick, 
  href, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}: NeuButtonProps) => {
  const baseClasses = "font-black uppercase tracking-wider transition-all duration-200 border-4 border-black";
  
  const variants = {
    primary: "bg-purple-500 text-white hover:bg-purple-600",
    secondary: "bg-red-500 text-white hover:bg-red-600", 
    accent: "bg-green-500 text-black hover:bg-green-600"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-4 text-lg",
    lg: "px-12 py-6 text-xl"
  };
  
  const shadowClasses = "shadow-[6px_6px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-x-[4px] hover:translate-y-[4px]";
  
  const Component = href ? motion.a : motion.button;
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${shadowClasses} ${className}`}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </Component>
  );
};

export default NeuButton; 