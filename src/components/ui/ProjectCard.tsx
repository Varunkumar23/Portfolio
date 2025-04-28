import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    technologies: string[];
    link: string;
    github: string;
    highlights: string[];
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
        <div className="absolute top-4 right-4 bg-sky-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {project.category}
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="mb-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Key Highlights
          </h4>
          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 pl-4 list-disc">
            {project.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center pt-3 border-t border-slate-200 dark:border-slate-700">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors inline-flex items-center"
          >
            <Github size={18} className="mr-1" />
            <span className="text-sm">Code</span>
          </a>
          
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors inline-flex items-center"
          >
            <span className="text-sm">Demo</span>
            <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;