'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface NavItem {
  id: string;
  label: string;
}

interface NeuNavbarProps {
  navItems: NavItem[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const NeuNavbar = ({ navItems, activeSection, onSectionClick }: NeuNavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleSectionClick = (sectionId: string) => {
    // Close menu immediately for better UX
    setMobileMenuOpen(false);
    // Small delay to ensure menu animation starts before scrolling
    setTimeout(() => {
      onSectionClick(sectionId);
    }, 50);
  };

  // Detect mobile device
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black shadow-[0px_6px_0px_black]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            className="text-2xl font-black cursor-pointer text-black uppercase tracking-wider"
            onClick={() => handleSectionClick('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            HVAC<span className="text-purple-500">RECRUITER</span>.co 
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={`px-4 py-2 font-black text-sm uppercase tracking-wider border-2 border-black transition-all duration-200 ${
                  activeSection === item.id 
                    ? 'bg-purple-500 text-white shadow-[3px_3px_0px_black]' 
                    : 'bg-gray-100 text-black shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px]'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden px-4 py-2 font-black text-lg border-4 border-black bg-gray-100 shadow-[4px_4px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </motion.button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden bg-white border-b-4 border-black shadow-[0px_6px_0px_black] transition-all duration-300 ease-out ${
            isMobile ? 'transform-none' : ''
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSectionClick(item.id);
                }}
                className={`w-full px-6 py-4 font-black text-lg uppercase tracking-wider border-4 border-black transition-all duration-200 ${
                  activeSection === item.id 
                    ? 'bg-purple-500 text-white shadow-[4px_4px_0px_black]' 
                    : 'bg-gray-100 text-black shadow-[4px_4px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px]'
                } ${isMobile ? 'opacity-100' : ''}`}
                style={isMobile ? {} : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default NeuNavbar; 