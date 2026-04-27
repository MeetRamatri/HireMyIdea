import { motion } from 'framer-motion';
import { DownloadButton, SectionHeading } from './OlivePrimitives';

const positives = [
  'Cholesterol-Free',
  'High Fibre',
  'No MSG',
  'Organic Ingredients',
  'Low PFAS',
  'Plant-Based',
  'Gluten-Free',
  '100% Whole Grain',
  'Non-GMO',
  'Rich in Antioxidants'
];

const negatives = [
  'Artificial Colors',
  'Sodium Nitrite',
  'TBHQ',
  'Monosodium Glutamate',
  'Potassium Sorbate',
  'BHA',
  'Carrageenan',
  'Potassium Bromate',
  'Aspartame',
  'Saccharin',
  'Palm Oil',
  'Sodium Benzoate',
  'Xanthan Gum'
];

const benefits = [
  {
    title: 'Achieve Nutritional Clarity',
    points: [
      'Olive breaks down every ingredient into clear, actionable information.',
      'Olive scores products out of 100 based on additives, seed oils, processing level, and detected toxins.',
      'Our ranking system is designed by registered holistic health experts, ensuring your family can make informed decisions.'
    ]
  },
  {
    title: 'Proactive Ingredient Filtering',
    points: [
      'Olive flags harmful additives and controversial ingredients before they become mainstream concerns.',
      'Keeps you ahead of potential food safety concerns.',
      'Gives busy parents the confidence to make safer food choices every time.'
    ]
  },
  {
    title: 'Real Health Outcomes for Your Family',
    points: [
      'Empowers parents to feel more in control of their family’s health.',
      'Delivers personalized suggestions for healthier food choices.',
      'Promotes long-term well-being through informed, balanced decisions.'
    ]
  }
];

const FeaturesSection = () => {
  return (
    <section id="benefits" className="px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1220px]">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeading>Health Benefits of Using Olive</SectionHeading>
            <p className="mt-5 max-w-[560px] text-[15px] leading-[1.75] text-[#69736c] md:text-[18px]">
              Olive proactively flags harmful ingredients and offers personalized recommendations,
              empowering you to make better choices for your family&apos;s health.
            </p>
            <div className="mt-7">
              <DownloadButton />
            </div>

            <div className="mt-9 rounded-[28px] border border-[#e3ebe0] bg-[#f7fbf6] p-6 shadow-[0_16px_36px_rgba(35,50,31,0.05)]">
              <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-[#243726]">
                {benefits[0].title}
              </h3>
              <ul className="mt-5 space-y-4 text-[15px] leading-[1.7] text-[#667068]">
                {benefits[0].points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[#7fa34a]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="space-y-6"
          >
            <div className="rounded-[30px] border border-[#e3ebe0] bg-[#f7fbf6] p-6 shadow-[0_18px_38px_rgba(35,50,31,0.05)] md:p-7">
              <div className="grid items-center gap-6 md:grid-cols-[0.8fr_1.2fr]">
                <div className="overflow-hidden rounded-[24px] bg-white p-4 shadow-[0_12px_28px_rgba(26,36,24,0.06)]">
                  <div className="flex h-[210px] items-center justify-center rounded-[22px] bg-[#f5f8f4]">
                    <div className="relative flex h-[170px] w-[170px] items-center justify-center rounded-full bg-[conic-gradient(#314c2a_0deg,#314c2a_188deg,#e4ece4_188deg,#e4ece4_360deg)]">
                      <div className="flex h-[124px] w-[124px] flex-col items-center justify-center rounded-full bg-white shadow-[inset_0_0_0_1px_rgba(221,231,220,0.7)]">
                        <p className="text-[44px] font-semibold leading-none tracking-[-0.05em] text-[#233724]">
                          52
                        </p>
                        <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#97a08f]">
                          /100
                        </p>
                        <p className="mt-2 text-[14px] font-semibold text-[#46633f]">Excellent</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[24px] bg-white p-5 shadow-[0_12px_28px_rgba(26,36,24,0.06)]">
                  <div className="overflow-hidden rounded-[20px] bg-[#f4f7f3] p-3">
                    <img
                      src="https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=300&q=80"
                      alt="Straus Ice Cream"
                      className="h-[192px] w-full rounded-[18px] object-cover"
                    />
                  </div>
                  <p className="mt-4 text-[15px] font-semibold text-[#283b29]">Straus Ice Cream</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-[#e3ebe0] bg-[#f7fbf6] p-6 shadow-[0_16px_36px_rgba(35,50,31,0.05)]">
                <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-[#243726]">
                  {benefits[1].title}
                </h3>
                <ul className="mt-5 space-y-4 text-[15px] leading-[1.7] text-[#667068]">
                  {benefits[1].points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[#7fa34a]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[28px] border border-[#e3ebe0] bg-[#f7fbf6] p-6 shadow-[0_16px_36px_rgba(35,50,31,0.05)]">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="mb-4 text-[14px] font-semibold uppercase tracking-[0.16em] text-[#516651]">
                      Positives
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {positives.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-[#e5efe5] px-3 py-1.5 text-[12px] font-medium text-[#345336]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-4 text-[14px] font-semibold uppercase tracking-[0.16em] text-[#a05855]">
                      Negatives
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {negatives.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-[#f4e7e5] px-3 py-1.5 text-[12px] font-medium text-[#8a4e48]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#e3ebe0] bg-[#f7fbf6] p-6 shadow-[0_16px_36px_rgba(35,50,31,0.05)]">
              <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-[#243726]">
                {benefits[2].title}
              </h3>
              <ul className="mt-5 space-y-4 text-[15px] leading-[1.7] text-[#667068]">
                {benefits[2].points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[#7fa34a]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
