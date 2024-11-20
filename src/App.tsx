import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import ProjectCard from './components/ProjectCard';
import SkillSection from './components/SkillSection';
import { projects } from './data/projects';
import { skills } from './data/skills';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('about');
  const [isDark, setIsDark] = useState(false);

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3,
    });

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement>, sectionName: string) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionName);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
      <Sidebar
        isDark={isDark}
        activeSection={activeSection}
        toggleTheme={() => setIsDark(!isDark)}
        scrollToSection={scrollToSection}
        refs={{ aboutRef, skillsRef, projectsRef, contactRef }}
      />

      <div className="flex-1 ml-16 md:ml-56 relative">
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, ${isDark ? 'rgba(45, 55, 72, 0.15)' : 'rgba(59, 130, 246, 0.15)'}, transparent 80%)`,
          }}
        />
        <main>
          <section 
            id="about" 
            ref={aboutRef} 
            className={`min-h-screen flex items-center justify-center p-8 ${
              isDark 
                ? 'bg-[#111827]' 
                : 'bg-gradient-to-br from-[#fef3c7] to-[#fef9c3]'
            }`}
          >
            <div className="text-center">
              <h2 className={`text-6xl font-bold mb-8 ${isDark ? 'text-gray-100' : 'text-amber-600'}`}>
                Hello, I'm Sam Choi
              </h2>
              <p className={`text-2xl mb-8 ${isDark ? 'text-gray-300' : 'text-amber-900'} max-w-3xl mx-auto`}>
                A passionate full-stack developer specializing in modern web technologies. 
                With expertise in both frontend and backend development, I create scalable 
                and efficient solutions that solve real-world problems.
              </p>
              <div className={`text-lg ${isDark ? 'text-gray-400' : 'text-amber-800'} max-w-2xl mx-auto`}>
                <p className="mb-4">🚀 Currently working on enterprise-level React applications</p>
                <p className="mb-4">💡 Passionate about clean code and software architecture</p>
                <p>🌱 Always learning and exploring new technologies</p>
              </div>
            </div>
          </section>

          <section 
            id="skills" 
            ref={skillsRef} 
            className={`min-h-screen p-12 ${
              isDark 
                ? 'bg-[#0f172a]' 
                : 'bg-gradient-to-br from-[#ccfbf1] to-[#99f6e4]'
            }`}
          >
            <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-gray-100' : 'text-teal-700'}`}>
              Technical Skills
            </h2>
            <SkillSection isDark={isDark} skills={skills} />
          </section>

          <section 
            id="projects" 
            ref={projectsRef} 
            className={`min-h-screen p-12 ${
              isDark 
                ? 'bg-[#1e1b4b]' 
                : 'bg-gradient-to-br from-[#e0e7ff] to-[#c7d2fe]'
            }`}
          >
            <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-gray-100' : 'text-indigo-700'}`}>
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} isDark={isDark} />
              ))}
            </div>
          </section>

          <section 
            id="contact" 
            ref={contactRef} 
            className={`min-h-screen flex items-center justify-center p-8 ${
              isDark 
                ? 'bg-[#18181b]' 
                : 'bg-gradient-to-br from-[#fce7f3] to-[#fbcfe8]'
            }`}
          >
            <div className="text-center max-w-2xl">
              <h2 className={`text-4xl font-bold mb-8 ${isDark ? 'text-gray-100' : 'text-pink-700'}`}>
                Let's Connect
              </h2>
              <p className={`text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-pink-900'}`}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:cks123456987@gmail.com"
                  className={`block py-3 px-6 rounded-lg ${
                    isDark 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-pink-600 hover:bg-pink-700'
                  } text-white transition duration-300`}
                >
                  Send me an email
                </a>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-pink-800'}`}>
                  Or connect with me on social media
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;