// src/components/FadeIn.jsx
import React, { useEffect, useState, useRef } from 'react';

const FadeIn = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after visibility is detected
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-opacity ${isVisible ? 'opacity-100 animate-fadeIn' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
