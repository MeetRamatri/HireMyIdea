import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What is the Food Scanner App and how does it work?",
    answer: "Olive allows you to simply point your phone's camera at any food product's barcode. We instantly analyze the ingredients against our database to flag any harmful additives, allergens, or highly processed elements, giving you an easy-to-understand safety score."
  },
  {
    question: "How does Olive ensure the accuracy of the Food Scanner App results?",
    answer: "Our database is continuously updated and verified by registered holistic health experts. We cross-reference multiple trusted nutritional databases to ensure the ingredient breakdowns and scores are as accurate and up-to-date as possible."
  },
  {
    question: "Which products can I scan with the Food Scanner App?",
    answer: "You can scan almost any packaged food item with a standard barcode. Our database contains hundreds of thousands of products and is constantly growing based on user scans."
  },
  {
    question: "Can the Food Scanner App be customized to my family's dietary needs?",
    answer: "Yes! You can set up personalized profiles in the app to flag specific allergens (like nuts, dairy, or gluten) or avoid certain additives, ensuring the recommendations fit your family perfectly."
  },
  {
    question: "Is my data secure when I use the Olive?",
    answer: "Absolutely. We take your privacy seriously. Your scanning history and personal profile data are encrypted and never sold to third-party advertisers."
  },
  {
    question: "When will the Android version of the Food Scanner App be available?",
    answer: "We are working hard on the Android version! It is currently in beta testing and we expect to launch it on the Google Play Store in the coming months."
  }
];

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#EAE3D5]">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center justify-between py-6 md:py-8 text-left group focus:outline-none"
      >
        <span className="text-[15px] md:text-[16px] text-[#324036] font-medium pr-8 group-hover:text-[#223628] transition-colors">
          {faq.question}
        </span>
        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-[#2A3E2A] flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? (
            <svg viewBox="0 0 24 24" width="12" height="12" className="text-white" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          ) : (
            <svg viewBox="0 0 24 24" width="12" height="12" className="text-white" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-[15px] text-gray-600 leading-relaxed pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection = () => {
  return (
    <section id="faqs" className="bg-white flex justify-center pb-24 font-sans">
      <div className="w-full max-w-[1100px] bg-[#FDF9F1] px-6 py-20 md:px-16 md:py-32 relative">
        
        {/* Header Area */}
        <div className="text-center relative max-w-[600px] mx-auto mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[40px] md:text-[52px] leading-[1.15] font-medium text-[#223628] mb-10 tracking-tight"
          >
            Frequently Asked<br />Questions by Parents
          </motion.h2>
          
          {/* Mascot (Floating Olive) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute right-[-20px] top-[10px] md:right-[-60px] md:top-[20px] w-16 h-16 md:w-20 md:h-20 drop-shadow-xl animate-bounce"
            style={{ animationDuration: '4s' }}
          >
             <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1fad2.png" alt="Mascot" className="w-full h-full object-contain" />
          </motion.div>
          
          {/* Apple Download Button */}
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 bg-[#2B422D] text-white px-7 py-3.5 rounded-full font-semibold text-[15px] hover:bg-[#1f3121] transition-colors shadow-md"
          >
            <svg viewBox="0 0 384 512" width="16" height="16" className="fill-current">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            Download for iOS
          </motion.button>
        </div>

        {/* FAQs List */}
        <div className="w-full max-w-[840px] mx-auto border-t border-[#EAE3D5]">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <FaqItem faq={faq} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
