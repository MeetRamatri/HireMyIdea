import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { OliveLogo } from './OlivePrimitives';

const mobileLinks = [
  'How It Works',
  'Benefits',
  'Reviews',
  'Pricing',
  'FAQ'
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-20 flex items-center justify-between">
      <a href="#hero" aria-label="Return to homepage">
        <OliveLogo />
      </a>

      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((value) => !value)}
        className="rounded-full p-2 text-[#1f2f1f] transition-colors hover:bg-black/5"
      >
        {open ? <X className="h-7 w-7 stroke-[2.2]" /> : <Menu className="h-7 w-7 stroke-[2.2]" />}
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+12px)] w-[240px] rounded-[24px] border border-[#e0e7dc] bg-white/95 p-4 shadow-[0_24px_48px_rgba(20,30,20,0.12)] backdrop-blur-sm">
          <div className="space-y-1">
            {mobileLinks.map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-[15px] font-medium text-[#29402b] transition-colors hover:bg-[#f3f7f1]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
