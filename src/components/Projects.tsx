
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { link } from 'fs';

const projects = [
  {
    title: "YelpCamp Clone",
    description: "Full-stack API project for campground reviews. Users can create, read, update, and delete campgrounds and reviews after creating their own profiles Uses MongoDB for database storage.",
    tech: "HTML, CSS, JS, Bootstrap, Express, Node.js, MongoDB",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    projectLink: "https://github.com/jacjanowski/Yelpcamp_Revised"
  },
  {
    title: "Movie Database",
    description: "Movie search application using the TheMovie API to fetch and display movie details based on user queries.",
    tech: "React, TheMovie API",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    projectLink: "https://github.com/jacjanowski/Movie_API_Project/tree/main/Learn-React-In-One-Project-main"
  },
  {
    title: "History Timeline",
    description: "Gets historical events that happen on a particular day of the year. Find Birthdays, deaths, and Events that happened on that day.",
    tech: "HTML, CSS, JS, Wikipedia API",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    projectLink: "https://github.com/jacjanowski/History_Timeline_API"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-[#222222] text-white">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">Web Projects</h2>
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
              <a href={project.projectLink} target='_blank'><Button variant="ghost" className="text-white hover:text-[#F97316] group px-6">
                View Project 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button></a>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a href="https://github.com/jacjanowski" target='_blank'><Button className="bg-[#F97316] hover:bg-[#F97316]/90 px-6">View All Projects</Button></a>
      </div>
    </section>
  );
};

export default Projects;
