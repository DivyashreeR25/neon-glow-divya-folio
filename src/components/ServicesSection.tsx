
import React from 'react';
import { Card } from '../components/ui/card';
import { Code, Pen, User } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Pen className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Clean, intuitive designs with modern aesthetics that prioritize user experience and accessibility.',
      features: ['User-Centered Design', 'Responsive Layouts', 'Modern Aesthetics', 'Accessibility Focus']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Design & Development',
      description: 'From responsive layouts to dynamic applications, bringing your ideas to life with cutting-edge technologies.',
      features: ['Responsive Design', 'Dynamic Applications', 'Modern Frameworks', 'Performance Optimization']
    },
    {
      icon: <User className="w-8 h-8" />,
      title: 'Microservices Architecture',
      description: 'Scalable backend systems designed for large applications with focus on maintainability and performance.',
      features: ['Scalable Systems', 'API Development', 'Database Design', 'Cloud Integration']
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-400">Expertise in diverse tech domains</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-white/5 border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
