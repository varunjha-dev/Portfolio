import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'varunjha.dev@gmail.com',
      link: 'mailto:varunjha.dev@gmail.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      content: 'Noida, Delhi NCR',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/varunjha-dev', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/varunjha-dev/', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://x.com/varunjha_dev', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 bg-shape-cream/30 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-text-black dark:text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-text-gray dark:text-gray-300 max-w-3xl mx-auto">
              Have a project in mind? I'd love to hear from you. Reach out via email, and let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information - Left Side */}
            <div className={`transition-all duration-1000 delay-300 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-text-black dark:text-white mb-6">
                    Get in touch
                  </h3>
                  <p className="text-text-gray dark:text-gray-300 text-lg leading-relaxed mb-8">
                    I'm always open to discussing new opportunities, creative projects, 
                    or partnerships. Whether you have a question or just want to say hi, 
                    feel free to reach out!
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.link}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg hover:bg-secondary-bg dark:hover:bg-gray-700 transition-all duration-300 group"
                    >
                      <div className="bg-accent-coral/10 text-accent-coral p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-text-gray dark:text-gray-300 text-sm">{info.title}</div>
                        <div className="text-text-black dark:text-white font-semibold">{info.content}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Follow Me Section */}
                <div className="pt-8">
                  <h4 className="text-lg font-semibold text-text-black dark:text-white mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        aria-label={link.label}
                        className="bg-white dark:bg-gray-800 hover:bg-accent-coral dark:hover:bg-accent-coral p-3 rounded-lg transition-all duration-300 hover:scale-110 text-text-gray hover:text-white"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Email Me Button - Right Side */}
            <div className={`transition-all duration-1000 delay-500 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-text-black dark:text-white mb-6">
                  Drop Me an Email
                </h3>
                <p className="text-text-gray dark:text-gray-300 text-lg mb-8">
                  Click the button below to send me an email directly from your email client.
                </p>
                <a
                  href="mailto:varunjha.dev@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Varun,%0D%0A%0D%0AI%20have%20a%20project%20in%20mind%20and%20would%20love%20to%20discuss%20it%20with%20you.%20Here%20are%20some%20details:%0D%0A%0D%0A[Your%20message%20here]%0D%0A%0D%0ALooking%20forward%20to%20your%20response!%0D%0A%0D%0ABest,%0D%0A[Your%20Name]"
                  className="inline-flex items-center gap-2 bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Mail size={20} />
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;