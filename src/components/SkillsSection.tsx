
import React from 'react';
import { Card } from '../components/ui/card';

const SkillsSection = () => {
  const skills = [
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-orange-500' },
    { name: 'Python', level: 85, color: 'from-blue-400 to-blue-600' },
    { name: 'Core Java', level: 88, color: 'from-red-400 to-red-600' },
    { name: 'C++', level: 80, color: 'from-purple-400 to-purple-600' },
    { name: 'Solidity', level: 75, color: 'from-gray-400 to-gray-600' },
    { name: 'MySQL', level: 85, color: 'from-green-400 to-green-600' },
    { name: 'TensorFlow', level: 70, color: 'from-orange-400 to-orange-600' },
    { name: 'OpenCV', level: 75, color: 'from-teal-400 to-teal-600' },
  ];

  const specializations = [
    'Web Application Development',
    'Microservices Architecture',
    'Blockchain Development',
    'Machine Learning',
    'Computer Vision',
    'Full-Stack Development'
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <Card className="bg-white/5 border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Specializations */}
          <Card className="bg-white/5 border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6">Specializations</h3>
            <div className="grid gap-4">
              {specializations.map((spec, index) => (
                <div
                  key={spec}
                  className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-4 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-gray-300 font-medium">{spec}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
