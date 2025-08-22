
import React from 'react';
import { Wifi, Bed, AirVent, Dumbbell, Star, Waves } from "lucide-react";

const Amenities = () => {
  const amenities = [
    {
      icon: <Wifi className="h-8 w-8 text-[#F97316]" />,
      title: "Free Wi-Fi",
      description: "Stay connected anytime, anywhere."
    },
    {
      icon: <Bed className="h-8 w-8 text-[#F97316]" />,
      title: "Cozy Bedding",
      description: "Thoughtfully designed spaces for a relaxing stay."
    },
    {
      icon: <AirVent className="h-8 w-8 text-[#F97316]" />,
      title: "Air Conditioning",
      description: "A peaceful escape surrounded by nature."
    },
    {
      icon: <Waves className="h-8 w-8 text-[#F97316]" />,
      title: "Swimming Pool",
      description: "Relax and unwind with a refreshing dip."
    },
    {
      icon: <Dumbbell className="h-8 w-8 text-[#F97316]" />,
      title: "Fitness Center",
      description: "Genuine experiences rooted in local culture."
    },
    {
      icon: <Star className="h-8 w-8 text-[#F97316]" />,
      title: "Modern Design",
      description: "Start your day with a delicious meal."
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#222222] mb-2">Everything You Need</h2>
          <div className="w-24 h-1 bg-[#F97316] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg flex flex-col items-center text-center bg-[#F1F1F1] hover:bg-black hover:text-white transition-all duration-300 cursor-pointer group"
            >
              <div className="mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl mb-2 group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-[#555555] group-hover:text-white">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
