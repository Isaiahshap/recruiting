'use client';

import { motion } from 'framer-motion';
import NeuCard from './NeuCard';

interface TimelineItem {
  step: string;
  title: string;
  desc: string;
}

interface NeuTimelineProps {
  items: TimelineItem[];
}

const NeuTimeline = ({ items }: NeuTimelineProps) => {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <motion.div 
          key={index}
          className="flex items-start space-x-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-purple-500 border-4 border-black shadow-[4px_4px_0px_black] flex items-center justify-center">
              <span className="text-2xl font-black text-white">{item.step}</span>
            </div>
          </div>
          
          <NeuCard className="flex-1 p-6" hoverable>
            <h3 className="text-2xl font-black mb-4 text-black uppercase tracking-wider">
              {item.title}
            </h3>
            <p className="text-lg text-black leading-relaxed font-medium">
              {item.desc}
            </p>
          </NeuCard>
        </motion.div>
      ))}
    </div>
  );
};

export default NeuTimeline; 