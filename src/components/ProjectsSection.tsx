import React from 'react';
import ProjectCarousel from './ProjectCarousel';
import { projects } from '../data/projects';

interface ProjectsSectionProps {
  isDark: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isDark }) => {
  return (
    <div className="container mx-auto px-4">
      <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-gray-100' : 'text-indigo-700'}`}>
        Featured Projects
      </h2>
      <ProjectCarousel projects={projects} isDark={isDark} />
    </div>
  );
};

export default ProjectsSection;