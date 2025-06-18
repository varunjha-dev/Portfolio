import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView && !animated) {
      setTimeout(() => setAnimated(true), 500);
    }
  }, [inView, animated]);

  const skills: Skill[] = [
    { name: 'ReactJS', percentage: 90, color: 'bg-accent-coral' },
    { name: 'TypeScript', percentage: 90, color: 'bg-accent-coral' },
    { name: 'Node.js & Express', percentage: 80, color: 'bg-accent-coral' },
    { name: 'AWS & Cloud', percentage: 60, color: 'bg-accent-coral' },
    { name: 'Docker & DevOps', percentage: 50, color: 'bg-accent-coral' }
  ];

  return (
    <section id="skills" className="py-20 bg-primary-bg dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-text-black dark:text-white mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-text-gray dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive skill set covering modern web development technologies 
              and best practices
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Skills Progress Bars */}
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${
              inView ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-text-black dark:text-white">
                      {skill.name}
                    </h3>
                    <span className="text-text-gray dark:text-gray-400 font-medium">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-secondary-bg dark:bg-gray-700 h-3 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${skill.color} transition-all duration-2000 ease-out rounded-full`}
                      style={{
                        width: animated ? `${skill.percentage}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience Content */}
            <div className={`space-y-6 transition-all duration-1000 delay-500 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="bg-shape-cream/50 dark:bg-gray-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-text-black dark:text-white mb-4">
                  Professional Experience
                </h3>
                <p className="text-text-gray dark:text-gray-300 mb-6 leading-relaxed">
                  With over 1 years in the industry, I've had the privilege of working with 
                  MNCs, helping them build scalable web applications 
                  that serve millions of users worldwide.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent-coral rounded-full flex items-center justify-center text-white font-bold">
                      1+
                    </div>
                    <div>
                      <div className="font-semibold text-text-black dark:text-white">Years Experience</div>
                      <div className="text-text-gray dark:text-gray-400">Full-stack Development</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent-1 rounded-full flex items-center justify-center text-white font-bold">
                      10+
                    </div>
                    <div>
                      <div className="font-semibold text-text-black dark:text-white">Projects Delivered</div>
                      <div className="text-text-gray dark:text-gray-400">Web & Mobile Applications</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent-2 rounded-full flex items-center justify-center text-white font-bold">
                      5+
                    </div>
                    <div>
                      <div className="font-semibold text-text-black dark:text-white">Happy Clients</div>
                      <div className="text-text-gray dark:text-gray-400">Worldwide Partnerships</div>
                    </div>
                  </div>
                </div>
              </div>

              <img
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional development workspace"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;