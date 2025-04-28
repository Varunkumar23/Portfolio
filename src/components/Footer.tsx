import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Varun Kumar
            </h2>
            <p className="text-slate-400 mb-4 max-w-xs">
              Aspiring data scientist passionate about turning data into actionable insights.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:sarabuvarunkumar@gmail.com" 
                className="text-slate-400 hover:text-white transition-colors" 
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/varun-kumar-2004y" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/Varunkumar23" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white transition-colors" 
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-slate-400 hover:text-white transition-colors inline-flex items-center"
                  >
                    <span className="mr-1">•</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Latest Certifications</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="group">
                  <p className="text-slate-300 group-hover:text-white transition-colors">Deloitte Australia Data Analytics</p>
                  <div className="flex items-center text-sky-400 text-sm">
                    <span className="mr-1">View Certificate</span>
                    <ExternalLink size={12} />
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="group">
                  <p className="text-slate-300 group-hover:text-white transition-colors">Data Structures and Algorithms</p>
                  <div className="flex items-center text-sky-400 text-sm">
                    <span className="mr-1">View Certificate</span>
                    <ExternalLink size={12} />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-10 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">
              © {currentYear} Varun Kumar. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm mt-2 sm:mt-0">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;