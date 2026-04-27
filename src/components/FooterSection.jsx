import React from 'react';
import { motion } from 'framer-motion';

const FooterSection = () => {
  return (
    <footer className="bg-white flex justify-center px-4 md:px-8 pb-8 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-[1100px] bg-[#41664A] rounded-[32px] md:rounded-[40px] px-8 py-12 md:px-16 md:py-16 text-white"
      >
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16">
          
          {/* Column 1 */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="font-semibold text-[15px] mb-5 tracking-wide">Explore More Olive Tools</h4>
            <ul className="space-y-3.5 text-[14px] text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Explore Foods</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Allergy Scanner App</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gluten Free Scanner</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dairy Free App</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Food Ingredient Checker</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="font-semibold text-[15px] mb-5 tracking-wide">About</h4>
            <ul className="space-y-3.5 text-[14px] text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Email us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
            </ul>
          </div>

          {/* Column 3 (Newsletter) */}
          <div className="md:col-span-5 lg:col-span-5 md:pl-6 lg:pl-12 flex flex-col md:items-start lg:items-start">
            {/* Logo */}
            <div className="flex items-center text-[#B1CE42] font-bold text-[44px] tracking-tight mb-3">
              <div className="relative mr-0.5 w-9 h-11">
                {/* Cute Olive SVG */}
                <svg viewBox="0 0 100 120" fill="currentColor" className="w-full h-full drop-shadow-sm">
                   <path d="M50 35 C 20 35 12 55 12 80 C 12 105 30 115 50 115 C 70 115 88 105 88 80 C 88 55 80 35 50 35 Z" />
                   {/* Eyes */}
                   <circle cx="35" cy="70" r="4.5" fill="#41664A" />
                   <circle cx="65" cy="70" r="4.5" fill="#41664A" />
                   {/* Smile */}
                   <path d="M42 85 Q 50 93 58 85" fill="none" stroke="#41664A" strokeWidth="4" strokeLinecap="round" />
                   {/* Leaf */}
                   <path d="M50 35 C 55 15 75 10 75 10 C 75 10 75 25 55 33 Z" />
                   {/* Stem */}
                   <path d="M50 35 L 47 20" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="leading-none mt-2">live</span>
            </div>
            
            <p className="text-[14px] text-white/80 mb-6 max-w-[260px] leading-relaxed">
              Get the latest lab testing data sent directly to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-[380px]" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter Email address" 
                className="flex-1 bg-white/10 border border-transparent focus:border-[#B1CE42] focus:outline-none rounded-full px-5 py-3.5 text-[14px] text-white placeholder:text-white/60 transition-all shadow-inner"
                required
              />
              <button 
                type="submit" 
                className="bg-white text-[#41664A] font-semibold px-7 py-3.5 rounded-full text-[14px] hover:bg-gray-100 hover:scale-105 transition-all shadow-md whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] text-white/60">
          <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3">
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Medical Consent</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sign in</a></li>
          </ul>
          <p className="whitespace-nowrap">&copy; 2026 Olive Inc.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
