import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Award, Heart, ArrowRight } from 'lucide-react';

const features = [
  {
    title: 'Harmful Ingredient Detection',
    description: 'Flags additives, preservatives, and allergens before they reach your table.',
    icon: ShieldAlert,
    imageAlt: 'Harmful Ingredient Detection Illustration',
    bgColor: 'bg-red-50'
  },
  {
    title: 'Expert Nutrition Rankings',
    description: 'Rankings designed by registered holistic health experts.',
    icon: Award,
    imageAlt: 'Expert Nutrition Rankings Illustration',
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Personalized Recommendations',
    description: 'Get healthier alternatives tailored to your family profile.',
    icon: Heart,
    imageAlt: 'Personalized Recommendations Illustration',
    bgColor: 'bg-[#CFE0D1]'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-[#F9F5EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="space-y-24 lg:space-y-32">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            const Icon = feature.icon;

            return (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image/Illustration Side */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2"
                >
                  <div className={`aspect-square sm:aspect-[4/3] rounded-[32px] ${feature.bgColor} relative overflow-hidden flex items-center justify-center shadow-sm`}>
                     {/* Placeholder for real screenshots */}
                     <Icon className="w-32 h-32 text-[#2D7A4F] opacity-20" strokeWidth={1} />
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="w-full lg:w-1/2 space-y-6 flex flex-col justify-center"
                >
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100">
                    <Icon className="w-6 h-6 text-[#2D7A4F]" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div>
                    <a href="#learn-more" className="inline-flex items-center text-[#2D7A4F] font-semibold text-lg hover:text-[#1e5235] transition-colors group">
                      Learn More 
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
