
import React from 'react';

const TechStack = () => {
  // Tech stack with devicon.dev icons - first row (6 icons)
  const techStackFirstRow = [
    { name: "HTML", iconClass: "devicon-html5-plain colored" },
    { name: "CSS", iconClass: "devicon-css3-plain colored" },
    { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
    { name: "React", iconClass: "devicon-react-original colored" },
    { name: "WordPress", iconClass: "devicon-wordpress-plain" },
    { name: "jQuery", iconClass: "devicon-jquery-plain colored" },
  ];
  
  // Tech stack second row (7 icons)
  const techStackSecondRow = [
    { name: "Bootstrap", iconClass: "devicon-bootstrap-plain colored" },
    { name: "Tailwind", iconClass: "devicon-tailwindcss-plain colored" },
    { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
    { name: "Express", iconClass: "devicon-express-original" },
    { name: "MySQL", iconClass: "devicon-mysql-plain colored" },
    { name: "Python", iconClass: "devicon-python-plain colored" },
    // HubSpot is added separately in the JSX
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-[#222222] mb-2">Trusted tech stack</h3>
          <div className="w-24 h-1 bg-[#F97316] mx-auto"></div>
        </div>
        
        {/* First row - 6 icons */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8">
          {techStackFirstRow.map((tech, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div className="bg-gray-100 rounded-full p-4 w-16 h-16 flex items-center justify-center hover:bg-[#F97316]/20 transition-colors">
                <i className={`${tech.iconClass} text-3xl`}></i>
              </div>
              <span className="mt-2 text-sm text-[#555555]">{tech.name}</span>
            </div>
          ))}
        </div>
        
        {/* Second row - 7 icons (including HubSpot) */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {techStackSecondRow.map((tech, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div className="bg-gray-100 rounded-full p-4 w-16 h-16 flex items-center justify-center hover:bg-[#F97316]/20 transition-colors">
                <i className={`${tech.iconClass} text-3xl`}></i>
              </div>
              <span className="mt-2 text-sm text-[#555555]">{tech.name}</span>
            </div>
          ))}
          
          {/* HubSpot icon */}
          <div className="text-center flex flex-col items-center">
            <div className="bg-gray-100 rounded-full p-4 w-16 h-16 flex items-center justify-center hover:bg-[#F97316]/20 transition-colors">
              <img 
                src="/lovable-uploads/bb922437-98a1-4410-9d1f-11ca1e6634b3.png" 
                alt="HubSpot Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="mt-2 text-sm text-[#555555]">HubSpot</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
