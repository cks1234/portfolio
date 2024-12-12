import React, { useState, useRef } from 'react';
import Sidebar from './components/Sidebar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import SkillSection from './components/SkillSection';
import MouseGradient from './components/MouseGradient';
import { useMousePosition } from './hooks/useMousePosition';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { skills } from './data/skills';

function App() {
  const mousePosition = useMousePosition();
  const [activeSection, setActiveSection] = useState('about');
  const [isDark, setIsDark] = useState(false);

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const refs = { aboutRef, skillsRef, projectsRef, contactRef };
  useIntersectionObserver(refs, setActiveSection);

  const scrollToSection = (ref: React.RefObject<HTMLElement>, sectionName: string) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionName);
  };

  const backgroundStyle = isDark 
    ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
    : 'bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400';

  return (
    <div className={`min-h-screen ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
      <Sidebar
        isDark={isDark}
        activeSection={activeSection}
        toggleTheme={() => setIsDark(!isDark)}
        scrollToSection={scrollToSection}
        refs={refs}
      />

      <div className="flex-1 ml-16 md:ml-56 relative">
        <MouseGradient mousePosition={mousePosition} isDark={isDark} />
        
        <main className={`${backgroundStyle}`}>
          <section 
            id="about" 
            ref={aboutRef} 
            className="min-h-screen flex items-center justify-center p-8"
          >
            <AboutSection isDark={isDark} />
          </section>

          <section 
            id="skills" 
            ref={skillsRef} 
            className="min-h-screen p-12"
          >
            <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
              Technical Skills
            </h2>
            <SkillSection isDark={isDark} skills={skills} />
          </section>

          <section 
            id="projects" 
            ref={projectsRef} 
            className="min-h-screen p-12"
          >
            <ProjectsSection isDark={isDark} />
          </section>

          <section 
            id="contact" 
            ref={contactRef} 
            className="min-h-screen flex items-center justify-center p-8"
          >
            <ContactSection isDark={isDark} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;