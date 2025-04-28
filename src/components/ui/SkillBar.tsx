import React, { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

interface SkillBarProps {
  name: string;
  level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  const [width, setWidth] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.2 });
  
  useEffect(() => {
    if (inView) {
      setWidth(level);
    }
  }, [inView, level]);
  
  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{level}%</span>
      </div>
      <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-sky-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;