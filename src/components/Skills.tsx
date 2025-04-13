
import { Code, Database, Layout, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="text-primary" size={24} />,
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: <Database className="text-primary" size={24} />,
      skills: ["Node.js", "Express", "Python", "Django", "MongoDB", "SQL"]
    },
    {
      title: "Programming Languages",
      icon: <Code className="text-primary" size={24} />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Golang"]
    },
    {
      title: "Tools & Platforms",
      icon: <Layers className="text-primary" size={24} />,
      skills: ["Git", "GitHub", "Docker", "AWS", "Vercel", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">My Skills</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary bg-opacity-10 rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technical Proficiency</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Web Development", percentage: 90 },
              { name: "Algorithms & Data Structures", percentage: 85 },
              { name: "UI/UX Design", percentage: 75 },
              { name: "DevOps", percentage: 65 }
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-500">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
