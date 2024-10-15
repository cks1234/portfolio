import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, User, Briefcase } from 'lucide-react';

const projects = [
  {
    title: "Project 1",
    description: "A revolutionary web application that transforms user experiences.",
    link: "https://project1.com",
  },
  {
    title: "Project 2",
    description: "An innovative mobile app that simplifies daily tasks.",
    link: "https://project2.com",
  },
  {
    title: "Project 3",
    description: "A cutting-edge machine learning algorithm for predictive analytics.",
    link: "https://project3.com",
  },
];

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-hidden flex">
      {/* Left Sidebar */}
      <nav className="w-16 md:w-48 bg-gray-800 fixed h-full overflow-y-auto z-50 transition-all duration-300 ease-in-out">
        <div className="p-4 flex flex-col h-full">
          <h1 className="text-xl font-bold mb-10 hidden md:block">John Doe</h1>
          <div className="flex flex-col space-y-4 items-center md:items-start">
            <a href="#about" className="flex items-center space-x-2 text-gray-400 hover:text-white transition duration-300">
              <User size={20} />
              <span className="hidden md:inline">About</span>
            </a>
            <a href="#projects" className="flex items-center space-x-2 text-gray-400 hover:text-white transition duration-300">
              <Briefcase size={20} />
              <span className="hidden md:inline">Projects</span>
            </a>
          </div>
          <div className="mt-auto">
            <div className="flex md:space-x-4 flex-col md:flex-row items-center">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mb-2 md:mb-0">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mb-2 md:mb-0">
                <Linkedin size={24} />
              </a>
              <a href="mailto:john@example.com" className="text-gray-400 hover:text-white">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 ml-16 md:ml-48 relative">
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(75, 85, 99, 0.15), transparent 80%)`,
          }}
        />
        <div className="relative z-10">
          <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <section id="about" className="mb-20">
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  Hello, I'm John Doe
                </h2>
                <p className="text-2xl mb-8 text-gray-300 max-w-3xl leading-relaxed">
                  A passionate full-stack developer with a knack for creating elegant solutions. 
                  I specialize in building robust and scalable web applications that deliver 
                  exceptional user experiences.
                </p>

              </div>
            </section>

            <section id="projects" className="mb-20">
              <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300">
                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 flex items-center">
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;