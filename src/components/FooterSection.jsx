import { motion } from 'framer-motion';
import { OliveLogo } from './OlivePrimitives';

const toolLinks = [
  'Explore Foods',
  'Allergy Scanner App',
  'Gluten Free Scanner',
  'Dairy Free App',
  'Food Ingredient Checker'
];

const aboutLinks = ['Blog', 'Email us', 'Contact us'];
const legalLinks = ['Terms of Service', 'Privacy Policy', 'Refund Policy', 'Medical Consent', 'Sign in'];

const FooterSection = () => {
  return (
    <footer className="px-4 pb-8 pt-6 md:px-6 md:pb-12">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-[1160px] rounded-[34px] bg-[#43694b] px-6 py-10 text-white shadow-[0_26px_46px_rgba(26,37,22,0.12)] md:px-12 md:py-14"
      >
        <div className="grid gap-10 md:grid-cols-[0.95fr_0.65fr_1fr]">
          <div>
            <h4 className="text-[15px] font-semibold">Explore More Olive Tools</h4>
            <ul className="mt-5 space-y-3 text-[14px] text-white/78">
              {toolLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[15px] font-semibold">About</h4>
            <ul className="mt-5 space-y-3 text-[14px] text-white/78">
              {aboutLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <OliveLogo compact />
            <p className="mt-4 max-w-[280px] text-[14px] leading-[1.7] text-white/75">
              Get the latest lab testing data sent directly to your inbox.
            </p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
              <input
                type="email"
                placeholder="Enter Email address"
                className="flex-1 rounded-full border border-white/12 bg-white/10 px-5 py-3.5 text-[14px] text-white placeholder:text-white/55 outline-none transition-colors focus:border-[#dce67a]"
              />
              <button
                type="submit"
                className="rounded-full bg-white px-6 py-3.5 text-[14px] font-semibold text-[#365238] transition-transform hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-white/12 pt-6 text-[13px] text-white/60 md:flex md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-5 gap-y-3">
            {legalLinks.map((item) => (
              <li key={item}>
                <a href="#" className="transition-colors hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 md:mt-0">© 2026 Olive Inc.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
