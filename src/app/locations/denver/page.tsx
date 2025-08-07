'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import NeuButton from '../../components/NeuButton';
import NeuCard from '../../components/NeuCard';
import NeuNavbar from '../../components/NeuNavbar';

export default function Denver() {
  useEffect(() => {
    document.title = "HVAC Recruiter Denver | Colorado HVAC Technician Recruitment";
    const meta=document.querySelector('meta[name="description"]');
    const content='Expert HVAC recruiting in Denver, Colorado. High-altitude specialists for heating, energy-efficiency, and ski-resort commercial projects.';
    if(meta) meta.setAttribute('content',content); else {const m=document.createElement('meta');m.name='description';m.content=content;document.head.appendChild(m);}  
  }, []);

  const navItems=[{id:'home',label:'HOME',href:'/'},{id:'about',label:'ABOUT',href:'/about'},{id:'locations',label:'LOCATIONS',href:'/locations'},{id:'contact',label:'CONTACT',href:'/contact'}];
  const serviceAreas=['Denver','Aurora','Lakewood','Littleton','Boulder','Golden','Arvada','Thornton','Westminster','Broomfield'];
  const specialties=[{title:'HIGH-ALTITUDE HEATING',description:'Boilers, furnaces & radiant systems for thin-air efficiency.',demand:'CRITICAL DEMAND'},{title:'ENERGY EFFICIENT RETROFITS',description:'IECC & Xcel rebate–qualified upgrades.',demand:'HIGH DEMAND'},{title:'SKI RESORT COMMERCIAL',description:'Large-scale HVAC for lodges & mountain facilities.',demand:'STEADY DEMAND'},{title:'AIR QUALITY SOLUTIONS',description:'Combating wildfire smoke & dry air humidification.',demand:'GROWING DEMAND'}];

  return (<div className="bg-white text-black font-sans"><NeuNavbar navItems={navItems}/>
    <section className="pt-32 pb-20 px-4 bg-gray-100 text-center"><div className="max-w-6xl mx-auto"><motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase mb-8" initial={{scale:0.5,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:1}}>HVAC RECRUITER <span className="text-purple-500">DENVER</span></motion.h1><motion.p className="text-lg md:text-xl lg:text-2xl font-bold mb-12 max-w-4xl mx-auto" initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.8,delay:0.3}}>Rocky-Mountain tested HVAC professionals for Colorado’s extreme winters and altitude challenges.</motion.p><NeuButton variant="primary" size="lg" onClick={()=>window.location.href='mailto:yeshaya@hvacrecruiter.co?subject=Denver HVAC Recruiting Inquiry'}>START HUNTING DENVER TECHS</NeuButton></div></section>
    <section className="py-20 px-4 bg-white"><div className="max-w-6xl mx-auto"><motion.h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-16" initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true}}>DENVER <span className="text-purple-500">SPECIALTIES</span></motion.h2><div className="grid lg:grid-cols-2 gap-8">{specialties.map((s,i)=>(<motion.div key={i} initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.6,delay:i*0.2}} viewport={{once:true}}><NeuCard className="p-8 h-full" variant="default" hoverable><div className="flex justify-between mb-4"><h3 className="text-2xl font-black text-purple-500 uppercase flex-1">{s.title}</h3><span className="text-sm font-black text-red-500 uppercase bg-red-100 px-3 py-1 border-2 border-black">{s.demand}</span></div><p className="font-bold">{s.description}</p></NeuCard></motion.div>))}</div></div></section>
    <section className="py-20 px-4 bg-gray-100"><div className="max-w-6xl mx-auto text-center"><motion.h2 className="text-4xl md:text-6xl font-black uppercase mb-16" initial={{opacity:0,scale:0.8}} whileInView={{opacity:1,scale:1}} transition={{duration:0.8}} viewport={{once:true}}>SERVICE <span className="text-green-500">AREAS</span></motion.h2><NeuCard className="p-8" variant="highlight"><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">{serviceAreas.map((a,i)=>(<div key={i} className="flex items-start"><span className="text-green-500 mr-3 font-black text-xl">▶</span><span className="font-bold">{a}</span></div>))}</div></NeuCard></div></section>
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-black uppercase mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          DENVER MARKET <span className="text-green-500">DATA</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { stat: '$55K-$85K', label: 'Avg Tech Salary', note: 'Altitude specialists higher' },
            { stat: '18%', label: 'Job Growth', note: '5-year projection' },
            { stat: '1,000+', label: 'Open Positions', note: 'Across Front Range' }
          ].map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <NeuCard className="p-8 text-center" variant="highlight">
                <h3 className="text-4xl font-black mb-4 text-green-500">{d.stat}</h3>
                <p className="text-lg font-bold uppercase mb-2">{d.label}</p>
                <p className="text-sm font-bold text-purple-500">{d.note}</p>
              </NeuCard>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-gray-500 text-center mt-6">
          * Market data is approximate and for informational purposes only. Actual figures may vary.
        </p>
      </div>
    </section>
    <section className="py-20 px-4 bg-gray-100 text-center"><motion.h2 className="text-4xl md:text-6xl font-black uppercase mb-8" initial={{opacity:0,scale:0.8}} whileInView={{opacity:1,scale:1}} transition={{duration:0.8}} viewport={{once:true}}>CONQUER <span className="text-purple-500">COLORADO COLD</span></motion.h2><NeuButton variant="primary" size="lg" onClick={()=>window.location.href='mailto:yeshaya@hvacrecruiter.co?subject=Denver HVAC Recruiting - Ready to Start'}>START HUNTING DENVER TECHS NOW</NeuButton></section>
    <footer className="py-16 px-4 bg-white border-t-4 border-black text-center"><p className="font-bold uppercase tracking-wider">© 2025 YESHAYA.DEV LLC. ALL RIGHTS RESERVED.</p></footer>
  </div>);
}
