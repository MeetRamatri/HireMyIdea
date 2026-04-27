import React from 'react';
import { motion } from 'framer-motion';

const AppDownloadSection = () => {
  return (
    <section className="bg-white py-16 flex justify-center px-4 md:px-8 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-[1100px] relative rounded-[32px] overflow-hidden min-h-[480px] md:min-h-[520px] flex items-center shadow-2xl"
      >
        
        {/* Background Image & Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" 
            alt="Family enjoying a meal" 
            className="w-full h-full object-cover object-center"
          />
          {/* Dark gradient to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20"></div>
        </div>

        {/* Decorative Line Art - Top Left */}
        <div className="absolute top-0 left-0 w-48 h-48 pointer-events-none z-10">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-20 150 C 40 150 100 100 120 -20" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Decorative Line Art - Bottom Right */}
        <div className="absolute bottom-[-10px] right-[-10px] w-64 h-80 pointer-events-none z-10 hidden md:block">
          <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M 150 450 C 150 350 300 280 250 180 C 200 80 120 120 120 160 C 120 180 160 180 160 220 C 160 270 20 320 0 450" 
              stroke="rgba(255,255,255,0.8)" 
              strokeWidth="2" 
              strokeLinecap="round" 
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-20 px-8 md:px-16 py-16 text-white max-w-[650px]">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[40px] md:text-[54px] font-bold leading-[1.05] mb-8 tracking-tight"
          >
            Keep your family<br/>safe with Olive
          </motion.h2>
          
          <motion.ul 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 mb-10 text-[17px] md:text-[18px] font-medium"
          >
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#223628" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-[14px] md:h-[14px]">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              Effortless food scanning
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#223628" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-[14px] md:h-[14px]">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              Peace of mind for parents
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#223628" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-[14px] md:h-[14px]">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              Healthy product recommendations
            </li>
          </motion.ul>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2.5 bg-white text-[#223628] px-7 py-3.5 rounded-full font-bold text-[15px] hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          >
            <svg viewBox="0 0 384 512" width="16" height="16" className="fill-current">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            Download for iOS
          </motion.button>
        </div>

      </motion.div>
    </section>
  );
};

export default AppDownloadSection;
