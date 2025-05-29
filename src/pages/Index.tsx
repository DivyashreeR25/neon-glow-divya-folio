
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="relative">
        {/* Background animated elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/3 w-36 h-36 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <Header />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
