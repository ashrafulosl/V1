import React, { useState, useRef, useEffect } from 'react';
import CourseSection from './CourseSection';

const courses = [
  {
    id: 1,
    title: "Grammar Essentials",
    backgroundImage: "https://source.unsplash.com/random/1920x1080?grammar",
    topics: [
      { title: "Nouns and Pronouns", description: "Learn about the building blocks of sentences", icon: "book" },
      { title: "Verbs and Tenses", description: "Master the art of expressing time in English", icon: "clock" },
      { title: "Adjectives and Adverbs", description: "Describe the world around you", icon: "feather" },
      { title: "Prepositions", description: "Understand the relationships between words", icon: "map-pin" },
      { title: "Conjunctions", description: "Connect your ideas seamlessly", icon: "link" },
      { title: "Sentence Structure", description: "Build clear and effective sentences", icon: "layout" },
      { title: "Punctuation", description: "Perfect your writing with proper punctuation", icon: "edit-2" },
      { title: "Subject-Verb Agreement", description: "Ensure your subjects and verbs always match", icon: "check-circle" },
      { title: "Clauses and Phrases", description: "Dive into complex sentence structures", icon: "code" },
    ]
  },
  {
    id: 2,
    title: "Advanced English Fluency",
    backgroundImage: "https://source.unsplash.com/random/1920x1080?english",
    topics: [
      { title: "Idiomatic Expressions", description: "Speak like a native with common phrases", icon: "message-circle" },
      { title: "Phrasal Verbs", description: "Master these tricky verb combinations", icon: "zap" },
      { title: "Advanced Vocabulary", description: "Expand your lexicon for sophisticated communication", icon: "book-open" },
      { title: "Pronunciation Techniques", description: "Perfect your accent and intonation", icon: "mic" },
      { title: "Listening Comprehension", description: "Understand native speakers with ease", icon: "headphones" },
      { title: "Speaking Fluency", description: "Express yourself confidently and naturally", icon: "users" },
      { title: "Writing Skills", description: "Craft compelling essays and reports", icon: "edit-3" },
      { title: "Reading Strategies", description: "Tackle complex texts with advanced techniques", icon: "eye" },
      { title: "Cultural Context", description: "Understand the nuances of English in different cultures", icon: "globe" },
    ]
  },
  {
    id: 3,
    title: "Business English",
    backgroundImage: "https://source.unsplash.com/random/1920x1080?business",
    topics: [
      { title: "Email Writing", description: "Craft professional and effective emails", icon: "mail" },
      { title: "Presentation Skills", description: "Deliver impactful business presentations", icon: "pie-chart" },
      { title: "Negotiation Language", description: "Master the art of business negotiations", icon: "trending-up" },
      { title: "Report Writing", description: "Create clear and concise business reports", icon: "file-text" },
      { title: "Business Terminology", description: "Learn essential vocabulary for the corporate world", icon: "briefcase" },
      { title: "Meeting Etiquette", description: "Navigate business meetings with confidence", icon: "users" },
      { title: "Telephone English", description: "Handle professional phone calls with ease", icon: "phone" },
      { title: "Cross-cultural Communication", description: "Communicate effectively across cultures", icon: "globe" },
      { title: "Networking Skills", description: "Build and maintain professional relationships", icon: "share-2" },
    ]
  }
];

function CourseViewer() {
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, clientHeight } = containerRef.current;
        const newIndex = Math.floor(scrollTop / clientHeight);
        if (newIndex !== currentCourseIndex) {
          setCurrentCourseIndex(newIndex);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentCourseIndex]);

  return (
    <div ref={containerRef} className="flex-grow overflow-y-auto bg-black text-white snap-y snap-mandatory">
      {courses.map((course, index) => (
        <CourseSection key={course.id} course={course} index={index} isActive={index === currentCourseIndex} />
      ))}
    </div>
  );
}

export default CourseViewer;

