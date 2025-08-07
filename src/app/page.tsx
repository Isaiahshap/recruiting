'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import NeuButton from './components/NeuButton';
import NeuCard from './components/NeuCard';
import NeuNavbar from './components/NeuNavbar';
import NeuTimeline from './components/NeuTimeline';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100; // Account for navbar height + shadow + padding
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'pricing', 'timeline', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME', href: '/' },
    { id: 'about', label: 'ABOUT', href: '/about' },
    { id: 'locations', label: 'LOCATIONS', href: '/locations' },
    { id: 'contact', label: 'CONTACT', href: '/contact' },
  ];

  const timelineItems = [
    { step: "01", title: "DISCOVERY CALL", desc: "I understand your specific needs, company culture, and ideal candidate profile." },
    { step: "02", title: "ACTIVE HUNTING", desc: "I begin aggressive outreach and candidate sourcing within 24 hours." },
    { step: "03", title: "CANDIDATE VETTING", desc: "Rigorous screening process including skills assessment and background verification." },
    { step: "04", title: "INTERVIEW COORDINATION", desc: "I present only pre-qualified candidates and coordinate all interviews." },
    { step: "05", title: "PLACEMENT & GUARANTEE", desc: "Successful placement with 90-day guarantee for your peace of mind." }
  ];

  return (
    <div className="bg-white text-black font-sans">
      {/* Navigation */}
      <NeuNavbar 
        navItems={navItems}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      {/* Hero Section */}
      <section id="hero" className="h-screen flex items-center justify-center px-4 pt-20 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider mb-6 text-black"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            YOU NEED <span className="text-purple-500">TECHS</span>.<br />
            I <span className="text-red-500">HUNT</span> THEM.
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl font-bold mb-8 max-w-4xl mx-auto leading-relaxed text-black"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Stop losing business waiting on qualified HVAC technicians. I actively hunt down the talent you need.
          </motion.p>
          
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <NeuButton 
              onClick={() => scrollToSection('contact')}
              variant="primary"
              size="lg"
            >
              GET STARTED NOW
            </NeuButton>
          </motion.div>
        </div>
      </section>

      {/* About Section - Who I Recruit and How */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            WHO I RECRUIT & <span className="text-purple-500">HOW</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <NeuCard className="p-8" variant="highlight">
                <h3 className="text-3xl font-black mb-6 text-purple-500 uppercase tracking-wider">WHO I TARGET</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Certified HVAC Technicians (EPA, NATE, OSHA)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Residential & Commercial Installation Specialists</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Service Technicians with 2+ years experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Lead Technicians and Field Supervisors</span>
                  </li>
                </ul>
              </NeuCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <NeuCard className="p-8" variant="highlight">
                <h3 className="text-3xl font-black mb-6 text-red-500 uppercase tracking-wider">HOW I HUNT</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Direct headhunting from competitor companies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Exclusive trade school partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Industry network & referral systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Intensive skills verification & background checks</span>
                  </li>
                </ul>
              </NeuCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-wider text-black"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            SIMPLE PRICING. <span className="text-green-500">GUARANTEED RESULTS.</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <NeuCard className="p-8 mb-8" variant="highlight">
              <h3 className="text-4xl md:text-5xl font-black mb-4 text-green-500 uppercase tracking-wider">
                15% OF FIRST-YEAR SALARY
              </h3>
              <p className="text-xl text-black mb-8 font-bold">Only pay when I deliver qualified candidates</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <NeuCard className="p-6" variant="default" hoverable>
                    <h4 className="text-xl font-black mb-3 text-green-500 uppercase tracking-wider">20% DEPOSIT</h4>
                    <p className="text-black font-bold">To begin active candidate hunting and sourcing</p>
                  </NeuCard>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <NeuCard className="p-6" variant="default" hoverable>
                    <h4 className="text-xl font-black mb-3 text-green-500 uppercase tracking-wider">80% ON HIRE</h4>
                    <p className="text-black font-bold">Remaining balance upon successful placement</p>
                  </NeuCard>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <NeuCard className="p-6" variant="default" hoverable>
                    <h4 className="text-xl font-black mb-3 text-green-500 uppercase tracking-wider">90-DAY GUARANTEE</h4>
                    <p className="text-black font-bold">Free replacement if hire doesn&apos;t work out</p>
                  </NeuCard>
                </motion.div>
              </div>
            </NeuCard>
          </motion.div>
        </div>
      </section>

      {/* Timeline - How It Works */}
      <section id="timeline" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            HOW IT <span className="text-purple-500">WORKS</span>
          </motion.h2>
          
          <NeuTimeline items={timelineItems} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-wider text-black"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            READY TO <span className="text-purple-500">HUNT</span> TECHS?
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-black font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let&apos;s discuss your HVAC staffing needs and get started immediately.
          </motion.p>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
          </motion.div>
          
          <motion.p 
            className="text-purple-500 font-black text-lg uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href="mailto:yeshaya@hvacrecruiter.co"
              className="hover:underline focus:underline outline-none transition-colors duration-200"
              aria-label="Send email to yeshaya@hvacrecruiter.co"
            >
              yeshaya@hvacrecruiter.co
            </a>
          </motion.p>
        </div>
      </section>

      {/* Footer with Yeshaya Section */}
      <footer className="py-16 px-4 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-8 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-48 h-48 border-4 border-black shadow-[6px_6px_0px_black] overflow-hidden flex-shrink-0">
              <Image
                src="/headshot.webp"
                alt="Yeshaya - HVAC Tech Hunter"
                width={192}
                height={192}
                className="w-full h-full object-cover object-[30%_center]"
              />
            </div>
            <NeuCard className="flex-1 p-8" variant="highlight">
              <h3 className="text-3xl font-black mb-4 text-purple-500 uppercase tracking-wider">YESHAYA</h3>
              <p className="text-lg text-black leading-relaxed mb-4 font-bold">
                I am an expert recruiter and marketer. I started in HVAC marketing (which I still do) but I use the same tactics for recruiting to hunt the perfect people. 
                While other recruiters post job ads and wait, I actively hunt down the talent your business needs.
              </p>
              <p className="text-lg font-black text-black uppercase tracking-wider">
                YOUR TECH SHORTAGE ENDS HERE.
              </p>
            </NeuCard>
          </motion.div>
          
          <div className="text-center border-t-4 border-black pt-8">
            <p className="text-black font-bold uppercase tracking-wider">
              © 2025 YESHAYA.DEV LLC. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
