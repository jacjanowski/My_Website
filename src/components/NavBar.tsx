
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-3 bg-white shadow-md' : 'py-6 bg-transparent'
    }`}>
      <div className="px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <a href="#" className={`font-bold text-2xl ${scrolled ? 'text-[#222222]' : 'text-white'}`}>
          JJ<span className="text-[#F97316]">.</span>
        </a>
        
        {isMobile ? (
          <>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`${scrolled ? 'text-[#222222]' : 'text-white'} focus:outline-none`}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
            
            {menuOpen && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block py-2 text-[#222222] hover:text-[#F97316]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button className="mt-4 w-full bg-[#F97316] hover:bg-[#F97316]/90">
                  Resume
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`${
                  scrolled ? 'text-[#222222]' : 'text-white'
                } hover:text-[#F97316] transition-colors`}
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-[#F97316] hover:bg-[#F97316]/90">
              Resume
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
