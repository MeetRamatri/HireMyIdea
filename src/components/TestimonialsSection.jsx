import { motion } from 'framer-motion';
import { SectionHeading } from './OlivePrimitives';

const reviews = [
  {
    name: 'Megan L.',
    quote:
      'Olive has completely changed the way I shop for my family. I feel confident knowing exactly what’s in our food before it ever hits our pantry.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80',
    position: 'top'
  },
  {
    name: 'Tina B.',
    quote:
      'Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It’s that easy.',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80',
    position: 'middle'
  },
  {
    name: 'Lila M.',
    quote:
      'After just a week of using Olive, I feel more in control of my family’s nutrition than ever before. It’s empowering to make informed choices so quickly.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    position: 'bottom'
  }
];

const Stars = () => (
  <div className="mt-2 flex gap-1 text-[#efc84b]">
    {Array.from({ length: 5 }).map((_, index) => (
      <svg key={index} viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const cardPosition = {
  top: 'md:absolute md:right-0 md:top-[-22px]',
  middle: 'md:ml-10',
  bottom: 'md:absolute md:bottom-[-22px] md:left-0'
};

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1210px]">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[640px]"
          >
            <div className="mx-auto w-full max-w-[560px] overflow-hidden rounded-[34px] bg-[#f0f1ef] shadow-[0_24px_44px_rgba(34,49,28,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1544281679-0df426c19fce?auto=format&fit=crop&w=1000&q=80"
                alt="Testimonials Hero"
                className="h-[520px] w-full object-cover grayscale"
              />
            </div>

            <div className="mt-6 space-y-5 md:mt-0">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.56, ease: [0.16, 1, 0.3, 1], delay: 0.12 * (index + 1) }}
                  className={`w-full max-w-[330px] rounded-[24px] border border-[#ecefed] bg-white p-5 shadow-[0_18px_36px_rgba(30,44,25,0.08)] ${cardPosition[review.position]}`}
                >
                  <p className="text-[13px] leading-[1.7] text-[#667068]">{review.quote}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <img src={review.image} alt={review.name} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <p className="text-[13px] font-semibold text-[#253624]">{review.name}</p>
                      <Stars />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="lg:pl-10"
          >
            <SectionHeading className="max-w-[520px]">Real Mothers Real Results</SectionHeading>
            <p className="mt-6 max-w-[470px] text-[16px] leading-[1.8] text-[#69736c]">
              Join thousands of satisfied parents who trust Olive to help them make healthier
              choices for their families.
            </p>
            <a
              href="#reviews"
              className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-[#46633f] transition-transform hover:translate-x-0.5"
            >
              read all 3,147+ reviews
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
