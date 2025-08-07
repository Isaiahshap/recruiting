'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import NeuButton from '../../components/NeuButton';
import NeuCard from '../../components/NeuCard';
import NeuNavbar from '../../components/NeuNavbar';

export default function Asheville() {
  useEffect(() => {
    document.title = "HVAC Recruiter Asheville | North Carolina HVAC Technician Recruitment";
    const meta = document.querySelector('meta[name="description"]');
    const content = 'Expert HVAC recruiting in Asheville, North Carolina. Mountain climate specialists for heat pumps, green energy systems, and hospitality projects.';
    if (meta) {
      meta.setAttribute('content', content);
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME', href: '/' },
    { id: 'about', label: 'ABOUT', href: '/about' },
    { id: 'locations', label: 'LOCATIONS', href: '/locations' },
    { id: 'contact', label: 'CONTACT', href: '/contact' },
  ];

  const serviceAreas = [
    'Asheville', 'Hendersonville', 'Waynesville', 'Black Mountain',
    'Arden', 'Fletcher', 'Weaverville', 'Swannanoa', 'Brevard', 'Canton'
  ];

  const specialties = [
    {
      title: 'MOUNTAIN HEAT PUMP SYSTEMS',
      description: 'High-efficiency heat pumps designed for Appalachian temperature swings.',
      demand: 'HIGH DEMAND'
    },
    {
      title: 'GREEN ENERGY RETROFITS',
      description: 'Geothermal & solar-assisted HVAC installs for eco-conscious clientele.',
      demand: 'GROWING DEMAND'
    },
    {
      title: 'HOSPITALITY & BREWERY HVAC',
      description: 'Craft breweries, hotels, and restaurants throughout Asheville’s tourism sector.',
      demand: 'STEADY DEMAND'
    },
    {
      title: 'EMERGENCY SERVICE TECHS',
      description: '24/7 technicians for mountain communities and remote properties.',
      demand: 'CRITICAL DEMAND'
    }
  ];

  const certifications = [
    'EPA Section 608',
    'NATE Heat Pump Certification',
    'OSHA 10 Hour',
    'North Carolina H3 Class I License',
    'Green Building (LEED) Accreditation'
  ];

  return (
    <div className="bg-white text-black font-sans">
      <NeuNavbar navItems={navItems} />

      <section className="pt-32 pb-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider mb-8 text-black" initial={{ scale:0.5, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:1 }}>
            HVAC RECRUITER <span className="text-purple-500">ASHEVILLE</span>
          </motion.h1>
          <motion.p className="text-lg md:text-xl lg:text-2xl font-bold mb-12 max-w-4xl mx-auto leading-relaxed text-black" initial={{ x:-100, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.8, delay:0.3 }}>
            From eco-friendly cabins to luxury resorts, I hunt top HVAC talent who understand Asheville’s unique mountain climate.
          </motion.p>
          <motion.div initial={{ y:100, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ duration:0.8, delay:0.6 }}>
            <NeuButton onClick={() => window.location.href='mailto:yeshaya@hvacrecruiter.co?subject=Asheville HVAC Recruiting Inquiry'} variant="primary" size="lg">
              START HUNTING ASHEVILLE TECHS
            </NeuButton>
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black" initial={{ opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.8 }} viewport={{ once:true }}>
            SERVICE <span className="text-green-500">AREAS</span>
          </motion.h2>
          <NeuCard className="p-8" variant="highlight">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceAreas.map((area, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-green-500 mr-3 font-black text-xl">▶</span>
                  <span className="font-bold text-black">{area}</span>
                </div>
              ))}
            </div>
          </NeuCard>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black" initial={{ opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.8 }} viewport={{ once:true }}>
            ASHEVILLE <span className="text-purple-500">SPECIALTIES</span>
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {specialties.map((spec, idx)=> (
              <motion.div key={idx} initial={{ opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.6, delay: idx*0.2 }} viewport={{ once:true }}>
                <NeuCard className="p-8 h-full" variant="default" hoverable>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black text-purple-500 uppercase tracking-wider flex-1">{spec.title}</h3>
                    <span className="text-sm font-black text-red-500 uppercase tracking-wider bg-red-100 px-3 py-1 border-2 border-black">{spec.demand}</span>
                  </div>
                  <p className="text-black font-bold">{spec.description}</p>
                </NeuCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black" initial={{ opacity:0, scale:0.8}} whileInView={{ opacity:1, scale:1}} transition={{ duration:0.8}} viewport={{ once:true}}>
            NC <span className="text-red-500">CERTIFICATIONS</span>
          </motion.h2>
          <NeuCard className="p-8" variant="highlight">
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert,idx)=>(
                <div key={idx} className="flex items-start">
                  <span className="text-red-500 mr-3 font-black text-xl">▶</span>
                  <span className="font-bold text-black">{cert}</span>
                </div>
              ))}
            </div>
          </NeuCard>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black" initial={{ opacity:0, y:50}} whileInView={{ opacity:1, y:0}} transition={{ duration:0.8}} viewport={{ once:true}}>
            ASHEVILLE MARKET <span className="text-green-500">DATA</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '$45K-$70K', label:'Avg HVAC Tech Salary', note:'Heat-pump specialists higher' },
              { stat: '15%', label:'Job Growth (5yr)', note:'Sustainable construction boom' },
              { stat: '600+', label:'Open Positions', note:'Across WNC region' }
            ].map((item,idx)=>(
              <motion.div key={idx} initial={{ opacity:0, y:50}} whileInView={{ opacity:1, y:0}} transition={{ duration:0.6, delay: idx*0.2}} viewport={{ once:true}}>
                <NeuCard className="p-8 text-center" variant="highlight">
                  <h3 className="text-4xl font-black mb-4 text-green-500">{item.stat}</h3>
                  <p className="text-lg font-bold text-black uppercase tracking-wider mb-2">{item.label}</p>
                  <p className="text-sm font-bold text-purple-500">{item.note}</p>
                </NeuCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-100 text-center">
        <motion.h2 className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-wider text-black" initial={{ opacity:0, scale:0.8}} whileInView={{ opacity:1, scale:1}} transition={{ duration:0.8}} viewport={{ once:true}}>
          DOMINATE <span className="text-purple-500">WNC</span>
        </motion.h2>
        <NeuButton onClick={()=>window.location.href='mailto:yeshaya@hvacrecruiter.co?subject=Asheville HVAC Recruiting - Ready to Start'} variant="primary" size="lg">START HUNTING ASHEVILLE TECHS NOW</NeuButton>
      </section>

      <footer className="py-16 px-4 bg-white border-t-4 border-black text-center">
        <p className="text-black font-bold uppercase tracking-wider">© 2025 YESHAYA.DEV LLC. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
