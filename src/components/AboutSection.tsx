
import React from 'react';
import { Card } from '../components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400">Designing Solutions, Not Just Visuals</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full-stack developer and Computer Science student with a strong foundation 
              in modern web technologies. My journey in tech is driven by curiosity and a desire to create 
              meaningful solutions that make a difference.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With expertise in Java, Python, and databases, I specialize in building user-friendly 
              applications and managing projects end-to-end. I'm a team-oriented, analytical problem-solver 
              who thrives on new challenges and continuous learning.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white">B.E. in Computer Science</h4>
                  <p className="text-gray-400">MVJ College of Engineering (2022–2026)</p>
                  <p className="text-purple-400 font-semibold">CGPA: 9.2</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">PUC</h4>
                  <p className="text-gray-400">Narayana Residential Pre-University</p>
                  <p className="text-pink-400 font-semibold">93%</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">SSLC</h4>
                  <p className="text-gray-400">Sharada Vidya Mandira</p>
                  <p className="text-blue-400 font-semibold">94%</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
