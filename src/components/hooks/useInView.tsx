import { useState, useEffect, useRef, RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

interface UseInViewReturn {
  ref: RefObject<HTMLElement>;
  inView: boolean;
}

export const useInView = (options: UseInViewOptions = {}): UseInViewReturn => {
  const { threshold = 0, triggerOnce = false } = options;
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const previouslyInView = useRef(false);
  
  useEffect(() => {
    const currentElement = ref.current;
    if (!currentElement) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isInView = entry.isIntersecting;
        
        if (triggerOnce && previouslyInView.current && !isInView) {
          return;
        }
        
        setInView(isInView);
        
        if (isInView) {
          previouslyInView.current = true;
          
          if (triggerOnce) {
            observer.unobserve(currentElement);
          }
        }
      },
      { threshold }
    );
    
    observer.observe(currentElement);
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, triggerOnce]);
  
  return { ref, inView };
};