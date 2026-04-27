import React from 'react';
import { motion } from 'framer-motion';

const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" className="text-[#FFC107] fill-current">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden font-sans">
      
      {/* Decorative Blob (Left) */}
      <div className="absolute top-[20%] left-[-15%] md:left-[-5%] z-0 text-[#E8F1EA]">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M200 0C250 0 280 50 280 100C280 130 260 160 250 180C280 160 320 150 350 170C390 190 400 240 370 280C340 320 280 320 250 280C250 310 260 360 220 390C180 420 120 390 110 340C100 290 130 240 150 220C120 240 70 260 30 230C-10 200 -10 140 30 100C70 60 130 70 150 100C150 70 140 20 180 0C185 -2.5 192.5 0 200 0Z" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-8 pt-10">
          
          {/* Left Column: Main Image & Floating Cards */}
          <div className="w-full lg:w-[55%] relative flex justify-center lg:justify-start pl-0 lg:pl-12">
            
            {/* Main Black & White Photo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-[90%] md:w-[460px] h-[520px] rounded-[32px] overflow-hidden shadow-lg relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1544281679-0df426c19fce?auto=format&fit=crop&w=800&q=80" 
                alt="Mother and children" 
                className="w-full h-full object-cover grayscale contrast-125 brightness-90"
              />
            </motion.div>

            {/* Card 1: Top Right Overlap */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute top-[-30px] right-0 md:right-[5%] lg:right-[-15%] z-20 w-[90%] md:w-[340px] bg-white rounded-[20px] p-6 shadow-[0_12px_40px_rgb(0,0,0,0.08)] border border-gray-50"
            >
              <p className="text-[13px] text-gray-600 leading-relaxed mb-4">
                Olive has completely changed the way I shop for my family. I feel confident knowing exactly what's in our food before it ever hits our pantry.
              </p>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[#1A1A1A] mb-1.5">Megan L.</span>
                <div className="flex gap-[2px]">
                  <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-11 h-11 rounded-full border-[3px] border-white overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" alt="Megan" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Card 3: Bottom Left Overlap */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-[-40px] left-[5%] md:left-[-10%] lg:left-[-5%] z-20 w-[90%] md:w-[340px] bg-white rounded-[20px] p-6 shadow-[0_12px_40px_rgb(0,0,0,0.08)] border border-gray-50"
            >
              <p className="text-[13px] text-gray-600 leading-relaxed mb-4">
                After just a week of using Olive, I feel more in control of my family's nutrition than ever before. It's empowering to make informed choices so quickly.
              </p>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[#1A1A1A] mb-1.5">Lila M.</span>
                <div className="flex gap-[2px]">
                  <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-11 h-11 rounded-full border-[3px] border-white overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="Lila" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Typography & Card 2 */}
          <div className="w-full lg:w-[45%] flex flex-col pt-12 lg:pt-24 lg:pl-16 relative z-10">
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[44px] md:text-[54px] leading-[1.1] font-medium text-[#223628] mb-6 tracking-tight">
                Real Mothers<br />Real Results
              </h2>
              <a href="#reviews" className="inline-flex items-center text-[#4B7A58] font-medium text-[15px] hover:text-[#32543c] transition-colors group">
                read all 3,147+ reviews 
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </motion.div>

            {/* Card 2: Bottom Right Area */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 md:mt-24 ml-0 md:ml-12 w-full max-w-[360px] bg-white rounded-[20px] p-6 shadow-[0_12px_40px_rgb(0,0,0,0.08)] border border-gray-50 relative"
            >
              <p className="text-[13px] text-gray-600 leading-relaxed mb-4">
                Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It's that easy.
              </p>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[#1A1A1A] mb-1.5">Tina B.</span>
                <div className="flex gap-[2px]">
                  <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                </div>
              </div>
              <div className="absolute top-[60%] -left-6 translate-y-[-50%] w-11 h-11 rounded-full border-[3px] border-white overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" alt="Tina" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
