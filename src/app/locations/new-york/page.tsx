'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import NeuButton from '../../components/NeuButton';
import NeuCard from '../../components/NeuCard';
import NeuNavbar from '../../components/NeuNavbar';

export default function NewYork() {
  useEffect(() => {
    document.title = "HVAC Recruiter New York | NYC Metro Area HVAC Technician Recruitment";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert HVAC recruiting in NYC, Brooklyn, Queens, Bronx, Manhattan, Long Island. Find certified HVAC technicians for commercial and residential projects in New York.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Expert HVAC recruiting in NYC, Brooklyn, Queens, Bronx, Manhattan, Long Island. Find certified HVAC technicians for commercial and residential projects in New York.';
      document.head.appendChild(meta);
    }
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME', href: '/' },
    { id: 'about', label: 'ABOUT', href: '/about' },
    { id: 'locations', label: 'LOCATIONS', href: '/locations' },
    { id: 'contact', label: 'CONTACT', href: '/contact' },
  ];

  const serviceAreas = [
    "Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island",
    "Long Island", "Westchester County", "Nassau County", "Suffolk County",
    "New Jersey (NYC Metro)", "Connecticut (Fairfield County)"
  ];

  const certifications = [
    "EPA Section 608 Certification",
    "NATE Certification",
    "OSHA 10/30 Hour Training",
    "NYC DEP Refrigeration Machine Operator License",
    "ConEd Steam Fitting License",
    "NYC DOB Licenses"
  ];

  const specialties = [
    {
      title: "COMMERCIAL HIGH-RISE HVAC",
      description: "Technicians experienced with large commercial buildings, rooftop units, and complex building automation systems.",
      demand: "HIGH DEMAND"
    },
    {
      title: "RESIDENTIAL APARTMENTS",
      description: "Specialists in apartment building HVAC systems, window units, and tenant relations.",
      demand: "STEADY DEMAND"
    },
    {
      title: "EMERGENCY SERVICE TECHS",
      description: "24/7 emergency service technicians for critical commercial and residential accounts.",
      demand: "URGENT DEMAND"
    },
    {
      title: "INSTALLATION SPECIALISTS",
      description: "Experts in new construction and replacement installations in the NYC market.",
      demand: "GROWING DEMAND"
    }
  ];

  return (
    <div className="bg-white text-black font-sans">
      {/* Navigation */}
      <NeuNavbar navItems={navItems} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider mb-8 text-black"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            HVAC RECRUITER <span className="text-purple-500">NEW YORK</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl font-bold mb-12 max-w-4xl mx-auto leading-relaxed text-black"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Professional HVAC recruiting for the NYC Metro Area. From Manhattan high-rises to Long Island homes, 
            I hunt down the certified technicians your business needs.
          </motion.p>
          
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <NeuButton 
              onClick={() => window.location.href = 'mailto:yeshaya@hvacrecruiter.co?subject=NYC HVAC Recruiting Inquiry&body=Hi Yeshaya,%0D%0A%0D%0AI need qualified HVAC technicians in the NYC area.%0D%0A%0D%0ACompany:%0D%0ALocation:%0D%0APositions needed:%0D%0AUrgency:%0D%0ASalary range:%0D%0A%0D%0AThanks!'}
              variant="primary"
              size="lg"
            >
              START HUNTING NYC TECHS
            </NeuButton>
          </motion.div>
        </div>
      </section>

      {/* NYC Market Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            NYC HVAC <span className="text-red-500">MARKET</span>
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <NeuCard className="p-8" variant="highlight">
                <h3 className="text-3xl font-black mb-6 text-purple-500 uppercase tracking-wider">MARKET CHALLENGES</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Severe technician shortage across all boroughs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">High cost of living driving talent to suburbs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Complex licensing requirements deterring candidates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Competition from construction and electrical trades</span>
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
                <h3 className="text-3xl font-black mb-6 text-red-500 uppercase tracking-wider">MY SOLUTIONS</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Target technicians in outer boroughs & suburbs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Recruit from trade schools in Queens & Brooklyn</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Poach talent from competitors with better offers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Help candidates navigate NYC licensing process</span>
                  </li>
                </ul>
              </NeuCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            SERVICE <span className="text-green-500">AREAS</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <NeuCard className="p-8" variant="highlight">
              <h3 className="text-3xl font-black mb-6 text-green-500 uppercase tracking-wider text-center">
                NYC METRO COVERAGE
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {serviceAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <span className="text-green-500 mr-3 font-black text-xl">▶</span>
                    <span className="font-bold text-black">{area}</span>
                  </motion.div>
                ))}
              </div>
            </NeuCard>
          </motion.div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            NYC <span className="text-purple-500">SPECIALTIES</span>
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <NeuCard className="p-8 h-full" variant="default" hoverable>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black text-purple-500 uppercase tracking-wider flex-1">
                      {specialty.title}
                    </h3>
                    <span className="text-sm font-black text-red-500 uppercase tracking-wider bg-red-100 px-3 py-1 border-2 border-black">
                      {specialty.demand}
                    </span>
                  </div>
                  <p className="text-black font-bold">
                    {specialty.description}
                  </p>
                </NeuCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            NYC <span className="text-red-500">CERTIFICATIONS</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <NeuCard className="p-8" variant="highlight">
              <h3 className="text-3xl font-black mb-6 text-red-500 uppercase tracking-wider text-center">
                REQUIRED & PREFERRED CERTIFICATIONS
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="text-red-500 mr-3 font-black text-xl">▶</span>
                    <span className="font-bold text-black">{cert}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-yellow-100 border-4 border-black">
                <p className="text-black font-bold text-center">
                  <span className="font-black uppercase">Note:</span> I help candidates obtain required NYC certifications as part of the placement process.
                </p>
              </div>
            </NeuCard>
          </motion.div>
        </div>
      </section>

      {/* Local Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            NYC MARKET <span className="text-green-500">DATA</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "$65K-$95K",
                label: "Average HVAC Tech Salary Range",
                note: "Higher in Manhattan"
              },
              {
                stat: "18%",
                label: "Job Growth Rate (Next 5 Years)",
                note: "Above national average"
              },
              {
                stat: "3,200+",
                label: "Open HVAC Positions",
                note: "Across NYC metro area"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <NeuCard className="p-8 text-center" variant="highlight">
                  <h3 className="text-4xl font-black mb-4 text-green-500">{item.stat}</h3>
                  <p className="text-lg font-bold text-black uppercase tracking-wider mb-2">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-purple-500">
                    {item.note}
                  </p>
                </NeuCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-wider text-black"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            DOMINATE THE <span className="text-purple-500">NYC</span> MARKET
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-black font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Don&apos;t let your NYC competition steal your technicians. Let me hunt down the talent you need to grow your business.
          </motion.p>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <NeuButton 
              onClick={() => window.location.href = 'mailto:yeshaya@hvacrecruiter.co?subject=NYC HVAC Recruiting - Ready to Start&body=Hi Yeshaya,%0D%0A%0D%0AI need qualified HVAC technicians in NYC ASAP.%0D%0A%0D%0ACompany:%0D%0ALocation:%0D%0APositions needed:%0D%0AUrgency:%0D%0ASalary range:%0D%0A%0D%0ALet%27s get started!'}
              variant="primary"
              size="lg"
            >
              START HUNTING NYC TECHS NOW
            </NeuButton>
            
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
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-black font-bold uppercase tracking-wider">
            © 2025 YESHAYA.DEV LLC. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
