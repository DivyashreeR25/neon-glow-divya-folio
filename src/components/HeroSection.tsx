
import React from 'react';
import { Button } from '../components/ui/button';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center">
        <div className="relative mb-8">
          {/* Profile Picture with glow effect */}
          <div className="relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                {/* Placeholder for profile image - will be replaced once image is provided */}
                <div className="w-44 h-44 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-6xl font-bold text-white">
                  DR
                </div>
              </div>
            </div>
            {/* Floating elements around profile */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-400 rounded-full animate-bounce delay-2000"></div>
          </div>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="block text-gray-300">Hello, I'm</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Divyashree R
            </span>
            <span className="block text-3xl md:text-4xl text-gray-400 mt-2">
              Full-Stack Developer
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Empowering Tech Through Full-Stack Innovation. Computer Science student with expertise in 
            Java, Python, and modern web technologies. Building scalable solutions with passion and precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              View Portfolio
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </Button>
          </div>

          {/* Floating stats */}
          <div className="flex justify-center space-x-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">9.2</div>
              <div className="text-sm text-gray-400">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">2+</div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">5+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
