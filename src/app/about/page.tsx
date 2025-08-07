'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import NeuButton from '../components/NeuButton';
import NeuCard from '../components/NeuCard';
import NeuNavbar from '../components/NeuNavbar';

export default function About() {
  useEffect(() => {
    document.title = "About Yeshaya | Expert HVAC Recruiter & Talent Hunter";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Yeshaya, professional HVAC recruiter who actively hunts down qualified technicians. Expert in HVAC marketing turned recruiting specialist.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Learn about Yeshaya, professional HVAC recruiter who actively hunts down qualified technicians. Expert in HVAC marketing turned recruiting specialist.';
      document.head.appendChild(meta);
    }
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME', href: '/' },
    { id: 'about', label: 'ABOUT', href: '/about' },
    { id: 'locations', label: 'LOCATIONS', href: '/locations' },
    { id: 'contact', label: 'CONTACT', href: '/contact' },
  ];

  return (
    <div className="bg-white text-black font-sans">
      {/* Navigation */}
      <NeuNavbar navItems={navItems} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider mb-8 text-center text-black"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            ABOUT <span className="text-purple-500">YESHAYA</span>
          </motion.h1>
          
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-12 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-64 h-64 border-4 border-black shadow-[8px_8px_0px_black] overflow-hidden flex-shrink-0">
              <Image
                src="/headshot.webp"
                alt="Yeshaya - HVAC Tech Hunter"
                width={256}
                height={256}
                className="w-full h-full object-cover object-[30%_center]"
              />
            </div>
            <div className="flex-1">
              <NeuCard className="p-8" variant="highlight">
                <h2 className="text-3xl font-black mb-6 text-purple-500 uppercase tracking-wider">THE HVAC TECH HUNTER</h2>
                <p className="text-lg text-black leading-relaxed mb-6 font-bold">
                  I&apos;m Yeshaya, and I specialize in one thing: hunting down the best HVAC technicians for growing companies. 
                  While other recruiters post job ads and hope for the best, I actively hunt the talent your business needs.
                </p>
                <p className="text-lg text-black leading-relaxed font-bold">
                  My approach is different. I don&apos;t wait for candidates to come to me - I go out and find them where they are, 
                  convince them to make a move, and deliver them to your doorstep ready to work.
                </p>
              </NeuCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            MY <span className="text-red-500">EXPERTISE</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <NeuCard className="p-8" variant="highlight">
                <h3 className="text-3xl font-black mb-6 text-purple-500 uppercase tracking-wider">HVAC MARKETING BACKGROUND</h3>
                <p className="text-lg text-black leading-relaxed mb-4 font-bold">
                  I started in HVAC marketing, helping companies attract customers. This gave me deep insight into the industry, 
                  its challenges, and what makes HVAC businesses successful.
                </p>
                <p className="text-lg text-black leading-relaxed font-bold">
                  I understand the seasonal pressures, the skill shortages, and the critical importance of having reliable technicians.
                </p>
              </NeuCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <NeuCard className="p-8" variant="highlight">
                <h3 className="text-3xl font-black mb-6 text-red-500 uppercase tracking-wider">AGGRESSIVE RECRUITING TACTICS</h3>
                <p className="text-lg text-black leading-relaxed mb-4 font-bold">
                  I use the same aggressive marketing tactics for recruiting. Direct outreach, compelling messaging, 
                  and relentless follow-up to secure the best candidates.
                </p>
                <p className="text-lg text-black leading-relaxed font-bold">
                  I don&apos;t rely on job boards - I hunt down passive candidates who aren&apos;t even looking for jobs.
                </p>
              </NeuCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            PROVEN <span className="text-green-500">RESULTS</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <NeuCard className="p-8 text-center" variant="highlight">
                <h3 className="text-4xl font-black mb-4 text-green-500">14 DAYS</h3>
                <p className="text-lg font-bold text-black uppercase tracking-wider">Average Time to Present Candidates</p>
              </NeuCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <NeuCard className="p-8 text-center" variant="highlight">
                <h3 className="text-4xl font-black mb-4 text-green-500">95%</h3>
                <p className="text-lg font-bold text-black uppercase tracking-wider">Client Satisfaction Rate</p>
              </NeuCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <NeuCard className="p-8 text-center" variant="highlight">
                <h3 className="text-4xl font-black mb-4 text-green-500">90 DAY</h3>
                <p className="text-lg font-bold text-black uppercase tracking-wider">Placement Guarantee</p>
              </NeuCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            WHY CHOOSE <span className="text-purple-500">ME</span>?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "INDUSTRY KNOWLEDGE",
                description: "Deep understanding of HVAC industry needs, seasonal demands, and technical requirements.",
                color: "purple-500"
              },
              {
                title: "AGGRESSIVE HUNTING",
                description: "I don't wait for candidates to find me. I actively hunt and pursue the best talent.",
                color: "red-500"
              },
              {
                title: "PROVEN PROCESS",
                description: "Systematic approach to vetting, qualifying, and presenting only the best candidates.",
                color: "green-500"
              },
              {
                title: "FAST RESULTS",
                description: "Active sourcing begins within 24 hours. First candidates presented within 2 weeks.",
                color: "purple-500"
              },
              {
                title: "QUALITY GUARANTEE",
                description: "90-day guarantee ensures you get candidates who stick and perform.",
                color: "red-500"
              },
              {
                title: "NO SURPRISES",
                description: "Transparent pricing, clear process, and regular communication throughout.",
                color: "green-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <NeuCard className="p-6 h-full" variant="default" hoverable>
                  <h3 className={`text-xl font-black mb-4 text-${item.color} uppercase tracking-wider`}>
                    {item.title}
                  </h3>
                  <p className="text-black font-bold">
                    {item.description}
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
            READY TO <span className="text-purple-500">START</span>?
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
            <NeuButton 
              onClick={() => window.location.href = '/contact'}
              variant="primary"
              size="lg"
            >
              GET STARTED NOW
            </NeuButton>
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
