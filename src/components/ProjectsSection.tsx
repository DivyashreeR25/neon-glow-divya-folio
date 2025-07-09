
import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Blockchain Document Verification System',
      description: 'Smart contract-based secure document hashing & verification system with QR code support for enhanced security and transparency.',
      technologies: ['Solidity', 'JavaScript', 'Hardhat', 'Blockchain'],
      status: 'Completed',
      githubLink: '#',
      features: [
        'Smart contract-based verification',
        'QR code integration',
        'Secure document hashing',
        'Transparent verification process'
      ]
    },
    {
  "title": "AI-Powered Document Summarizer",
  "description": "An intelligent system that uses NLP techniques to generate concise summaries from large documents, enabling quick content understanding.",
  "technologies": ["Python", "NLTK", "spaCy", "Flask", "Machine Learning"],
  "status": "Completed",
  "githubLink": "#",
  "features": [
    "Extractive and abstractive summarization",
    "Supports multiple document formats (PDF, TXT)",
    "Web-based user interface for easy access",
    "Fast and accurate summary generation"
  ]
},
    {
      title: 'PranaEdge Wellness App',
      description: 'Comprehensive wellness application featuring nutrition guidance, diet tracking, sleep monitoring, and AI-powered yoga pose detection.',
      technologies: ['Python', 'JavaScript', 'TensorFlow', 'OpenCV', 'MediaPipe'],
      status: 'In Progress',
      githubLink: '#',
      features: [
        'Nutrition guidance system',
        'Diet & sleep tracking',
        'Yoga pose detection',
        'Personalized recommendations'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400">Innovative solutions built with passion</p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-white/5 border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-pink-400">Key Features</h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
