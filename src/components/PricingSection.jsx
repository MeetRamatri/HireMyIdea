import React from 'react';
import { motion } from 'framer-motion';

const CheckIcon = ({ isDark }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" className="flex-shrink-0 mt-0.5">
    <circle cx="12" cy="12" r="12" fill={isDark ? "white" : "#3A6044"} />
    <path d="M10.5 16.5l-4-4 1.5-1.5 2.5 2.5 6-6 1.5 1.5-7.5 7.5z" fill={isDark ? "#3A6044" : "white"} />
  </svg>
);

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden font-sans">
      
      {/* Decorative Flower Blob (Right) */}
      <div className="absolute top-[10%] right-[-25%] md:right-[-10%] lg:right-[-5%] z-0 text-[#EEF5EF] pointer-events-none">
        <svg width="700" height="700" viewBox="0 0 200 200" fill="currentColor">
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="-55" rx="14" ry="44" />
            <ellipse cx="0" cy="-55" rx="14" ry="44" transform="rotate(45)" />
            <ellipse cx="0" cy="-55" rx="14" ry="44" transform="rotate(90)" />
            <ellipse cx="0" cy="-55" rx="14" ry="44" transform="rotate(135)" />
            <ellipse cx="0" cy="-55" rx="14" ry="44" transform="rotate(180)" />
            <ellipse cx="0" cy="-55" rx="14" ry="44" transform="rotate(225)" />
            <ellipse cx="0" cy="-55" rx="14" ry="44" transform="rotate(270)" />
            <ellipse cx="0" cy="-55" rx="14" ry="44" transform="rotate(315)" />
            <circle cx="0" cy="0" r="18" />
          </g>
        </svg>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 pt-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-[44px] md:text-[54px] font-medium text-[#223628] leading-[1.15] tracking-tight">
            Healthy Choices<br />Honest Pricing
          </h2>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Monthly */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-[#F4F6F4] rounded-[32px] p-8 md:p-10 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            {/* Olive Mascot */}
            <div className="absolute -top-12 -left-6 w-[100px] h-[100px] z-20 drop-shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
               <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1fad2.png" alt="Olive mascot" className="w-full h-full object-contain" />
            </div>

            <h3 className="text-[16px] text-gray-700 font-medium mb-2 pl-2">Monthly</h3>
            <div className="flex items-baseline mb-10 pl-2">
              <span className="text-[48px] font-bold text-[#1A1A1A] leading-none tracking-tight">$14.99</span>
              <span className="text-[14px] text-gray-500 font-medium ml-2">/monthly</span>
            </div>

            <ul className="space-y-5 mb-12 flex-grow pl-2">
              <li className="flex items-start gap-3">
                <CheckIcon isDark={false} />
                <span className="text-[15px] font-medium text-[#1A1A1A] leading-snug pt-0.5">Unlimited Scans</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon isDark={false} />
                <span className="text-[15px] font-medium text-[#1A1A1A] leading-snug pt-0.5">Unlimited Database Searches</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon isDark={false} />
                <span className="text-[15px] font-medium text-[#1A1A1A] leading-snug pt-0.5">Comprehensive Lab-Testing Data</span>
              </li>
            </ul>

            <button className="w-full py-4 bg-[#2B422D] text-white rounded-full font-bold text-[15px] hover:bg-[#1a2e1d] transition-colors shadow-md mt-auto">
              Subscribe
            </button>
          </motion.div>

          {/* Card 2: Yearly */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-[#3A6044] rounded-[32px] p-8 md:p-10 flex flex-col shadow-[0_16px_40px_rgb(58,96,68,0.25)]"
          >
            <h3 className="text-[16px] text-white/90 font-medium mb-2 pl-2">Yearly</h3>
            <div className="flex items-baseline mb-10 flex-wrap pl-2">
              <span className="text-[48px] font-bold text-white leading-none tracking-tight">$69.99</span>
              <span className="text-[20px] text-[#8DA493] line-through ml-3 font-medium">$179.88</span>
              <span className="text-[14px] text-white/80 font-medium ml-1">/yearly</span>
            </div>

            <ul className="space-y-5 mb-12 flex-grow pl-2">
              <li className="flex items-start gap-3">
                <CheckIcon isDark={true} />
                <span className="text-[15px] font-medium text-white/95 leading-snug pt-0.5">Everything in monthly plan</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon isDark={true} />
                <span className="text-[15px] font-medium text-white/95 leading-snug pt-0.5">Get 7 months free</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon isDark={true} />
                <span className="text-[15px] font-medium text-white/95 leading-snug pt-0.5">60% Savings</span>
              </li>
            </ul>

            <button className="w-full py-4 bg-white text-[#2B422D] rounded-full font-bold text-[15px] hover:bg-gray-50 transition-colors shadow-md mt-auto">
              Subscribe
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
