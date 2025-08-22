
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce application with payment processing",
    tech: "React, Node.js, MongoDB",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    tech: "Next.js, TypeScript, TailwindCSS",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Weather Application",
    description: "Real-time weather app with location services",
    tech: "React, Redux, Weather API",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-[#222222] text-white">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">Projects</h2>
        <div className="w-16 h-1 bg-[#F97316]"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="border-0 bg-[#333333] hover:-translate-y-2 transition-transform duration-300">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <p className="text-xs text-[#F97316] mb-4">{project.tech}</p>
              <Button variant="ghost" className="text-white hover:text-[#F97316] group px-6">
                View Project 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button className="bg-[#F97316] hover:bg-[#F97316]/90 px-6">View All Projects</Button>
      </div>
    </section>
  );
};

export default Projects;
