'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import NeuButton from '../components/NeuButton';
import NeuCard from '../components/NeuCard';
import NeuNavbar from '../components/NeuNavbar';

export default function Locations() {
  const router = useRouter();
  
  useEffect(() => {
    document.title = "HVAC Recruiting Locations | NYC & Los Angeles HVAC Technician Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional HVAC recruiting services in New York City and Los Angeles. Local expertise in finding certified HVAC technicians across major metropolitan areas.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional HVAC recruiting services in New York City and Los Angeles. Local expertise in finding certified HVAC technicians across major metropolitan areas.';
      document.head.appendChild(meta);
    }
  }, []);
  
  const navItems = [
    { id: 'home', label: 'HOME', href: '/' },
    { id: 'about', label: 'ABOUT', href: '/about' },
    { id: 'locations', label: 'LOCATIONS', href: '/locations' },
    { id: 'contact', label: 'CONTACT', href: '/contact' },
  ];

  const locations = [
    {
      id: 'new-york',
      city: 'NEW YORK',
      state: 'NY',
      description: 'Serving NYC Metro Area, Long Island, Westchester County, and surrounding regions',
      highlights: [
        'Commercial HVAC specialists for high-rises',
        'Residential technicians for apartments & homes', 
        'Licensed EPA & NATE certified professionals',
        'Emergency service technicians'
      ],
      href: '/locations/new-york'
    },
    {
      id: 'los-angeles',
      city: 'LOS ANGELES',
      state: 'CA',
      description: 'Covering Greater LA Area, Orange County, San Fernando Valley, and Inland Empire',
      highlights: [
        'Residential HVAC installation experts',
        'Commercial rooftop unit specialists',
        'Energy-efficient system installers',
        'Maintenance & service technicians'
      ],
      href: '/locations/los-angeles'
    },
    {
      id: 'houston',
      city: 'HOUSTON',
      state: 'TX',
      description: 'Greater Houston, The Woodlands, Sugar Land, Pasadena, and surrounding Gulf Coast areas',
      highlights: [
        'Industrial petrochemical HVAC specialists',
        'Humidity control & dehumidification experts',
        'Commercial high-rise cooling technicians',
        'Residential high-efficiency AC installers'
      ],
      href: '/locations/houston'
    },
    {
      id: 'phoenix',
      city: 'PHOENIX',
      state: 'AZ',
      description: 'Phoenix Valley including Scottsdale, Tempe, Mesa, Chandler, and Glendale',
      highlights: [
        'Extreme-heat cooling technicians',
        'Commercial rooftop unit specialists',
        'Ductless mini-split installers',
        'Energy-efficient retrofit experts'
      ],
      href: '/locations/phoenix'
    },
    {
      id: 'denver',
      city: 'DENVER',
      state: 'CO',
      description: 'Front Range region: Denver, Aurora, Lakewood, Boulder, and mountain towns',
      highlights: [
        'High-altitude heating specialists',
        'Energy-efficiency retrofit experts',
        'Ski-resort commercial HVAC technicians',
        'Air-quality & humidification pros'
      ],
      href: '/locations/denver'
    },
    {
      id: 'asheville',
      city: 'ASHEVILLE',
      state: 'NC',
      description: 'Western North Carolina including Hendersonville, Waynesville, and Brevard',
      highlights: [
        'Heat-pump & green-energy installers',
        'Hospitality & brewery HVAC experts',
        'Mountain emergency service techs',
        'Eco-friendly retrofit specialists'
      ],
      href: '/locations/asheville'
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
            HVAC RECRUITING <span className="text-purple-500">LOCATIONS</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl font-bold mb-12 max-w-4xl mx-auto leading-relaxed text-black"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Professional HVAC recruiting services in major metropolitan areas. Local expertise, national quality standards.
          </motion.p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            SERVICE <span className="text-red-500">AREAS</span>
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <NeuCard className="p-8 h-full" variant="highlight" hoverable>
                  <div className="flex flex-col h-full">
                    <h3 className="text-3xl md:text-4xl font-black mb-2 text-purple-500 uppercase tracking-wider">
                      {location.city}
                    </h3>
                    <p className="text-xl font-black mb-6 text-red-500 uppercase tracking-wider">
                      {location.state}
                    </p>
                    
                    <p className="text-lg text-black leading-relaxed mb-6 font-bold">
                      {location.description}
                    </p>
                    
                    <div className="mb-8 flex-grow">
                      <h4 className="text-xl font-black mb-4 text-black uppercase tracking-wider">
                        SPECIALTIES:
                      </h4>
                      <ul className="space-y-3">
                        {location.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-3 font-black text-xl">▶</span>
                            <span className="font-bold text-black">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-auto">
                      <NeuButton 
                        onClick={() => router.push(location.href)}
                        variant="primary"
                        size="md"
                        className="w-full"
                      >
                        LEARN MORE ABOUT {location.city}
                      </NeuButton>
                    </div>
                  </div>
                </NeuCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-wider text-black"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            EXPANDING <span className="text-green-500">NATIONWIDE</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <NeuCard className="p-8 mb-8" variant="highlight">
              <p className="text-xl text-black mb-6 font-bold leading-relaxed">
                While we currently focus on New York and Los Angeles, we&apos;re rapidly expanding to serve 
                HVAC companies nationwide. Our proven recruiting methods work in any market.
              </p>
              
              <h3 className="text-2xl font-black mb-4 text-purple-500 uppercase tracking-wider">
                COMING SOON:
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 text-lg font-bold text-black">
                <div className="flex items-center">
                  <span className="text-red-500 mr-3 font-black text-xl">▶</span>
                  <span>Chicago, IL</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-500 mr-3 font-black text-xl">▶</span>
                  <span>Houston, TX</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-500 mr-3 font-black text-xl">▶</span>
                  <span>Phoenix, AZ</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-500 mr-3 font-black text-xl">▶</span>
                  <span>Miami, FL</span>
                </div>
              </div>
            </NeuCard>
          </motion.div>
          
          <motion.p 
            className="text-lg text-black mb-8 font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Don&apos;t see your city? Contact us anyway. We can help you find qualified HVAC technicians anywhere in the US.
          </motion.p>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <NeuButton 
              onClick={() => router.push('/contact')}
              variant="primary"
              size="lg"
            >
              DISCUSS YOUR LOCATION
            </NeuButton>
          </motion.div>
        </div>
      </section>

      {/* Why Local Matters Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-wider text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            WHY <span className="text-purple-500">LOCAL</span> MATTERS
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "LOCAL REGULATIONS",
                description: "Understanding state and city licensing requirements, union regulations, and local codes.",
                color: "purple-500"
              },
              {
                title: "MARKET KNOWLEDGE",
                description: "Knowledge of local competition, salary ranges, and what motivates technicians in each area.",
                color: "red-500"
              },
              {
                title: "NETWORK EFFECTS",
                description: "Established relationships with trade schools, contractors, and industry professionals.",
                color: "green-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <NeuCard className="p-8 h-full text-center" variant="default" hoverable>
                  <h3 className={`text-2xl font-black mb-4 text-${item.color} uppercase tracking-wider`}>
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
