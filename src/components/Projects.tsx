import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import ProjectCard from './ui/ProjectCard';
import ecombidding from '../assests/Screenshot 2025-04-26 155559.png';
import jarvis from '../assests/download.jpg';
import dashboard from '../assests/photo.jpg';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Jarvis (AI Voice Assistant)",
      description: "Developed a voice-controlled AI assistant using Python, integrating Gemini API to enhance natural language understanding and context-aware responses.",
      image: jarvis,
      category: "AI",
      technologies: ["Python", "Gemini API", "NLP", "Machine Learning"],
      link: "#",
      github: "https://github.com/Varunkumar23/Jarvis-AI",
      highlights: [
        "95%+ accuracy in processing voice inputs",
        "Response time under 1.5 seconds",
        "Real-time query resolution and task automation"
      ]
    },
    {
      id: 2,
      title: "EcomBidding (Real-Time Ecommerce Platform)",
      description: "Built a real-time e-commerce bidding platform using the MERN stack, supporting smooth bidding experiences for users with containerized deployment.",
      image: ecombidding,
      category: "Web Development",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Docker", "Jenkins"],
      link: "#",
      github: "https://github.com/Varunkumar23/ecombidding",
      highlights: [
        "Handled 1,000+ daily active users",
        "Reduced page load time by 40%",
        "Enabled 100 concurrent bidders per auction with WebSockets",
        "Secured 3,000+ user accounts with advanced authentication",
        "Reduced release cycle time by 30% via Docker and Jenkins"
      ]
    },
    
    {
      id: 3,
      title: "Netflix Data Analysis Dashboard",
      description: "Collected and analyzed a 20,000+ record Netflix dataset from Kaggle, creating an interactive Tableau dashboard with dynamic visualizations for content trends and user engagement patterns.",
      image: dashboard,
      category: "Data Analysis",
      technologies: ["Tableau Prep", "Tableau Desktop", "Data Cleaning", "Data Visualization"],
      link: "#",
      github: "https://github.com/Varunkumar23/netflix-analysis",
      highlights: [
        "10+ dynamic visualizations",
        "Improved data processing efficiency by 40%",
        "Uncovered key content strategy insights"
      ]
    },
    
    
  ];
  
  const categories = ['all', ...new Set(projects.map(project => project.category.toLowerCase()))];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeFilter);

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Projects" subtitle="My Recent Work" />
        
        <div className="flex justify-center mt-8 mb-10">
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${activeFilter === category
                    ? 'bg-sky-500 text-white shadow-md'
                    : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600'
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/Varunkumar23" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-3 rounded-lg bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors group"
          >
            <Github className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            View More on GitHub
            <ExternalLink className="ml-2 h-4 w-4 opacity-70" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;