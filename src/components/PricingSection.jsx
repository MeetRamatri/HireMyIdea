import { motion } from 'framer-motion';
import { SectionHeading } from './OlivePrimitives';

const items = [
  'Unlimited Scans',
  'Unlimited Database Searches',
  'Comprehensive Lab-Testing Data'
];

const PricingSection = () => {
  return (
    <section id="pricing" className="px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-[980px]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <SectionHeading>Healthy Choices Honest Pricing</SectionHeading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="relative mx-auto mt-12 max-w-[540px] rounded-[34px] border border-[#e2e9df] bg-[#f6faf5] p-8 shadow-[0_26px_46px_rgba(34,49,28,0.08)] md:p-10"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1fad2.png"
            alt="Olive Icon"
            className="absolute -top-12 left-[-10px] h-20 w-20 drop-shadow-[0_10px_18px_rgba(35,53,27,0.14)]"
          />

          <p className="text-[15px] font-medium text-[#6d756f]">monthly</p>
          <div className="mt-3 flex items-end justify-center gap-2 text-center">
            <span className="text-[58px] font-semibold leading-none tracking-[-0.06em] text-[#223322]">
              $14.99
            </span>
            <span className="pb-2 text-[15px] font-medium text-[#818982]">/monthly</span>
          </div>

          <ul className="mt-9 space-y-4 text-left">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-[18px] bg-white/82 px-4 py-3 shadow-[0_10px_18px_rgba(40,56,36,0.04)]">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#395c30] text-white">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-[15px] font-medium text-[#243524]">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://signup.oliveapp.com/olive-onboarding/"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#263d18] px-6 py-4 text-[15px] font-semibold text-white shadow-[0_14px_30px_rgba(38,61,24,0.18)] transition-transform hover:-translate-y-0.5"
          >
            Subscribe
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
