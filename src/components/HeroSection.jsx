import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import { AvatarCluster, DownloadButton } from './OlivePrimitives';

const marqueeProducts = [
  'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=150&q=80',
  'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=150&q=80',
  'https://images.unsplash.com/photo-1603048719539-9ecb4b2d3f0b?auto=format&fit=crop&w=150&q=80',
  'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=150&q=80',
  'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=150&q=80'
];

const heroProducts = [
  {
    name: 'San Pellegrino Sparkling Natural Mineral Water',
    brand: 'S.Pellegrino',
    score: '52/100',
    label: 'Limit',
    scoreColor: '#f2a728',
    image: 'https://images.unsplash.com/photo-1622484212850-eb596d769edc?auto=format&fit=crop&w=180&q=80',
    facts: [
      ['Contaminants', '7', 'bg-[#eb6d65]'],
      ['Fluoride', 'Yes', 'bg-[#f5b1ad]'],
      ['PFAS', 'No', 'bg-[#5ab96d]'],
      ['Microplastics', 'Minimal', 'bg-[#9cd8b0]'],
      ['pH Level', '5.7', '']
    ]
  },
  {
    name: 'Organic Berry Kefir Smoothie',
    brand: 'Straus',
    score: '96/100',
    label: 'Excellent',
    scoreColor: '#4aa85c',
    image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=180&q=80',
    facts: [
      ['Contaminants', '1', 'bg-[#9bd9a7]'],
      ['Fluoride', 'Low', 'bg-[#d6e7d8]'],
      ['PFAS', 'No', 'bg-[#5ab96d]'],
      ['Microplastics', 'None', 'bg-[#c9efcf]'],
      ['pH Level', '6.6', '']
    ]
  },
  {
    name: 'Late July Organic Tortilla Chips',
    brand: 'Late July',
    score: '81/100',
    label: 'Good',
    scoreColor: '#8bb845',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=180&q=80',
    facts: [
      ['Contaminants', '2', 'bg-[#f2d486]'],
      ['Fluoride', 'No', 'bg-[#d6e7d8]'],
      ['PFAS', 'No', 'bg-[#5ab96d]'],
      ['Microplastics', 'Low', 'bg-[#bde7c4]'],
      ['pH Level', '6.1', '']
    ]
  }
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroProducts.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  const activeProduct = heroProducts[activeIndex];

  return (
    <section id="hero" className="px-4 pb-10 pt-4 md:px-6 md:pb-16 md:pt-6">
      <div className="mx-auto max-w-[390px] md:max-w-[1240px]">
        <div className="rounded-[28px] border border-[#dde5da] bg-[radial-gradient(circle_at_top,#f9fdf7_0%,#f2f7f1_44%,#eff4ee_100%)] px-4 pb-8 pt-4 shadow-[0_18px_40px_rgba(46,62,40,0.08)] md:rounded-[38px] md:px-10 md:pb-14 md:pt-8">
          <Navbar />

          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              className="mt-14 flex flex-col items-center md:mt-16"
            >
              <AvatarCluster />
              <p className="mt-4 text-[13px] font-medium text-[#737b74] md:text-[14px]">
                Trusted by thousands of healthy families
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: 0.14 }}
              className="mt-8 max-w-[320px] text-[33px] font-semibold leading-[1.04] tracking-[-0.06em] text-[#263b23] md:mt-7 md:max-w-[760px] md:text-[70px]"
            >
              The Safest Way to Shop for Groceries
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
              className="mt-7 max-w-[320px] text-[15px] leading-[1.55] text-[#727b74] md:mt-6 md:max-w-[710px] md:text-[21px]"
            >
              Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your
              Family&apos;s Diet and Get Expert-Backed Food Insights
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
              className="mt-8"
            >
              <DownloadButton className="min-w-[300px] md:min-w-[236px]" />
            </motion.div>

            <div className="relative mt-8 w-full max-w-[315px] md:mt-14 md:max-w-[372px]">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-[-18px] top-[78px] z-0 hidden h-[120px] w-[76px] rounded-[24px] bg-white/72 p-2 shadow-[0_16px_28px_rgba(40,56,36,0.08)] md:block"
              >
                <img
                  src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=120&q=80"
                  alt=""
                  className="h-full w-full rounded-[18px] object-cover opacity-35 blur-[1px]"
                />
              </motion.div>
              <motion.div
                animate={{ y: [0, 9, 0] }}
                transition={{ duration: 7.4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute right-[-18px] top-[78px] z-0 hidden h-[120px] w-[76px] rounded-[24px] bg-white/72 p-2 shadow-[0_16px_28px_rgba(40,56,36,0.08)] md:block"
              >
                <img
                  src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=120&q=80"
                  alt=""
                  className="h-full w-full rounded-[18px] object-cover opacity-35 blur-[1px]"
                />
              </motion.div>

              <div className="relative z-10 overflow-hidden rounded-[44px] border-[10px] border-[#d7dbd5] bg-white px-4 pb-6 pt-14 shadow-[0_30px_60px_rgba(36,54,32,0.12)] md:rounded-[52px] md:border-[12px] md:px-5">
                <div className="absolute left-1/2 top-3 z-30 h-[29px] w-[104px] -translate-x-1/2 rounded-full bg-black shadow-[inset_0_-2px_4px_rgba(255,255,255,0.12)]">
                  <div className="absolute right-[8px] top-1/2 h-[16px] w-[16px] -translate-y-1/2 rounded-full bg-[#1c1c1c] shadow-[inset_0_0_0_2px_rgba(255,255,255,0.08)]" />
                </div>

                <div className="relative overflow-hidden rounded-[28px] bg-[#f5f7f3] px-4 pb-5 pt-4">
                  <div className="marquee-row opacity-35">
                    <div className="marquee-track gap-4">
                      {[...marqueeProducts, ...marqueeProducts].map((src, index) => (
                        <div
                          key={`${src}-${index}`}
                          className="h-[108px] w-[74px] shrink-0 rounded-[18px] bg-white/70 p-1.5 shadow-[0_8px_22px_rgba(0,0,0,0.05)]"
                        >
                          <img src={src} alt="" className="h-full w-full rounded-[14px] object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProduct.name}
                      initial={{ opacity: 0, y: 24, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -18, scale: 0.96 }}
                      transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
                      className="relative z-10 mx-auto mt-5 flex h-[128px] w-[112px] items-center justify-center rounded-[24px] bg-white p-2 shadow-[0_16px_32px_rgba(28,45,26,0.12)]"
                    >
                      <img
                        src={activeProduct.image}
                        alt={activeProduct.name}
                        className="h-full w-full rounded-[18px] object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute bottom-2 left-1/2 h-1.5 w-11 -translate-x-1/2 rounded-full bg-[#d0d5cf]" />
                </div>

                <div className="px-1 pt-6 text-left">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activeProduct.name}-meta`}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <h3 className="text-[17px] font-semibold leading-[1.25] tracking-[-0.03em] text-[#334335]">
                        {activeProduct.name}
                      </h3>
                      <p className="mt-1 text-[12px] text-[#8a938b]">{activeProduct.brand}</p>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className="inline-flex h-3 w-3 rounded-full"
                            style={{ backgroundColor: activeProduct.scoreColor }}
                          />
                          <div>
                            <p className="text-[16px] font-semibold leading-none text-[#1f2f1f]">
                              {activeProduct.score}
                            </p>
                            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#89928b]">
                              {activeProduct.label}
                            </p>
                          </div>
                        </div>
                        <button type="button" aria-label="Save product" className="text-[#d0d2d0]">
                          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                        </button>
                      </div>

                      <div className="mt-4 border-t border-[#edf1eb] pt-4">
                        <div className="space-y-3">
                          {activeProduct.facts.map(([label, value, tone]) => (
                            <div key={label} className="flex items-center justify-between text-[12.5px]">
                              <span className="text-[#5f6861]">{label}</span>
                              <span className="flex items-center gap-2 font-semibold text-[#293929]">
                                {value}
                                {tone ? <span className={`h-2.5 w-2.5 rounded-full ${tone}`} /> : null}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 border-t border-[#edf1eb] pt-4">
                          <p className="text-[13px] font-semibold text-[#2d3d2d]">Contaminants</p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
