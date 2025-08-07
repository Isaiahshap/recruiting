'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import NeuButton from '../components/NeuButton';
import NeuCard from '../components/NeuCard';
import NeuNavbar from '../components/NeuNavbar';

export default function Contact() {
  useEffect(() => {
    document.title = "Contact HVAC Recruiter | Get Qualified HVAC Technicians Fast";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Yeshaya for expert HVAC recruiting services. Get qualified HVAC technicians lined up and ready to interview. Professional HVAC talent acquisition.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Contact Yeshaya for expert HVAC recruiting services. Get qualified HVAC technicians lined up and ready to interview. Professional HVAC talent acquisition.';
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
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider mb-8 text-black"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            READY TO <span className="text-purple-500">HUNT</span> TECHS?
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl font-bold mb-12 max-w-3xl mx-auto leading-relaxed text-black"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Stop losing business waiting on qualified HVAC technicians. Let&apos;s discuss your staffing needs and get started immediately.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            GET IN <span className="text-red-500">TOUCH</span>
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <NeuCard className="p-8" variant="highlight">
                <h3 className="text-3xl font-black mb-6 text-purple-500 uppercase tracking-wider">DIRECT CONTACT</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-black mb-2 text-black uppercase tracking-wider">EMAIL</h4>
                    <a
                      href="mailto:yeshaya@hvacrecruiter.co"
                      className="text-lg font-bold text-purple-500 hover:underline focus:underline outline-none transition-colors duration-200"
                      aria-label="Send email to yeshaya@hvacrecruiter.co"
                    >
                      yeshaya@hvacrecruiter.co
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-black mb-2 text-black uppercase tracking-wider">RESPONSE TIME</h4>
                    <p className="text-lg font-bold text-black">Within 2 hours during business hours</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-black mb-2 text-black uppercase tracking-wider">BUSINESS HOURS</h4>
                    <p className="text-lg font-bold text-black">Monday - Friday: 8AM - 7PM EST</p>
                    <p className="text-lg font-bold text-black">Saturday: 9AM - 3PM EST</p>
                  </div>
                </div>
              </NeuCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <NeuCard className="p-8" variant="highlight">
                <h3 className="text-3xl font-black mb-6 text-red-500 uppercase tracking-wider">WHAT TO INCLUDE</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-black text-2xl">▶</span>
                    <div>
                      <span className="font-black text-black uppercase tracking-wider">Company Name & Location</span>
                      <p className="text-black font-bold">Help me understand your business</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-black text-2xl">▶</span>
                    <div>
                      <span className="font-black text-black uppercase tracking-wider">Positions Needed</span>
                      <p className="text-black font-bold">Installers, service techs, supervisors?</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-black text-2xl">▶</span>
                    <div>
                      <span className="font-black text-black uppercase tracking-wider">Urgency Level</span>
                      <p className="text-black font-bold">How quickly do you need candidates?</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-black text-2xl">▶</span>
                    <div>
                      <span className="font-black text-black uppercase tracking-wider">Salary Range</span>
                      <p className="text-black font-bold">Helps me target the right candidates</p>
                    </div>
                  </li>
                </ul>
              </NeuCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            WHAT HAPPENS <span className="text-green-500">NEXT</span>?
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "DISCOVERY CALL",
                description: "We discuss your needs, company culture, and ideal candidate profile.",
                timeframe: "Within 24 hours"
              },
              {
                step: "02", 
                title: "PROPOSAL & AGREEMENT",
                description: "I provide a detailed proposal and we formalize our working relationship.",
                timeframe: "1-2 business days"
              },
              {
                step: "03",
                title: "ACTIVE HUNTING BEGINS",
                description: "I start aggressive candidate sourcing and outreach immediately.",
                timeframe: "Same day"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <NeuCard className="p-6 text-center h-full" variant="default" hoverable>
                  <div className="text-4xl font-black mb-4 text-green-500">{item.step}</div>
                  <h3 className="text-xl font-black mb-4 text-black uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-black font-bold mb-4">
                    {item.description}
                  </p>
                  <p className="text-sm font-black text-purple-500 uppercase tracking-wider">
                    {item.timeframe}
                  </p>
                </NeuCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            COMMON <span className="text-purple-500">QUESTIONS</span>
          </motion.h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How much does it cost?",
                answer: "15% of the first-year salary. 20% deposit to start, 80% on successful hire. 90-day guarantee included."
              },
              {
                question: "How fast can you deliver candidates?",
                answer: "I begin hunting within 24 hours. First qualified candidates typically presented within 10-14 days."
              },
              {
                question: "What if the hire doesn't work out?",
                answer: "90-day guarantee. If they leave or don't perform, I replace them at no additional cost."
              },
              {
                question: "Do you work outside NY and LA?",
                answer: "Yes! While I specialize in NY and LA, I can recruit nationwide. Additional research time may apply."
              },
              {
                question: "What makes you different from other recruiters?",
                answer: "I actively hunt passive candidates instead of waiting for job applications. I use aggressive marketing tactics to find the best talent."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <NeuCard className="p-6" variant="default" hoverable>
                  <h3 className="text-xl font-black mb-3 text-purple-500 uppercase tracking-wider">
                    {item.question}
                  </h3>
                  <p className="text-black font-bold">
                    {item.answer}
                  </p>
                </NeuCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-wider text-black"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            STOP WAITING. <span className="text-red-500">START HUNTING.</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-black font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Every day without qualified technicians is lost revenue. Let&apos;s fix your staffing problem now.
          </motion.p>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <NeuButton 
              onClick={() => window.location.href = 'mailto:yeshaya@hvacrecruiter.co?subject=HVAC Recruiting Inquiry&body=Hi Yeshaya,%0D%0A%0D%0AI need help finding qualified HVAC technicians.%0D%0A%0D%0ACompany:%0D%0ALocation:%0D%0APositions needed:%0D%0AUrgency:%0D%0ASalary range:%0D%0A%0D%0AThanks!'}
              variant="primary"
              size="lg"
            >
              SEND EMAIL NOW
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
