'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import NeuButton from '../../components/NeuButton';
import NeuCard from '../../components/NeuCard';
import NeuNavbar from '../../components/NeuNavbar';

export default function Chicago() {
  useEffect(() => {
    document.title = "HVAC Recruiter Chicago | Illinois HVAC Technician Recruitment";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert HVAC recruiting in Chicago, Illinois. Find certified HVAC technicians for commercial and residential projects in the Windy City metro area.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Expert HVAC recruiting in Chicago, Illinois. Find certified HVAC technicians for commercial and residential projects in the Windy City metro area.';
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
    "Chicago City", "Naperville", "Aurora", "Rockford",
    "Joliet", "Elgin", "Peoria", "Waukegan",
    "Cicero", "Champaign", "Bloomington", "Arlington Heights"
  ];

  const certifications = [
    "EPA Section 608 Certification",
    "NATE Certification",
    "OSHA 10/30 Hour Training",
    "Illinois HVAC License",
    "City of Chicago Mechanical License",
    "Refrigeration Recovery Certification"
  ];

  const specialties = [
    {
      title: "COMMERCIAL HIGH-RISES",
      description: "Downtown Chicago skyscrapers and large commercial buildings with complex HVAC systems.",
      demand: "HIGH DEMAND"
    },
    {
      title: "WINTER HEATING SPECIALISTS",
      description: "Experts in heating systems for harsh Chicago winters and emergency heating repairs.",
      demand: "CRITICAL DEMAND"
    },
    {
      title: "INDUSTRIAL HVAC",
      description: "Manufacturing and warehouse facilities throughout the greater Chicago area.",
      demand: "STEADY DEMAND"
    },
    {
      title: "RESIDENTIAL SERVICE",
      description: "Single-family homes and apartment complexes across Chicago suburbs.",
      demand: "GROWING DEMAND"
    }
  ];

  return (
    <div className="bg-white text-black font-sans">
      <NeuNavbar navItems={navItems} />

      <section className="pt-32 pb-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider mb-8 text-black"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            HVAC RECRUITER <span className="text-purple-500">CHICAGO</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl font-bold mb-12 max-w-4xl mx-auto leading-relaxed text-black"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Professional HVAC recruiting for the Windy City. From downtown skyscrapers to suburban homes, 
            I hunt down the certified technicians your Chicago business needs.
          </motion.p>
          
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <NeuButton 
              onClick={() => window.location.href = 'mailto:yeshaya@hvacrecruiter.co?subject=Chicago HVAC Recruiting Inquiry&body=Hi Yeshaya,%0D%0A%0D%0AI need qualified HVAC technicians in the Chicago area.%0D%0A%0D%0ACompany:%0D%0ALocation:%0D%0APositions needed:%0D%0AUrgency:%0D%0ASalary range:%0D%0A%0D%0AThanks!'}
              variant="primary"
              size="lg"
            >
              START HUNTING CHICAGO TECHS
            </NeuButton>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            CHICAGO HVAC <span className="text-red-500">MARKET</span>
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
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
                    <span className="font-bold">Extreme weather demands reliable heating systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">High-rise buildings require specialized skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Competition from construction boom</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Union vs non-union market dynamics</span>
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
                    <span className="font-bold">Target skilled technicians from suburbs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Recruit from trade schools in metro area</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Aggressive outreach to passive candidates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Navigate union and licensing requirements</span>
                  </li>
                </ul>
              </NeuCard>
            </motion.div>
          </div>
        </div>
      </section>

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
                CHICAGOLAND COVERAGE
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            CHICAGO <span className="text-purple-500">SPECIALTIES</span>
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

      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            ILLINOIS <span className="text-red-500">CERTIFICATIONS</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <NeuCard className="p-8" variant="highlight">
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
            </NeuCard>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            CHICAGO MARKET <span className="text-green-500">DATA</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "$55K-$80K",
                label: "Average HVAC Tech Salary Range",
                note: "Higher for commercial specialists"
              },
              {
                stat: "16%",
                label: "Job Growth Rate (Next 5 Years)",
                note: "Driven by infrastructure needs"
              },
              {
                stat: "2,400+",
                label: "Open HVAC Positions",
                note: "Across Chicagoland area"
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

      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-wider text-black"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            DOMINATE <span className="text-purple-500">CHICAGO</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-black font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Chicago&apos;s HVAC market is competitive. Don&apos;t let your competitors steal the best technicians while you wait.
          </motion.p>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <NeuButton 
              onClick={() => window.location.href = 'mailto:yeshaya@hvacrecruiter.co?subject=Chicago HVAC Recruiting - Ready to Start&body=Hi Yeshaya,%0D%0A%0D%0AI need qualified HVAC technicians in Chicago ASAP.%0D%0A%0D%0ACompany:%0D%0ALocation:%0D%0APositions needed:%0D%0AUrgency:%0D%0ASalary range:%0D%0A%0D%0ALet%27s get started!'}
              variant="primary"
              size="lg"
            >
              START HUNTING CHICAGO TECHS NOW
            </NeuButton>
          </motion.div>
        </div>
      </section>

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
