import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  isDark: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  techStack,
  liveLink,
  githubLink,
  isDark,
}) => {
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 ${isDark ? 'bg-gray-800' : 'bg-white'} hover:scale-105`}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 rounded-full text-sm ${
                isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-500 hover:text-blue-400"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-500 hover:text-blue-400"
            >
              <Github size={16} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;