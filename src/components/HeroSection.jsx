import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section id="hero" className="bg-[#F9F5EE] pt-32 md:pt-40 pb-20 overflow-hidden min-h-screen flex flex-col items-center">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center w-full">
        
        <motion.div 
          className="flex flex-col items-center w-full"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Trusted Badge */}
          <motion.div 
            variants={fadeInUp}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex -space-x-2">
              <img className="w-7 h-7 rounded-full border-[1.5px] border-[#F9F5EE] object-cover" src="https://i.pravatar.cc/100?img=33" alt="User" />
              <img className="w-7 h-7 rounded-full border-[1.5px] border-[#F9F5EE] object-cover" src="https://i.pravatar.cc/100?img=47" alt="User" />
              <img className="w-7 h-7 rounded-full border-[1.5px] border-[#F9F5EE] object-cover" src="https://i.pravatar.cc/100?img=12" alt="User" />
              <img className="w-7 h-7 rounded-full border-[1.5px] border-[#F9F5EE] object-cover" src="https://i.pravatar.cc/100?img=5" alt="User" />
              <div className="w-7 h-7 rounded-full border-[1.5px] border-[#F9F5EE] bg-[#E8E8E8] flex items-center justify-center text-[9px] font-bold text-gray-600">
                8k+
              </div>
            </div>
            <span className="text-[13px] font-medium text-[#6B7280]">Trusted by thousands of healthy families</span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeInUp}>
            <h1 className="text-[52px] md:text-[72px] lg:text-[84px] font-bold text-[#1E3A24] leading-[0.95] tracking-tight mb-8">
              The Safest Way to<br />Shop for Groceries
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div variants={fadeInUp}>
            <p className="text-[17px] md:text-[19px] text-[#6B7280] leading-[1.6] max-w-[640px] mx-auto mb-10">
              Use the Olive Food Scanner App to Instantly Eliminate<br className="hidden md:block" />
              Harmful Ingredients from Your Family's Diet and Get<br className="hidden md:block" />
              Expert-Backed Food Insights
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={fadeInUp}>
            <a href="#download" className="inline-flex items-center gap-2 bg-[#1B3624] text-white px-6 py-3.5 rounded-full hover:bg-[#14291B] transition-colors shadow-sm font-medium text-[15px]">
              <svg viewBox="0 0 384 512" width="18" height="18" className="fill-current mb-0.5">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              Download for iOS
            </a>
          </motion.div>

          {/* Phone Mockup with Entrance Animation */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 80, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            className="mt-16 relative w-full max-w-[340px] aspect-[1/2.15] mx-auto"
          >
            {/* Faded Background Products (Left & Right - Floating Animation) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-[80px] -left-[140px] w-[120px] h-[120px] bg-white rounded-3xl shadow-sm opacity-50 flex items-center justify-center"
            >
              <div className="w-12 h-20 bg-gradient-to-b from-gray-200 to-gray-100 rounded-lg"></div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-[80px] -right-[140px] w-[120px] h-[120px] bg-white rounded-3xl shadow-sm opacity-50 flex items-center justify-center"
            >
              <div className="w-12 h-20 bg-gradient-to-b from-gray-200 to-gray-100 rounded-lg"></div>
            </motion.div>

            {/* Actual Phone Frame */}
            <div className="relative w-full h-full rounded-[54px] border-[12px] border-[#EAEAEA] bg-white shadow-2xl shadow-black/5 overflow-hidden flex flex-col">
              
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[110px] h-[32px] bg-black rounded-full z-30"></div>

              {/* App Content */}
              <div className="flex-1 overflow-hidden flex flex-col pt-14 pb-6 px-5 relative z-10">
                
                {/* Carousel Top */}
                <div className="flex justify-center mb-6 relative">
                  <div className="w-full h-[140px] bg-[#F5F7F5] rounded-[24px] flex items-center justify-center relative overflow-hidden">
                    
                    {/* Infinite Marquee Product Animation */}
                    <motion.div 
                      className="absolute flex items-center gap-6"
                      animate={{ x: [0, -200] }}
                      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-[80px] h-[100px] bg-white/80 rounded-xl shadow-sm opacity-60 flex-shrink-0"></div>
                      ))}
                    </motion.div>
                    
                    {/* Center Product Image (San Pellegrino) */}
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="w-[100px] h-[120px] bg-white rounded-2xl shadow-md flex items-center justify-center z-10 relative"
                    >
                       {/* Bottle illustration */}
                       <div className="w-5 h-16 bg-[#2D7A4F] rounded-t-full rounded-b-md relative">
                         <div className="absolute top-2 left-0 w-full h-5 bg-blue-100 opacity-80 rounded-sm"></div>
                         <div className="absolute top-8 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full"></div>
                       </div>
                    </motion.div>
                  </div>
                  {/* Indicator Pill */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-gray-300 rounded-full"></div>
                </div>

                {/* Product Info with Staggered Entrance */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.6 } }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col flex-1"
                >
                  {/* Product Title */}
                  <motion.div variants={fadeInUp} className="text-left mb-4">
                    <h3 className="text-[17px] font-bold text-[#1A1A1A] leading-tight mb-1">
                      San Pellegrino Sparkling Natural Mineral Water (...
                    </h3>
                    <p className="text-[13px] text-[#6B7280]">Sanpellegrino</p>
                  </motion.div>

                  {/* Score Section */}
                  <motion.div variants={fadeInUp} className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }} 
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-3 h-3 rounded-full bg-[#F59E0B]"
                      ></motion.div>
                      <div className="flex flex-col">
                        <span className="text-[15px] font-bold text-[#1A1A1A] leading-none">52/100</span>
                        <span className="text-[11px] text-[#6B7280] uppercase tracking-wider font-semibold">Limit</span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </button>
                  </motion.div>

                  {/* Divider */}
                  <motion.div variants={fadeInUp} className="w-full h-px bg-gray-100 mb-4"></motion.div>

                  {/* Attributes List */}
                  <div className="space-y-3.5 flex-1">
                    {[
                      { icon: <><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>, name: "Contaminants", val: "7", color: "bg-[#EF4444]" },
                      { icon: <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>, name: "Fluoride", val: "Yes", color: "bg-[#FCA5A5]" },
                      { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>, name: "PFAS", val: "No", color: "bg-[#10B981]" },
                      { icon: <><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></>, name: "Microplastics", val: "Minimal", color: "bg-[#6EE7B7]" },
                      { icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>, name: "pH Level", val: "5.7", color: "" }
                    ].map((item, i) => (
                      <motion.div key={i} variants={fadeInUp} className="flex justify-between items-center text-[12.5px]">
                        <div className="flex items-center gap-2 text-[#4B5563]">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{item.icon}</svg>
                          {item.name}
                        </div>
                        <div className="flex items-center gap-2 font-semibold text-[#1A1A1A]">
                          {item.val} {item.color && <div className={`w-2 h-2 rounded-full ${item.color}`}></div>}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Section Title */}
                  <motion.div variants={fadeInUp} className="mt-4 pt-4 border-t border-gray-100">
                     <h4 className="text-[13px] font-bold text-[#1A1A1A]">Contaminants</h4>
                  </motion.div>
                </motion.div>

                {/* iPhone Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
