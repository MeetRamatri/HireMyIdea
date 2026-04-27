import { motion } from 'framer-motion';
import { DownloadButton, SectionHeading } from './OlivePrimitives';

const rows = [
  'Detailed Product Breakdown',
  'Comprehensive Water Data',
  'Seed Oil Free Dining Map',
  'Seed Oil Flagging',
  'Certified Lab-Testing Data'
];

const ComparisonSection = () => {
  return (
    <section id="comparison" className="px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1160px]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <SectionHeading>Olive Food Scanner App vs. The Rest</SectionHeading>
          <div className="mt-7">
            <DownloadButton />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="mt-10 overflow-hidden rounded-[30px] border border-[#e3ebe0] bg-white shadow-[0_22px_44px_rgba(35,50,31,0.06)]"
        >
          <div className="grid grid-cols-[1.2fr_0.55fr_0.55fr] border-b border-[#edf1eb] bg-[#f7fbf6] px-5 py-4 md:px-8">
            <div className="text-left text-[14px] font-semibold uppercase tracking-[0.18em] text-[#73806f]">
              Features
            </div>
            <div className="text-center text-[14px] font-semibold uppercase tracking-[0.18em] text-[#2b4128]">
              Olive
            </div>
            <div className="text-center text-[14px] font-semibold uppercase tracking-[0.18em] text-[#9ca69d]">
              Others
            </div>
          </div>
          {rows.map((row, index) => (
            <div
              key={row}
              className={`grid grid-cols-[1.2fr_0.55fr_0.55fr] items-center px-5 py-5 md:px-8 ${
                index !== rows.length - 1 ? 'border-b border-[#edf1eb]' : ''
              }`}
            >
              <p className="pr-4 text-[15px] font-medium text-[#2f3d2f] md:text-[17px]">{row}</p>
              <div className="flex justify-center">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#2f4728] text-white shadow-[0_10px_20px_rgba(47,71,40,0.18)]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
              </div>
              <div className="flex justify-center">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f1f2f1] text-[#b4b7b4]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
