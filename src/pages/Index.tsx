
import React from 'react';
import NavBar from '@/components/NavBar';
import Header from '@/components/Header';
import TechStack from '@/components/TechStack';
import Highlights from '@/components/Highlights';
import Projects from '@/components/Projects';
import Amenities from '@/components/Amenities';
import AboutMe from '@/components/AboutMe';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      <NavBar />
      <Header />
      <TechStack />
      <Highlights />
      <Projects />
      {/* <Amenities /> */}
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
