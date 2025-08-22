
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-12 lg:px-24 bg-[#f3f3f3]">
      <div className="w-full md:w-1/2 space-y-6 mb-10 md:mb-0">
        <h1 className="text-5xl md:text-7xl font-bold text-[#222222]">
          <span className="block">Jacob Janowski</span>
          <span className="text-[#F97316] mt-1 block">Web Developer</span>
        </h1>
        <p className="text-xl text-[#555555] max-w-md">
          Computer Science graduate and passionate web developer creating modern, responsive web applications.
        </p>
        <div className="flex gap-4">
          <Button className="bg-[#F97316] hover:bg-[#F97316]/90">View Projects</Button>
          <Button variant="outline" className="border-[#222222] text-[#222222] hover:bg-[#222222] hover:text-white">Contact Me</Button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative">
          <div className="absolute inset-0 bg-[#F97316] translate-x-4 translate-y-4 z-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
            alt="Developer Profile" 
            className="w-64 h-80 md:w-80 md:h-96 object-cover object-center relative z-10 border-4 border-[#222222]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
