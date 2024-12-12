import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectCarouselProps {
  projects: Project[];
  isDark: boolean;
}

const ProjectCard: React.FC<Project & { isDark: boolean }> = ({
  title,
  description,
  image,
  techStack,
  liveLink,
  githubLink,
  isDark,
}) => {
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-gray-900' : 'from-black'} opacity-50`} />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className={`mb-4 text-sm line-clamp-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
        
        <div className="mb-4 flex flex-wrap gap-1">
          {techStack.map((tech) => (
            <span
              key={tech}
              className={`px-2 py-1 rounded-full text-xs ${
                isDark 
                  ? 'bg-gray-700 text-gray-300' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-2">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm transition-colors duration-200 ${
                isDark 
                  ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                  : 'bg-indigo-500 hover:bg-indigo-600 text-white'
              }`}
            >
              <ExternalLink size={14} />
              <span>Live Demo</span>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm transition-colors duration-200 ${
                isDark 
                  ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                  : 'bg-gray-800 hover:bg-gray-900 text-white'
              }`}
            >
              <Github size={14} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects, isDark }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const getPreviousIndex = () => (currentIndex - 1 + projects.length) % projects.length;
  const getNextIndex = () => (currentIndex + 1) % projects.length;

  const handleNext = useCallback(() => {
    setCurrentIndex(getNextIndex());
  }, [currentIndex, projects.length]);

  const handlePrevious = () => {
    setCurrentIndex(getPreviousIndex());
    setIsAutoPlaying(false);
  };

  const handleManualNext = () => {
    handleNext();
    setIsAutoPlaying(false);
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        handleNext();
      }, 3000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, handleNext]);

  return (
    <div 
      className="relative w-full max-w-7xl mx-auto px-4 scale-110"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="grid grid-cols-3 gap-8">
        {/* Previous Card */}
        <div 
          onClick={handlePrevious}
          className="cursor-pointer opacity-50 hover:opacity-70 transition-opacity duration-300 transform scale-90"
        >
          <ProjectCard {...projects[getPreviousIndex()]} isDark={isDark} />
        </div>

        {/* Current Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="transform scale-110 z-10"
          >
            <ProjectCard {...projects[currentIndex]} isDark={isDark} />
          </motion.div>
        </AnimatePresence>

        {/* Next Card */}
        <div 
          onClick={handleManualNext}
          className="cursor-pointer opacity-50 hover:opacity-70 transition-opacity duration-300 transform scale-90"
        >
          <ProjectCard {...projects[getNextIndex()]} isDark={isDark} />
        </div>
      </div>

      {/* Apple-style indicators */}
      <div className="flex justify-center mt-8">
        <div className={`inline-flex p-1 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
          {projects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 relative`}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className={`absolute inset-0 rounded-full ${
                  currentIndex === index
                    ? isDark
                      ? 'bg-white'
                      : 'bg-indigo-600'
                    : 'bg-transparent'
                }`}
                initial={false}
                animate={{
                  scale: currentIndex === index ? 1 : 0.6,
                  opacity: currentIndex === index ? 1 : 0.4,
                }}
                transition={{ duration: 0.2 }}
              />
              <div
                className={`w-full h-full rounded-full ${
                  isDark ? 'bg-gray-600' : 'bg-gray-400'
                }`}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;