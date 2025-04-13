
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              Anshika<span className="text-primary">.dev</span>
            </a>
            <p className="text-gray-400 mt-2 max-w-md">
              Building elegant solutions to complex problems with clean, efficient code.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:as0440@srmist.edu.in"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Anshika Shukla. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
