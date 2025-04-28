import React from 'react';
import { Code, Database, LineChart, GitBranch, Users, Cpu } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import SkillBar from './ui/SkillBar';

const Skills: React.FC = () => {
  const programmingSkills = [
    { name: 'Java', level: 85 },
    { name: 'Python', level: 90 },
    { name: 'C++', level: 80 },
    { name: 'HTML/CSS', level: 75 },
    { name: 'R-Programming', level: 85 }
  ];
  
  const dataSkills = [
    { name: 'SQL', level: 90 },
    { name: 'Tableau', level: 85 },
    { name: 'Power BI', level: 80 },
    { name: 'Excel', level: 95 },
    { name: 'Hadoop', level: 75 }
  ];
  
  const mlSkills = [
    { name: 'Regression', level: 85 },
    { name: 'Decision Trees', level: 80 },
    { name: 'Clustering', level: 75 },
    { name: 'SVM', level: 70 },
    { name: 'XGBoost', level: 65 }
  ];
  
  const skillCategories = [
    { 
      icon: <Code />, 
      title: 'Programming', 
      description: 'Building applications and analyzing data with various programming languages.'
    },
    { 
      icon: <Database />, 
      title: 'Data Engineering', 
      description: 'Working with databases and data processing systems to prepare data for analysis.'
    },
    { 
      icon: <LineChart />, 
      title: 'Data Visualization', 
      description: 'Creating insightful visualizations to communicate data-driven insights.'
    },
    { 
      icon: <Cpu />, 
      title: 'Machine Learning', 
      description: 'Applying algorithms to enable systems to learn and improve from experience.'
    },
    { 
      icon: <GitBranch />, 
      title: 'Tools & Platforms', 
      description: 'Proficient with version control, cloud platforms, and development tools.'
    },
    { 
      icon: <Users />, 
      title: 'Soft Skills', 
      description: 'Communication, teamwork, problem-solving, and analytical thinking.'
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Skills" subtitle="My Technical Expertise" />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-sky-100 dark:bg-sky-900/40 rounded-lg mr-4 text-sky-600 dark:text-sky-400">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category.title}</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">{category.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                <Code className="mr-2 text-sky-500" size={20} />
                Programming Languages
              </h3>
              <div className="space-y-5">
                {programmingSkills.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                <Database className="mr-2 text-sky-500" size={20} />
                Data Tools
              </h3>
              <div className="space-y-5">
                {dataSkills.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                <Cpu className="mr-2 text-sky-500" size={20} />
                Machine Learning
              </h3>
              <div className="space-y-5">
                {mlSkills.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-colors">
                <h4 className="font-medium mb-2">Deloitte Australia Data Analytics</h4>
                <p className="text-sm text-white/80 mb-2">Forage • Feb 2025</p>
                <a 
                  href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_S4rkhNS8ZvXyBk8xE_1739767821300_completion_certificate.pdf" 
                  className="text-xs font-semibold text-white underline underline-offset-2 hover:text-sky-100 transition-colors"
                >
                  View Certificate
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-colors">
                <h4 className="font-medium mb-2">Data Structures and Algorithms</h4>
                <p className="text-sm text-white/80 mb-2">Board Infinity • Jul 2024</p>
                <a 
                  href="https://drive.google.com/file/d/14xf1XpmK4w7GLWjcCbZsvcS6a8Z7w2ZY/view" 
                  className="text-xs font-semibold text-white underline underline-offset-2 hover:text-sky-100 transition-colors"
                >
                  View Certificate
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-colors">
                <h4 className="font-medium mb-2">Become a Data Scientist</h4>
                <p className="text-sm text-white/80 mb-2">LinkedIn • Feb 2023</p>
                <a 
                  href="https://www.linkedin.com/learning/certificates/8d5137bae344c1d27fe8a8558439a8d2da27e0c3799972c236502136e3365fcf" 
                  className="text-xs font-semibold text-white underline underline-offset-2 hover:text-sky-100 transition-colors"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;