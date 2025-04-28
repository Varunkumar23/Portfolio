import React from 'react';
import { BookOpen, Calendar, GraduationCap, MapPin } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="My Background & Journey" />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-slate-700 dark:text-slate-300">
                I'm a 3rd-year B.Tech student in Computer Science and Engineering at Lovely Professional University, 
                with a passion for AI, data science, and cybersecurity.
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Currently interning at Null Class Pvt Ltd, I'm developing my skills in data analytics and machine learning.
                I'm constantly exploring new technologies and methodologies to enhance my understanding of complex data patterns 
                and developing solutions that can make a real impact.
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                My goal is to leverage data science to solve challenging problems and contribute to innovations 
                in AI and machine learning. I'm particularly interested in how these technologies can be applied 
                to improve decision-making processes and create more intelligent systems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Degree</p>
                  <p className="font-medium text-slate-900 dark:text-white">B.Tech in CSE</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Year</p>
                  <p className="font-medium text-slate-900 dark:text-white">3rd Year (2022-2026)</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                  <p className="font-medium text-slate-900 dark:text-white">RangaReddy, Telangana</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">CGPA</p>
                  <p className="font-medium text-slate-900 dark:text-white">7.95</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Experience & Education</h3>
            
            <div className="space-y-6">
              {/* Experience Item 1 */}
              <div className="p-5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:shadow-md transition duration-300">
                <div className="flex justify-between">
                  <h4 className="font-semibold text-slate-900 dark:text-white">Data Structures and Algorithms</h4>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Jan 2024 – Mar 2024</span>
                </div>
                <p className="text-sm text-sky-600 dark:text-sky-400 mb-2">Board Infinity | Remote</p>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                  <li>Implemented 10+ core data structures</li>
                  <li>Developed 50+ optimized algorithms</li>
                  <li>Built a comprehensive Library Management System</li>
                </ul>
              </div>
              
              {/* Experience Item 2 */}
              <div className="p-5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:shadow-md transition duration-300">
                <div className="flex justify-between">
                  <h4 className="font-semibold text-slate-900 dark:text-white">Cloud Computing</h4>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Jul 2024 - Oct 2024</span>
                </div>
                <p className="text-sm text-sky-600 dark:text-sky-400 mb-2">NPTEL | Remote</p>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                  <li>Gained expertise in cloud architecture and virtualization</li>
                  <li>Explored AWS and Google Cloud platforms</li>
                  <li>Implemented a scalable cloud-based application</li>
                </ul>
              </div>
              
              {/* Education */}
              <div className="p-5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:shadow-md transition duration-300">
                <div className="flex justify-between">
                  <h4 className="font-semibold text-slate-900 dark:text-white">Lovely Professional University</h4>
                  <span className="text-sm text-slate-500 dark:text-slate-400">2022 - 2026</span>
                </div>
                <p className="text-sm text-sky-600 dark:text-sky-400 mb-2">B.Tech in Computer Science and Engineering</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Studying computer science with a focus on data science, artificial intelligence, and software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;