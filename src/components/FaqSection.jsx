import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DownloadButton, SectionHeading } from './OlivePrimitives';

const faqs = [
  {
    question: 'What is the Food Scanner App and how does it work?',
    answer:
      'Olive allows you to point your phone’s camera at any food product barcode. It instantly analyzes the ingredients against its database to flag additives, allergens, and processing concerns while surfacing a simple score.'
  },
  {
    question: 'How does Olive ensure the accuracy of the Food Scanner App results?',
    answer:
      'The database is continuously updated and reviewed using expert-backed nutritional standards and multiple trusted sources so ingredient evaluations stay current and explainable.'
  },
  {
    question: 'Which products can I scan with the Food Scanner App?',
    answer:
      'You can scan most packaged grocery products with a barcode. Olive’s database is broad and continues to expand based on the items families search and scan the most.'
  },
  {
    question: 'Can the Food Scanner App be customized to my family’s dietary needs?',
    answer:
      'Yes. Olive can help you account for preferences and ingredient sensitivities so the guidance you receive reflects the way your household actually shops.'
  },
  {
    question: 'Is my data secure when I use Olive?',
    answer:
      'Olive treats scan history and profile data as private and uses standard protections designed to keep your information secure.'
  },
  {
    question: 'When will the Android version of the Food Scanner App be available?',
    answer:
      'The live site positions iOS as the current platform focus. Android availability is presented as something the team is continuing to work toward.'
  }
];

const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#e6ebe3]">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="pr-4 text-[15px] font-medium leading-[1.5] text-[#2e402f] md:text-[16px]">
          {faq.question}
        </span>
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#263d18] text-white">
          <svg viewBox="0 0 24 24" className={`h-4 w-4 transition-transform ${open ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.6">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-[14px] leading-[1.75] text-[#68716a] md:text-[15px]">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection = () => {
  return (
    <section id="faq" className="px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1160px] rounded-[34px] bg-[#fdfaf3] px-5 py-14 md:px-14 md:py-20">
        <div className="mx-auto max-w-[620px] text-center">
          <SectionHeading>Frequently Asked Questions by Parents</SectionHeading>
          <div className="mt-8">
            <DownloadButton />
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-[860px] border-t border-[#e6ebe3]">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
