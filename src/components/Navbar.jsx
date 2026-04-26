import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions', hasDropdown: true },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '#blog', hasDropdown: true },
    { name: 'Restaurants', href: '#restaurants' },
    { name: 'Food', href: '#food', hasDropdown: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#F9F5EE]/95 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.05)] py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer">
            <div className="flex items-center -mr-[2px]">
              <svg width="34" height="38" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Body */}
                <path d="M16 8.5C22.5 8.5 27 13.5 27 20.5C27 27.5 22.5 33 16 33C9.5 33 5 27.5 5 20.5C5 13.5 9.5 8.5 16 8.5Z" fill="#A8D96C"/>
                {/* Leaf */}
                <path d="M16 8C16 8 13.5 1.5 18.5 1.5C22 1.5 23.5 4.5 19 6.5C18 7 16 8 16 8Z" fill="#2D7A4F"/>
                {/* Face */}
                <circle cx="11.5" cy="18" r="1.5" fill="#1A1A1A"/>
                <circle cx="20.5" cy="18" r="1.5" fill="#1A1A1A"/>
                <path d="M14 22C14 22 15 23.5 16 23.5C17 23.5 18 22 18 22" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-extrabold text-[28px] tracking-tight text-[#A8D96C]" style={{ letterSpacing: '-0.03em' }}>live</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center text-[#4B5563] hover:text-[#1A1A1A] transition-colors text-[15px] font-medium"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="ml-1 w-4 h-4 text-[#6B7280] stroke-[2.5]" />}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-7">
            <a href="#signin" className="text-[#4B5563] hover:text-[#1A1A1A] text-[15px] font-medium transition-colors">
              Sign in
            </a>
            <a
              href="#download"
              className="group flex items-center gap-1.5 bg-[#1B3624] text-white rounded-full px-5 py-2.5 text-[15px] font-medium hover:bg-[#132619] transition-all shadow-sm"
            >
              Get Olive
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform stroke-[2]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#1A1A1A] focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#F9F5EE] shadow-lg border-t border-gray-200">
          <div className="px-6 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center justify-between px-4 py-3 text-lg font-medium text-[#1A1A1A] hover:bg-black/5 rounded-xl transition-colors"
                onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-5 h-5 text-gray-500" />}
              </a>
            ))}
            <div className="pt-6 space-y-4 px-4 border-t border-gray-200 mt-4">
              <a
                href="#signin"
                className="block w-full text-center py-3 text-lg font-medium text-[#1A1A1A] border border-gray-300 rounded-xl hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign in
              </a>
              <a
                href="#download"
                className="flex items-center justify-center gap-2 w-full bg-[#1B3624] text-white rounded-xl px-5 py-3 text-lg font-medium hover:bg-[#132619] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Olive
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
