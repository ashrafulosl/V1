import React, { useRef, useEffect } from 'react';
import TopicCard from './TopicCard';

function CourseSection({ course, index, isActive }) {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (isActive && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isActive]);

  return (
    <div ref={sectionRef} className="min-h-screen relative overflow-hidden flex flex-col snap-start">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out"
        style={{ backgroundImage: `url(${course.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="relative z-10 flex-grow flex flex-col justify-between p-8">
        <h2 className="text-6xl font-bold mb-4">{course.title}</h2>
        <div className="mt-auto">
          <h3 className="text-2xl font-semibold mb-4">Topics</h3>
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto space-x-4 pb-4 snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              '&::-webkit-scrollbar': { display: 'none' }
            }}
          >
            {course.topics.map((topic, index) => (
              <div key={index} className="snap-start">
                <TopicCard topic={topic} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseSection;

