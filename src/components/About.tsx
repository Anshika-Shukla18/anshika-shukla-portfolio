import { GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">About Me</h2>
        
        <div className="mt-12 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-700 mb-6">
              I'm a passionate software developer with a strong foundation in computer science and a keen eye for creating elegant solutions to complex problems. My journey in technology began during my early college years, and I've been honing my skills ever since.
            </p>
            <p className="text-gray-700 mb-6">
              I specialize in full-stack development, with expertise in both frontend and backend technologies. I enjoy working on challenging projects that push me to learn and grow as a developer.
            </p>
            <p className="text-gray-700">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and community forums.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 p-2 bg-primary bg-opacity-10 rounded-lg h-min">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">B.Tech in Computer Science</h4>
                  <p className="text-gray-600">SRM Institute of Science and Technology</p>
                  <p className="text-gray-500 text-sm">2020 - 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
