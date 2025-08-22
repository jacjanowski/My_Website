
import React from 'react';

const hobbies = ["Coding", "DJing", "Gaming", "Tennis", "Soccer", "Fitness", "Traveling"];

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-[#f3f3f3] overflow-hidden">
      <div className="relative">
        <div className="absolute -bottom-20 -left-20 text-[#f0f0f0] text-[180px] md:text-[280px] font-bold leading-none z-0 select-none">
          ABOUT
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#222222] mb-2">About Me</h2>
            <div className="w-16 h-1 bg-[#F97316]"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <p className="text-[#555555] mb-6 text-lg">
                I'm a web developer with a Bachelor's degree in Computer Science. I specialize in creating responsive, user-friendly web applications using modern technologies and frameworks.
              </p>
              <p className="text-[#555555] mb-6 text-lg">
                With a strong foundation in both frontend and backend development, I bring ideas to life with clean code and thoughtful design. I'm passionate about continuous learning and staying up-to-date with industry trends.
              </p>
            </div>
            
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-6 text-[#222222]">Hobbies & Interests</h3>
              <div className="flex flex-wrap gap-3">
                {hobbies.map((hobby, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white border-2 border-[#222222] text-[#222222] inline-block"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
