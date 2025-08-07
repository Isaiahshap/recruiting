'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import NeuButton from '../../components/NeuButton';
import NeuCard from '../../components/NeuCard';
import NeuNavbar from '../../components/NeuNavbar';

export default function LosAngeles() {
  useEffect(() => {
    document.title = "HVAC Recruiter Los Angeles | Southern California HVAC Technician Recruitment";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert HVAC recruiting in Los Angeles, Orange County, Beverly Hills, Santa Monica. Find certified HVAC technicians for residential and commercial projects in Southern California.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Expert HVAC recruiting in Los Angeles, Orange County, Beverly Hills, Santa Monica. Find certified HVAC technicians for residential and commercial projects in Southern California.';
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
    "Los Angeles City", "Beverly Hills", "Santa Monica", "West Hollywood",
    "Orange County", "Anaheim", "Irvine", "Newport Beach",
    "San Fernando Valley", "Burbank", "Glendale", "Pasadena",
    "Inland Empire", "Riverside", "San Bernardino", "Pomona"
  ];

  const certifications = [
    "EPA Section 608 Certification",
    "NATE Certification", 
    "OSHA 10/30 Hour Training",
    "California HVAC/R License (C-20)",
    "Title 24 Energy Efficiency Training",
    "CARB Refrigerant Recovery Certification"
  ];

  const specialties = [
    {
      title: "RESIDENTIAL INSTALLATIONS",
      description: "High-end residential installs in Beverly Hills, Santa Monica, and affluent neighborhoods.",
      demand: "HIGH DEMAND"
    },
    {
      title: "COMMERCIAL ROOFTOP UNITS",
      description: "Shopping centers, office buildings, and retail spaces throughout LA and Orange County.",
      demand: "STEADY DEMAND"
    },
    {
      title: "ENERGY EFFICIENCY SPECIALISTS",
      description: "Title 24 compliant systems, solar integration, and green building certifications.",
      demand: "GROWING DEMAND"
    },
    {
      title: "MAINTENANCE TECHNICIANS",
      description: "Preventive maintenance for commercial properties and high-end residential accounts.",
      demand: "CONSISTENT DEMAND"
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
            HVAC RECRUITER <span className="text-purple-500">LOS ANGELES</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl font-bold mb-12 max-w-4xl mx-auto leading-relaxed text-black"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Professional HVAC recruiting for Southern California. From Beverly Hills mansions to Orange County commercial projects, 
            I hunt down the certified technicians your business needs.
          </motion.p>
          
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <NeuButton 
              onClick={() => window.location.href = 'mailto:yeshaya@hvacrecruiter.co?subject=LA HVAC Recruiting Inquiry&body=Hi Yeshaya,%0D%0A%0D%0AI need qualified HVAC technicians in the Los Angeles area.%0D%0A%0D%0ACompany:%0D%0ALocation:%0D%0APositions needed:%0D%0AUrgency:%0D%0ASalary range:%0D%0A%0D%0AThanks!'}
              variant="primary"
              size="lg"
            >
              START HUNTING LA TECHS
            </NeuButton>
          </motion.div>
        </div>
      </section>

      {/* LA Market Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            LA HVAC <span className="text-red-500">MARKET</span>
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <NeuCard className="p-8" variant="highlight">
                <h3 className="text-3xl font-black mb-6 text-purple-500 uppercase tracking-wider">MARKET OPPORTUNITIES</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Year-round HVAC demand due to climate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">High-end residential market with premium pricing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Growing focus on energy efficiency and green tech</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Expanding commercial development in OC</span>
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
                <h3 className="text-3xl font-black mb-6 text-red-500 uppercase tracking-wider">RECRUITMENT STRATEGY</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Target trade schools in LA and Orange County</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Recruit from Inland Empire for competitive rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Focus on bilingual technicians for diverse market</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-black text-2xl">▶</span>
                    <span className="font-bold">Leverage green tech training programs</span>
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
                SOUTHERN CALIFORNIA COVERAGE
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
            LA <span className="text-purple-500">SPECIALTIES</span>
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

      {/* Climate Focus */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            CALIFORNIA <span className="text-green-500">CLIMATE FOCUS</span>
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <NeuCard className="p-8" variant="highlight">
                <h3 className="text-3xl font-black mb-6 text-green-500 uppercase tracking-wider">ENERGY EFFICIENCY</h3>
                <p className="text-lg text-black leading-relaxed mb-6 font-bold">
                  California&apos;s strict energy efficiency requirements create demand for technicians skilled in:
                </p>
                <ul className="space-y-3">
                  {[
                    "Title 24 compliant installations",
                    "High-efficiency heat pump systems",
                    "Solar HVAC integration",
                    "Smart thermostat programming",
                    "Energy auditing and optimization"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-3 font-black text-xl">▶</span>
                      <span className="font-bold text-black">{item}</span>
                    </li>
                  ))}
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
                <h3 className="text-3xl font-black mb-6 text-purple-500 uppercase tracking-wider">YEAR-ROUND DEMAND</h3>
                <p className="text-lg text-black leading-relaxed mb-6 font-bold">
                  LA&apos;s Mediterranean climate means consistent HVAC work:
                </p>
                <ul className="space-y-3">
                  {[
                    "Cooling systems maintenance year-round",
                    "Air quality systems for wildfire season",
                    "Humidity control for coastal areas",
                    "Preventive maintenance schedules",
                    "Emergency repair services"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-500 mr-3 font-black text-xl">▶</span>
                      <span className="font-bold text-black">{item}</span>
                    </li>
                  ))}
                </ul>
              </NeuCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            CA <span className="text-red-500">CERTIFICATIONS</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <NeuCard className="p-8" variant="highlight">
              <h3 className="text-3xl font-black mb-6 text-red-500 uppercase tracking-wider text-center">
                CALIFORNIA LICENSING REQUIREMENTS
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
                  <span className="font-black uppercase">Note:</span> I help candidates navigate California&apos;s licensing process and Title 24 requirements.
                </p>
              </div>
            </NeuCard>
          </motion.div>
        </div>
      </section>

      {/* Local Stats */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            LA MARKET <span className="text-green-500">DATA</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "$60K-$85K",
                label: "Average HVAC Tech Salary Range",
                note: "Higher in Beverly Hills/Santa Monica"
              },
              {
                stat: "22%",
                label: "Job Growth Rate (Next 5 Years)",
                note: "Driven by construction boom"
              },
              {
                stat: "2,800+",
                label: "Open HVAC Positions",
                note: "Across Greater LA area"
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-wider text-black"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            DOMINATE <span className="text-purple-500">SOCAL</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-black font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Southern California&apos;s HVAC market is booming. Don&apos;t miss out on qualified technicians while your competitors snatch them up.
          </motion.p>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <NeuButton 
              onClick={() => window.location.href = 'mailto:yeshaya@hvacrecruiter.co?subject=LA HVAC Recruiting - Ready to Start&body=Hi Yeshaya,%0D%0A%0D%0AI need qualified HVAC technicians in Los Angeles ASAP.%0D%0A%0D%0ACompany:%0D%0ALocation:%0D%0APositions needed:%0D%0AUrgency:%0D%0ASalary range:%0D%0A%0D%0ALet%27s get started!'}
              variant="primary"
              size="lg"
            >
              START HUNTING LA TECHS NOW
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
      <footer className="py-16 px-4 bg-gray-100 border-t-4 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-black font-bold uppercase tracking-wider">
            © 2025 YESHAYA.DEV LLC. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
