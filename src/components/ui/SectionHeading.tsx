import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'center'
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto'
  };
  
  return (
    <div className={`max-w-3xl ${alignmentClasses[alignment]}`}>
      {subtitle && (
        <p className="text-sm font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-16 h-1 bg-sky-500"></span>
      </h2>
    </div>
  );
};

export default SectionHeading;