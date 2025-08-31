
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  // Stats to display
  const stats = [
    { number: "6+", label: "Years of Experience" },
    { number: "48+", label: "Projects Completed" },
    { number: "15+", label: "Websites Built" }
  ];

  return (
    <section className="relative w-full bg-gradient-to-r from-[#1a2a3a] to-[#2c3e50] text-white overflow-hidden font-['Inter_Tight']">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
          alt="Background image of modern architecture" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative z-10 px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            I'm Jacob, a
            <br />
            <span className="text-[#F97316]">Front-End Developer</span>.
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Transforming ideas into powerful digital experiences with modern web development. 
            Creating stunning, responsive websites that drive results.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <a href="#projects"><Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-white px-8 py-6 h-auto text-lg">
              View Projects
            </Button></a>
            <a href="#contact"><Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-black px-8 py-6 h-auto text-lg transition-colors"
            >
              Contact Me
            </Button></a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl">
          {stats.map((stat, index) => (
            <div key={index} className="border-l-2 border-[#F97316] pl-4">
              <div className="text-3xl md:text-4xl font-bold text-white">{stat.number}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
