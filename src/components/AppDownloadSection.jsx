import { motion } from 'framer-motion';
import { DownloadButton, SectionHeading } from './OlivePrimitives';

const checklist = [
  'Effortless food scanning',
  'Peace of mind for parents',
  'Healthy product recommendations'
];

const AppDownloadSection = () => {
  return (
    <section id="download" className="px-4 py-14 md:px-6 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-[1160px] overflow-hidden rounded-[34px] shadow-[0_26px_48px_rgba(20,26,18,0.12)]"
      >
        <div className="relative min-h-[520px]">
          <img
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
            alt="Family enjoying a meal"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/52 to-black/18" />

          <div className="relative z-10 max-w-[620px] px-7 py-14 text-white md:px-14 md:py-20">
            <SectionHeading className="text-white">Keep your family safe with Olive</SectionHeading>
            <ul className="mt-8 space-y-4 text-[16px] font-medium md:text-[18px]">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#263d18]">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <DownloadButton inverse />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AppDownloadSection;
