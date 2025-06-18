import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Zap, Users, MapPin, Mail, Calendar } from 'lucide-react';
import myImage from '../assets/my-image.png'

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with great user experience"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and search engines"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working effectively with teams and communicating technical concepts clearly"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary-bg dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-text-black dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-xl text-text-gray dark:text-gray-300 max-w-3xl mx-auto">
              Committed developer with 1+ years of experience creating digital solutions 
              that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content - Contact Card */}
            <div className={`transition-all duration-1000 delay-300 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg mb-8">
                <div className="text-center mb-6">
                  <img
                    src={myImage}
                    alt="Varun Jha"
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-accent-coral/20"
                  />
                  <h3 className="text-2xl font-bold text-text-black dark:text-white">Varun Jha</h3>
                  <p className="text-accent-coral font-medium">Full-Stack Developer</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-text-gray dark:text-gray-300">
                    <Mail className="w-5 h-5 text-accent-coral" />
                    <span>varunjha.dev@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-text-gray dark:text-gray-300">
                    <MapPin className="w-5 h-5 text-accent-coral" />
                    <span>Noida, Delhi NCR</span>
                  </div>
                  <div className="flex items-center gap-3 text-text-gray dark:text-gray-300">
                    <Calendar className="w-5 h-5 text-accent-coral" />
                    <span>Available for freelance</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-coral">10+</div>
                    <div className="text-sm text-text-gray dark:text-gray-400">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Bio */}
            <div className={`transition-all duration-1000 delay-500 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="space-y-6">
                <p className="text-lg text-text-gray dark:text-gray-300 leading-relaxed">
                  I'm a full-stack developer who loves bringing ideas to life through code. 
                  My journey started with curiosity about how websites work, and it has evolved 
                  into a passion for creating seamless digital experiences that users love.
                </p>
                
                <p className="text-lg text-text-gray dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community. I believe 
                  in continuous learning and staying up-to-date with the latest industry trends.
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  {['React', 'TypeScript', 'Node.js', 'AWS', 'Docker'].map((tech, index) => (
                    <span 
                      key={tech}
                      className="bg-shape-cream dark:bg-gray-700 text-accent-coral px-4 py-2 rounded-full text-sm font-medium"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <img
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Developer workspace"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8"
                />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`text-center transition-all duration-1000 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <div className="bg-accent-coral/10 text-accent-coral p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-black dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-gray dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;