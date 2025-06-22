import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'OTT Platform',
      description: 'web app for movie browsing and GPT-based personalised recommendations.',
      longDescription: 'A front-end OTT platform built with ReactJS, TMDB API, and Firebase. The platform features seamless authentication, real-time movie data fetching, and an immersive UI with dynamic trailers.',
      image: 'https://images.pexels.com/photos/29148795/pexels-photo-29148795/free-photo-of-controlling-entertainment-devices-in-a-cozy-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'TMDB API ', 'Firebase', 'Redux', 'Tailwind'],
      liveUrl: 'https://literal-view.web.app/',
      githubUrl: 'https://github.com/varunjha-dev/Literal-View',
      featured: true
    },
    {
      id: 2,
      title: 'Upchaar',
      description: 'AI-powered healthcare system for real-time drug-drug interaction monitoring.',
      longDescription: 'Upchaar is an AI-powered healthcare system focused on real-time drug-drug interaction monitoring, currently in development with an expected deployment in Q1 2026. The project leverages technologies such as NextJS and Tailwind CSS for the frontend, NodeJS and Express for backend APIs, and PostgreSQL with Prisma for database management, with key contributions including the development of the frontend, backend APIs, and database management, while testing is supported by Jest.',
      image: 'https://images.pexels.com/photos/5234506/pexels-photo-5234506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['NextJS', 'NodeJS', 'PostgreSQL'],
      liveUrl: 'https:// In Development',
      githubUrl: 'https://In Development',
      featured: true
    },
    {
      id: 3,
      title: 'DSA Guru',
      description: 'AI-powered Data Structures & Algorithms learning app',
      longDescription: 'A production-ready React app for learning Data Structures and Algorithms with AI-powered responses in an Indian teaching style. Features Firebase authentication, a real-time chat interface, query limiting, and dark mode.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Google Gemini API'],
      liveUrl: 'https://dsa-guru.web.app/',
      githubUrl: 'https://github.com/varunjha-dev/DSA-Guru',
      featured: false
    },
    {
      id: 4,
      title: 'AI friend Chat Application',
      description: 'Romantic AI chatbot with personalized conversations',
      longDescription: 'A romantic chatbot app built with React, TypeScript, and Firebase, featuring personalized conversations, dark mode, conversation history, and rate limiting. Powered by Google Gemini API with a Cinderella-inspired UI.',
      image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Google Gemini API'],
      liveUrl: 'https://ai-gf-19031.web.app/',
      githubUrl: 'https://github.com/varunjha-dev/ai-friend-chatbot',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-secondary-bg dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-text-black dark:text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-text-gray dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating expertise in modern web development 
              and user experience design
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-20 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Project Image */}
                <div className="flex-1 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-coral/10 to-accent-1/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative z-10 w-full h-80 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-2xl z-20"></div>
                </div>

                {/* Project Content */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-text-black dark:text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-lg text-text-gray dark:text-gray-300 leading-relaxed mb-6">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white dark:bg-gray-700 text-text-black dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent-coral hover:bg-accent-coral/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-text-gray dark:border-gray-600 text-text-gray dark:text-gray-300 hover:border-accent-coral hover:text-accent-coral px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div>
            <h3 className="text-2xl font-bold text-text-black dark:text-white mb-8 text-center">
              Other Notable Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-text-black dark:text-white mb-3">
                      {project.title}
                    </h4>
                    <p className="text-text-gray dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-secondary-bg dark:bg-gray-800 text-text-gray dark:text-gray-300 px-3 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-coral hover:text-accent-coral/80 transition-colors duration-300 flex items-center gap-1 text-sm font-medium"
                      >
                        Live Demo <ArrowRight size={14} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-gray dark:text-gray-400 hover:text-text-black dark:hover:text-gray-200 transition-colors duration-300 flex items-center gap-1 text-sm"
                      >
                        <Github size={14} /> Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;