
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 bg-[#222222] text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-bold text-xl">Jacob Janowski</p>
          <p className="text-sm text-gray-400">Front-End Developer</p>
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/jacjanowski" className="hover:text-[#F97316] transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/jacob-janowski-uic/" className="hover:text-[#F97316] transition-colors">LinkedIn</a>
        </div>
        
        <div className="text-sm text-gray-400">
          © {currentYear} All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
