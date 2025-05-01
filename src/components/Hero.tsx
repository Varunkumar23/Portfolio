import React from 'react';
import { ArrowDown, Download, MessageSquare } from 'lucide-react';
import Button from './ui/Button';
import profile from '../assests/WhatsApp Image 2025-04-26 at 16.28.51_1ad69832.jpg';
import resume from '../assests/resume.pdf'

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sky-600 dark:text-sky-400 font-medium mb-4 animate-fadeIn">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 animate-fadeIn animation-delay-200">
              Varun Kumar
            </h1>
            <div className="overflow-hidden h-12 sm:h-16 mb-6">
              <p className="text-xl sm:text-2xl text-slate-700 dark:text-slate-300 font-light animate-slideUp">
                Aspiring Data Scientist
              </p>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto md:mx-0 mb-8 animate-fadeIn animation-delay-400">
              Turning data into insights and insights into impact. 
              Passionate about AI, machine learning, and solving real-world problems through data science.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fadeIn animation-delay-600">
              <a 
                href={resume}
                target='_blank'
                className='bg-blue-400 p-2 rounded-xl flex items-center justify-center gap-2'
              >
                <Download size={16} />
                Download Resume
              </a>
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="secondary" 
                icon={<MessageSquare size={16} />}
              >
                Let's Connect
              </Button>
            </div>
          </div>
          
          <div className="flex-1 max-w-sm">
            <div className="relative w-full aspect-square rounded-full bg-gradient-to-br from-sky-400 to-blue-600 p-1 shadow-xl animate-fadeIn animation-delay-800">
              <div className="absolute inset-0 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                {/* Placeholder for profile image */}
                <img 
                  src={profile}
                  alt="Profile" 
                  // className="w-full h-full object-full" 
                />
                <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-600">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="p-2 rounded-full bg-sky-500 text-white dark:bg-sky-600 hover:bg-sky-600 dark:hover:bg-sky-700 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;