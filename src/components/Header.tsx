import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import myRes from '../assets/Resume- Varun.pdf';

// Reusable Download Resume Button Component
const DownloadResumeButton: React.FC<{ className?: string }> = ({ className }) => (
  <button
    onClick={() => {
      const link = document.createElement('a');
      link.href = myRes; // Use the imported myRes directly
      link.download = 'Varun_Resume.pdf'; // Specify a clean filename for download
      link.click();
    }}
    className={`bg-accent-coral hover:bg-accent-coral/90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${className || ''}`}
  >
    <Download size={18} />
    Download Resume
  </button>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-text-black dark:text-accent-coral">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-text-black dark:text-gray-300 hover:text-accent-coral transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary-bg dark:bg-gray-800 text-text-black dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <DownloadResumeButton className="hover:scale-105" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary-bg dark:bg-gray-800 text-text-black dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-secondary-bg dark:bg-gray-800 text-text-black dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-text-black dark:text-gray-300 hover:text-accent-coral transition-colors duration-300 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <DownloadResumeButton className="w-fit" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;