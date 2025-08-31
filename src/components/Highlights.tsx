
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const highlights = [

  {
    title: "Website Design",
    description: "Designing user-friendly, visually appealing, and responsive websites that align with brand identity, UI/UX principles, and modern design trends.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["UI/UX", "Responsive"]
  },
  {
    title: "Custom Development",
    description: "Creating  HTML5, CSS3, and JavaScript websites along with custom WordPress themes and plugins.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Frontend", "Backend"]
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Improving website visibility on search engines through keyword research, on-page optimization, link building, and content strategy.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Backlinks", "Keyword Research", "On-Page SEO"]
  }
];

const Highlights = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="relative">
        <div className="absolute -bottom-20 -left-20 text-[#f0f0f0] text-[180px] md:text-[280px] font-bold leading-none z-0 select-none">
          EXPERTISE
        </div>
        
        <div className="relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#222222] mb-2">
              <span className="text-[#F97316]">Highlights</span> of my 
            </h2>
            <h2 className="text-4xl font-bold text-[#222222]">Digital Expertise</h2>
            <div className="w-16 h-1 bg-[#F97316] mt-2"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-2 border-[#222222] hover:-translate-y-2 transition-transform duration-300 bg-[#f3f3f3] overflow-hidden">
                <div className="h-52 overflow-hidden">
                  <img 
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="h-1 bg-[#F97316]"></div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {highlight.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-white text-xs border border-[#222222] text-[#222222]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[#222222]">{highlight.title}</h3>
                  <p className="text-[#555555] mb-4">{highlight.description}</p>

                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <Button className="bg-[#F97316] hover:bg-[#F97316]/90 px-6">View All Expertise</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
