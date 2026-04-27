import React from 'react';
import { motion } from 'framer-motion';
import { ScanLine, FlaskConical, Lightbulb } from 'lucide-react';

const steps = [
  {
    icon: ScanLine,
    title: 'Scan the Barcode',
    description: 'Open Olive and point your camera at any product.',
  },
  {
    icon: FlaskConical,
    title: 'We Analyze Instantly',
    description: 'Our database cross-references 500,000+ ingredients.',
  },
  {
    icon: Lightbulb,
    title: 'Get Healthier Choices',
    description: 'Receive tailored, safer product alternatives.',
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block relative"
          >
            <h2 className="text-[36px] md:text-[44px] font-bold text-[#1A1A1A] relative z-10">
              How Olive Works
            </h2>
            {/* Green underline accent */}
            <span className="absolute bottom-1 left-0 w-full h-[12px] bg-[#A8D96C] opacity-40 -z-0 rounded-sm"></span>
          </motion.div>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Dashed Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-px border-t-[3px] border-dashed border-gray-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Number & Icon Badge */}
                <div className="relative mb-8">
                  {/* Icon Circle */}
                  <div className="w-[90px] h-[90px] rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                    <step.icon className="w-[38px] h-[38px] text-[#2D7A4F]" strokeWidth={1.5} />
                  </div>
                  {/* Step Number floating */}
                  <div className="absolute -top-2 -right-2 w-[34px] h-[34px] rounded-full bg-[#A8D96C] text-[#1A1A1A] font-bold text-[15px] flex items-center justify-center border-[3px] border-white shadow-sm z-20">
                    {index + 1}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-[22px] font-bold text-[#1A1A1A] mb-3">{step.title}</h3>
                <p className="text-[16px] text-[#6B7280] leading-relaxed max-w-[280px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
