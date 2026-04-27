import { motion } from 'framer-motion';
import { SectionHeading } from './OlivePrimitives';

const cards = [
  {
    title: 'Scan & Detect',
    copy:
      'When you open Olive simply scan the barcode to instantly detect product ingredients. Olive’s intuitive design means busy parents can quickly see which items contain harmful substances, delivering peace of mind with every scan.'
  },
  {
    title: 'Data Analysis & Validation',
    copy:
      'After scanning, our food scanner app compares product data with an extensive, up-to-date food database. Using expert nutritional guidelines, Olive filters out potentially dangerous ingredients so you never have to second guess'
  },
  {
    title: 'Actionable Insights & Recommendations',
    copy:
      'Once analyzed, Olive provides tailored insights and healthier product suggestions. Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family’s health & nutrition.'
  }
];

const cardMotion = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
};

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-10 flex items-end justify-between gap-4 md:mb-14">
          <SectionHeading className="max-w-[660px] text-[32px] md:text-[54px]">
            How the Olive Food Scanner App Works
          </SectionHeading>
          <img
            src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f951.png"
            alt="Avocado"
            className="h-14 w-14 object-contain drop-shadow-[0_10px_14px_rgba(39,59,28,0.16)] md:h-20 md:w-20"
          />
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <motion.article
            {...cardMotion}
            className="rounded-[28px] border border-[#e4ece1] bg-[#f7fbf6] p-6 shadow-[0_16px_34px_rgba(33,48,29,0.05)] md:p-8"
          >
            <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#223222]">{cards[0].title}</h3>
            <div className="relative mt-8 flex h-[250px] items-center justify-center overflow-hidden rounded-[24px] bg-[#f2f5ef]">
              <div className="absolute left-7 right-7 top-10 h-[3px] rounded-full bg-[#576655]" />
              <div className="absolute left-7 top-10 h-8 w-8 rounded-tl-[18px] border-l-[3px] border-t-[3px] border-[#8d978c]" />
              <div className="absolute right-7 top-10 h-8 w-8 rounded-tr-[18px] border-r-[3px] border-t-[3px] border-[#8d978c]" />
              <div className="absolute bottom-10 left-7 h-8 w-8 rounded-bl-[18px] border-b-[3px] border-l-[3px] border-[#8d978c]" />
              <div className="absolute bottom-10 right-7 h-8 w-8 rounded-br-[18px] border-b-[3px] border-r-[3px] border-[#8d978c]" />
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [0, -1.5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative mt-2 h-[142px] w-[112px]"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f951.png"
                  alt="Avocado"
                  className="h-full w-full object-contain"
                />
                <div className="absolute bottom-3 left-1/2 flex h-8 w-12 -translate-x-1/2 rotate-[-8deg] items-center justify-center rounded-md bg-white shadow-[0_6px_16px_rgba(0,0,0,0.08)]">
                  <div className="flex h-4 w-8 items-center justify-between">
                    {[3, 1, 2, 1, 4, 1, 2].map((w, index) => (
                      <span key={index} className="h-full bg-black" style={{ width: `${w}px` }} />
                    ))}
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ x: ['-38%', '38%', '-38%'] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 top-1/2 h-[4px] w-[210px] -translate-y-1/2 rounded-full bg-[#274122]"
              />
            </div>
            <p className="mt-7 text-[14px] leading-[1.7] text-[#667068]">{cards[0].copy}</p>
          </motion.article>

          <motion.article
            {...cardMotion}
            transition={{ ...cardMotion.transition, delay: 0.08 }}
            className="rounded-[28px] border border-[#e4ece1] bg-[#f7fbf6] p-6 shadow-[0_16px_34px_rgba(33,48,29,0.05)] md:p-8"
          >
            <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#223222]">{cards[1].title}</h3>
            <div className="mt-8 flex h-[250px] flex-col items-center justify-center">
              <div className="relative flex h-[120px] w-full items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=150&q=80"
                  alt=""
                  className="absolute left-0 h-[58px] w-[58px] rounded-[16px] object-cover opacity-35 blur-[2px]"
                />
                <img
                  src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=150&q=80"
                  alt=""
                  className="absolute left-9 h-[72px] w-[72px] rounded-[18px] object-cover opacity-55 blur-[1px]"
                />
                <div className="relative z-10 h-[96px] w-[86px] rounded-[22px] bg-white p-2 shadow-[0_18px_32px_rgba(42,61,39,0.12)]">
                  <img
                    src="https://images.unsplash.com/photo-1590080874088-eec64895b423?auto=format&fit=crop&w=150&q=80"
                    alt="Juice"
                    className="h-full w-full rounded-[16px] object-cover"
                  />
                </div>
                <img
                  src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=150&q=80"
                  alt=""
                  className="absolute right-9 h-[72px] w-[72px] rounded-[18px] object-cover opacity-55 blur-[1px]"
                />
                <img
                  src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=150&q=80"
                  alt=""
                  className="absolute right-0 h-[58px] w-[58px] rounded-[16px] object-cover opacity-35 blur-[2px]"
                />
              </div>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#e4ece3] px-4 py-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#375f3a] text-white">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-[13px] font-semibold text-[#2c432d]">Safe to consume</span>
              </div>
            </div>
            <p className="mt-7 text-[14px] leading-[1.7] text-[#667068]">{cards[1].copy}</p>
          </motion.article>

          <motion.article
            {...cardMotion}
            transition={{ ...cardMotion.transition, delay: 0.16 }}
            className="rounded-[28px] border border-[#e4ece1] bg-[#f7fbf6] p-6 shadow-[0_16px_34px_rgba(33,48,29,0.05)] md:p-8"
          >
            <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#223222]">{cards[2].title}</h3>
            <div className="mt-8 flex h-[250px] items-center justify-center">
              <div className="relative h-[210px] w-full max-w-[280px]">
                <div className="absolute inset-x-4 top-0 space-y-3 opacity-45">
                  {['Mediterranean Quinoa Salad', 'Stuffed Bell Peppers with Rice', 'Lentil and Spinach Soup'].map((item) => (
                    <div key={item} className="rounded-full bg-[#dfe7df] px-5 py-2.5 text-center text-[11px] font-semibold text-[#5b645c]">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-2 left-4 z-10 h-[126px] w-[88px] rotate-[-11deg] overflow-hidden rounded-[18px] border-[3px] border-white shadow-[0_14px_28px_rgba(24,38,20,0.14)]">
                  <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=160&q=80"
                    alt="Snack"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-1/2 z-20 h-[138px] w-[96px] -translate-x-1/2 overflow-hidden rounded-[20px] border-[3px] border-white shadow-[0_18px_34px_rgba(24,38,20,0.16)]">
                  <img
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=160&q=80"
                    alt="Bread"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-2 right-4 z-10 h-[126px] w-[88px] rotate-[11deg] overflow-hidden rounded-[18px] border-[3px] border-white shadow-[0_14px_28px_rgba(24,38,20,0.14)]">
                  <img
                    src="https://images.unsplash.com/photo-1603048719539-9ecb4b2d3f0b?auto=format&fit=crop&w=160&q=80"
                    alt="Salad"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <p className="mt-7 text-[14px] leading-[1.7] text-[#667068]">{cards[2].copy}</p>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
