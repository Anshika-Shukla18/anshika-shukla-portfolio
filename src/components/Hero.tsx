
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-primary font-medium mb-3">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Anshika Shukla
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              Software Developer & Problem Solver
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              I design and develop robust web applications with a focus on clean, 
              efficient code and exceptional user experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center gap-2"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href="mailto:as0440@srmist.edu.in" className="social-icon">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center order-1 md:order-2 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <img 
                src="/lovable-uploads/5bc6d76f-7939-43d2-9b4d-c3094c5c70e4.png" 
                alt="Anshika Shukla" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
