
import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_glcja9a',
        'template_bqkdedw',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        '1rhnoMV8aIifrL5xQ'
      );
      
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact Me
            </span>
          </h2>
          <p className="text-xl text-gray-400">Let's build something amazing together</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/5 border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          {/* Contact Info & Let's Collaborate */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-white/5 border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a href="mailto:divyashreer254@gmail.com" className="text-white hover:text-purple-400 transition-colors">
                      divyashreer254@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/divyashree-r-0b194928a" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/divyashree-r-0b194928a
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Let's Collaborate Section - Matching Send a Message styling */}
            <Card className="bg-white/5 border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Collaborate</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm always excited to work on innovative projects and connect 
                with fellow developers. Whether you have a project idea, want 
                to collaborate, or just want to say hi, feel free to reach out!
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                  Full-Stack Development
                </span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30">
                  Web Applications
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                  Blockchain Projects
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
