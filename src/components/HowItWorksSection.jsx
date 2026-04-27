import React from 'react';
import { motion } from 'framer-motion';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[44px] md:text-[50px] font-semibold text-[#294326] leading-[1.15] text-center tracking-tight"
          >
            How the Olive Food<br />Scanner App Works
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="text-[64px] leading-none mb-4 md:mb-0"
          >
            🥑
          </motion.div>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Scan & Detect */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#F6FAF7] rounded-[32px] p-8 md:p-10 flex flex-col h-full"
          >
            <h3 className="text-[19px] font-bold text-[#1A1A1A] mb-8">Scan & Detect</h3>
            
            <div className="flex-1 min-h-[220px] flex items-center justify-center relative mb-8 w-full max-w-[280px] mx-auto">
              {/* Scanner Frame Corners */}
              <div className="absolute top-0 left-4 w-12 h-12 border-t-[3px] border-l-[3px] border-gray-400 rounded-tl-2xl"></div>
              <div className="absolute top-0 right-4 w-12 h-12 border-t-[3px] border-r-[3px] border-gray-400 rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-4 w-12 h-12 border-b-[3px] border-l-[3px] border-gray-400 rounded-bl-2xl"></div>
              <div className="absolute bottom-0 right-4 w-12 h-12 border-b-[3px] border-r-[3px] border-gray-400 rounded-br-2xl"></div>
              
              {/* Stars */}
              <svg className="absolute top-2 right-12 w-4 h-4 text-[#8BA888] fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg className="absolute top-14 right-6 w-3 h-3 text-[#8BA888] fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg className="absolute bottom-10 right-10 w-5 h-5 text-[#8BA888] fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg className="absolute bottom-6 left-12 w-2 h-2 text-[#8BA888] fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>

              {/* Avocado Simulation */}
              <div className="relative z-10 w-[140px] h-[160px] bg-[#678A5B] rounded-[50%_50%_45%_45%] flex flex-col items-center justify-center shadow-lg border-[2px] border-[#4B6B40] overflow-hidden">
                <div className="absolute top-4 w-[110px] h-[120px] bg-[#89B973] rounded-[50%_50%_45%_45%] flex items-center justify-center shadow-inner">
                   <div className="w-[50px] h-[55px] bg-[#432A15] rounded-[50%_50%_45%_45%] shadow-[inset_-4px_-4px_10px_rgba(0,0,0,0.5)]"></div>
                </div>
                {/* Barcode Overlay */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[44px] h-[28px] bg-white rounded-sm flex items-center justify-center p-1 rotate-[-10deg] shadow-sm z-20">
                  <div className="flex gap-[2px] h-full items-center w-full justify-between">
                    <div className="w-[3px] h-full bg-black"></div>
                    <div className="w-[1px] h-full bg-black"></div>
                    <div className="w-[2px] h-full bg-black"></div>
                    <div className="w-[1px] h-full bg-black"></div>
                    <div className="w-[4px] h-full bg-black"></div>
                    <div className="w-[1px] h-full bg-black"></div>
                    <div className="w-[2px] h-full bg-black"></div>
                  </div>
                </div>
              </div>

              {/* Laser Line */}
              <div className="absolute left-6 right-6 top-[40%] h-[4px] bg-[#224A29] rounded-full z-20 shadow-md"></div>
            </div>

            <p className="text-[14px] text-[#4B5563] leading-[1.6] font-medium tracking-tight">
              When you open Olive simply scan the barcode to instantly detect product ingredients. Olive's intuitive design means busy parents can quickly see which items contain harmful substances, delivering peace of mind with every scan.
            </p>
          </motion.div>

          {/* Card 2: Data Analysis & Validation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#F6FAF7] rounded-[32px] p-8 md:p-10 flex flex-col h-full"
          >
            <h3 className="text-[19px] font-bold text-[#1A1A1A] mb-8">Data Analysis & Validation</h3>
            
            <div className="flex-1 min-h-[220px] flex flex-col items-center justify-center relative mb-8 w-full">
              
              {/* Horizontal Products */}
              <div className="relative w-full h-[110px] flex items-center justify-center mb-6">
                {/* Far Left Blurred */}
                <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=100&q=80" alt="blur" className="absolute w-[60px] h-[60px] rounded-[14px] left-0 opacity-40 blur-[3px] object-cover" />
                {/* Left Blurred */}
                <img src="https://images.unsplash.com/photo-1587301669865-c36b85635f79?auto=format&fit=crop&w=100&q=80" alt="blur" className="absolute w-[70px] h-[70px] rounded-[16px] left-8 opacity-70 blur-[2px] object-cover shadow-sm" />
                
                {/* Far Right Blurred */}
                <img src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=100&q=80" alt="blur" className="absolute w-[60px] h-[60px] rounded-[14px] right-0 opacity-40 blur-[3px] object-cover" />
                {/* Right Blurred */}
                <img src="https://images.unsplash.com/photo-1590080874088-eec64895b423?auto=format&fit=crop&w=100&q=80" alt="blur" className="absolute w-[70px] h-[70px] rounded-[16px] right-8 opacity-70 blur-[2px] object-cover shadow-sm" />

                {/* Center Item Focus */}
                <div className="relative z-10 w-[85px] h-[95px] bg-white rounded-[20px] shadow-[0_12px_24px_rgb(0,0,0,0.12)] border border-gray-100 flex flex-col items-center p-1.5">
                   <img src="https://images.unsplash.com/photo-1579224497446-24ba7b16d566?auto=format&fit=crop&w=100&q=80" alt="Juice" className="w-full h-full object-cover rounded-[14px]" />
                </div>
              </div>

              {/* Safe to consume pill */}
              <div className="bg-[#E4ECE5] px-4 py-2 rounded-full flex items-center gap-2">
                <div className="w-[18px] h-[18px] rounded-full bg-[#3B6A45] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="12" height="12" className="text-white fill-none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-[13px] font-bold text-[#2A4329]">Safe to consume</span>
              </div>
            </div>

            <p className="text-[14px] text-[#4B5563] leading-[1.6] font-medium tracking-tight">
              After scanning, our food scanner app compares product data with an extensive, up-to-date food database. Using expert nutritional guidelines, Olive filters out potentially dangerous ingredients so you never have to second guess
            </p>
          </motion.div>

          {/* Card 3: Actionable Insights */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#F6FAF7] rounded-[32px] p-8 md:p-10 flex flex-col h-full"
          >
            <h3 className="text-[19px] font-bold text-[#1A1A1A] mb-8">Actionable Insights & Recommendations</h3>
            
            <div className="flex-1 min-h-[220px] flex items-center justify-center relative mb-8 w-full">
              
              {/* Background List Mockup */}
              <div className="absolute top-0 left-2 right-2 flex flex-col items-center gap-3 opacity-[0.35] blur-[1px]">
                 <div className="w-[80%] h-8 bg-[#E2EBE3] rounded-full flex items-center justify-center px-4">
                    <span className="text-[11px] font-semibold text-gray-700">Mediterranean Quinoa Salad</span>
                 </div>
                 <div className="w-[90%] h-8 bg-[#E2EBE3] rounded-full"></div>
                 <div className="w-[85%] h-8 bg-[#E2EBE3] rounded-full"></div>
                 <div className="w-[95%] h-8 bg-[#E2EBE3] rounded-full"></div>
              </div>

              {/* Stacked Cards */}
              <div className="relative w-full h-[150px] flex justify-center items-end mt-12">
                 {/* Left Product */}
                 <div className="absolute left-4 bottom-2 w-[90px] h-[130px] rounded-[18px] overflow-hidden shadow-lg border-[3px] border-white rotate-[-10deg] origin-bottom-left z-10 bg-white">
                    <img src="https://images.unsplash.com/photo-1590080874088-eec64895b423?auto=format&fit=crop&w=150&q=80" alt="Snack" className="w-full h-full object-cover" />
                 </div>

                 {/* Right Product */}
                 <div className="absolute right-4 bottom-2 w-[90px] h-[130px] rounded-[18px] overflow-hidden shadow-lg border-[3px] border-white rotate-[10deg] origin-bottom-right z-10 bg-white">
                    <img src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=150&q=80" alt="Salad" className="w-full h-full object-cover" />
                 </div>

                 {/* Center Product */}
                 <div className="absolute bottom-0 w-[100px] h-[140px] rounded-[20px] overflow-hidden shadow-[0_12px_24px_rgb(0,0,0,0.15)] border-[3px] border-white z-20 bg-white">
                    <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=150&q=80" alt="Bread" className="w-full h-full object-cover" />
                 </div>
              </div>

            </div>

            <p className="text-[14px] text-[#4B5563] leading-[1.6] font-medium tracking-tight">
              Once analyzed, Olive provides tailored insights and healthier product suggestions. Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family's health & nutrition.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
