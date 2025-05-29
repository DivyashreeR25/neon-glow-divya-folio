
import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, Linkedin } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400">Let's build something amazing together</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/5 border-white/10 p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/5 border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <a 
                      href="mailto:ivyashreer254@gmail.com"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      ivyashreer254@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/divyashree-r-0b194928a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      linkedin.com/in/divyashree-r-0b194928a
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Let's Collaborate!</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm always excited to work on innovative projects and connect with fellow developers. 
                Whether you have a project idea, want to collaborate, or just want to say hi, feel free to reach out!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
