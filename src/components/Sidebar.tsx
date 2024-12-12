import React from 'react';
import { Github, Linkedin, FileText, Sun, Moon, User, Briefcase, BookOpen, Mail } from 'lucide-react';

interface SidebarProps {
  isDark: boolean;
  activeSection: string;
  toggleTheme: () => void;
  scrollToSection: (ref: React.RefObject<HTMLElement>, sectionName: string) => void;
  refs: {
    aboutRef: React.RefObject<HTMLElement>;
    skillsRef: React.RefObject<HTMLElement>;
    projectsRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
  };
}

const Sidebar: React.FC<SidebarProps> = ({ isDark, activeSection, toggleTheme, scrollToSection, refs }) => {
  return (
    <nav className={`w-16 md:w-56 fixed h-full z-50 transition-all duration-300 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="p-4 flex flex-col h-full justify-between">
        <div>
          <h1 className={`text-xl font-bold mb-10 hidden md:block ${isDark ? 'text-white' : 'text-gray-900'} hover:text-blue-500 transition-colors`}>
            Sam Choi
          </h1>
          <div className="flex flex-col space-y-4">
            {[
              { icon: User, text: 'About', ref: refs.aboutRef },
              { icon: BookOpen, text: 'Skills', ref: refs.skillsRef },
              { icon: Briefcase, text: 'Projects', ref: refs.projectsRef },
              { icon: Mail, text: 'Contact', ref: refs.contactRef }
            ].map(({ icon: Icon, text, ref }) => (
              <button
                key={text}
                onClick={() => scrollToSection(ref, text.toLowerCase())}
                className={`flex items-center space-x-3 ${
                  activeSection === text.toLowerCase()
                    ? (isDark ? 'text-white' : 'text-gray-900')
                    : 'text-gray-400'
                } hover:text-blue-500 transition-colors`}
              >
                <Icon size={20} />
                <span className="hidden md:inline text-sm">{text}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <a
            href="https://github.com/cks1234"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Github size={20} />
            <span className="hidden md:inline text-sm">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kwangseok-choi-933509240/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Linkedin size={20} />
            <span className="hidden md:inline text-sm">LinkedIn</span>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-gray-400 hover:text-blue-500 transition-colors"
          >
            <FileText size={20} />
            <span className="hidden md:inline text-sm">Resume</span>
          </a>
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-3 text-gray-400 hover:text-blue-500 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
            <span className="hidden md:inline text-sm">{isDark ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;