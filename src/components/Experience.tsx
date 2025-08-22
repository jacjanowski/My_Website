
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Vercel"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-[#222222] mb-2">Experience</h2>
        <div className="w-16 h-1 bg-[#F97316]"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="border-2 border-[#222222] hover:-translate-y-1 transition-transform bg-[#f3f3f3] overflow-hidden">
            <div className="h-2 bg-[#F97316]"></div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-[#222222]">{exp.title}</h3>
              <ul className="space-y-2">
                {exp.skills.map((skill, idx) => (
                  <li key={idx} className="text-[#555555] flex items-center">
                    <span className="w-2 h-2 bg-[#F97316] mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
