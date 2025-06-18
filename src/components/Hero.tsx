import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import myImage from '../assets/my-image.png';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary-bg dark:bg-gray-900">
      {/* Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-shape-peach/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-10 w-48 h-48 bg-shape-cream/40 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-1/3 w-32 h-32 bg-accent-1/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-accent-2/30 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content - Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-text-black dark:text-white mb-6"
            >
              Hi, I'm{' '}
              <span className="text-accent-coral">Varun Jha</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-text-gray dark:text-gray-300 mb-8"
            >
              Front-end Developer & UI/UX Enthusiast
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-text-gray dark:text-gray-400 mb-12 max-w-2xl"
            >
              I create digital experiences that combine beautiful design with robust functionality. 
              Committed about modern web technologies and user-centered design principles.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-accent-coral text-accent-coral hover:bg-accent-coral hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex gap-6 mt-12 justify-center lg:justify-start"
            >
              <a href="https://github.com/varunjha-dev" className="text-text-gray hover:text-accent-coral transition-colors duration-300 hover:scale-110 transform">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/varunjha-dev/" className="text-text-gray hover:text-accent-coral transition-colors duration-300 hover:scale-110 transform">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-text-gray hover:text-accent-coral transition-colors duration-300 hover:scale-110 transform">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image - Right Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 max-w-md"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-coral/20 to-accent-1/20 rounded-full blur-xl"></div>
              <img
                src={myImage}
                alt="Varun Jha - Professional Developer"
                className="relative z-10 w-full h-auto rounded-full shadow-2xl border-4 border-white/50 dark:border-gray-700/50"
              />
              
              {/* Experience Badge */}
              {/* <div className="absolute -top-4 -right-4 z-20 bg-accent-coral rounded-full p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-xs text-white/90">Years</div>
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-gray hover:text-accent-coral transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;