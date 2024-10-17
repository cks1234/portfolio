import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, User, Briefcase, FileText } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';

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
  const [activeSection, setActiveSection] = useState('about');

  // Create refs for the sections
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Create animation controls for each section
  const aboutControls = useAnimation();
  const projectsControls = useAnimation();
  const contactControls = useAnimation();

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    // Set up Intersection Observer for each section
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          switch (entry.target.id) {
            case 'about':
              aboutControls.start('visible');
              break;
            case 'projects':
              projectsControls.start('visible');
              break;
            case 'contact':
              contactControls.start('visible');
              break;
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      observer.disconnect();
    };
  }, [aboutControls, projectsControls, contactControls]);

  // Function to handle scroll to specific sections
  const scrollToSection = (sectionRef, sectionName) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionName);
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-hidden flex">
      {/* Left Sidebar */}
      <nav className="w-16 md:w-48 bg-gray-800 fixed h-full overflow-y-auto z-50 transition-all duration-300 ease-in-out flex flex-col justify-between">
        <div className="p-4 flex flex-col">
          <h1 className="text-xl font-bold mb-10 hidden md:block">Kwangseok Choi</h1>
          <div className="flex flex-col space-y-4 items-center md:items-start">
            <button onClick={() => scrollToSection(aboutRef, 'about')} className={`flex items-center space-x-2 ${activeSection === 'about' ? 'text-white' : 'text-gray-400'} transform hover:scale-110 hover:text-white transition duration-300`}>
              <User size={20} />
              <span className="hidden md:inline">About</span>
            </button>
            <button onClick={() => scrollToSection(projectsRef, 'projects')} className={`flex items-center space-x-2 ${activeSection === 'projects' ? 'text-white' : 'text-gray-400'} transform hover:scale-110 hover:text-white transition duration-300`}>
              <Briefcase size={20} />
              <span className="hidden md:inline">Projects</span>
            </button>
            <button onClick={() => scrollToSection(contactRef, 'contact')} className={`flex items-center space-x-2 ${activeSection === 'contact' ? 'text-white' : 'text-gray-400'} transform hover:scale-110 hover:text-white transition duration-300`}>
              <Mail size={20} />
              <span className="hidden md:inline">Contact</span>
            </button>
          </div>
        </div>
        <div className="p-4 flex justify-center md:justify-start space-x-4">
          <a href="https://github.com/cks1234" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/kwangseok-choi-933509240/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <Linkedin size={20} />
          </a>
          <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FileText size={20} />
          </a>
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
            {/* About Section */}
            <motion.section
              id="about"
              ref={aboutRef}
              className="mb-20 min-h-screen flex items-center justify-center"
              initial="hidden"
              animate={aboutControls}
              variants={staggerVariants}
            >
              <div className="flex flex-col items-center justify-center text-center">
                <motion.h2 
                  className="text-6xl font-bold mb-8 leading-normal bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                  variants={fadeInUpVariants}
                >
                  Hello, I'm Kwangseok Choi
                </motion.h2>
                <motion.p 
                  className="text-2xl mb-8 text-gray-300 max-w-3xl leading-relaxed"
                  variants={fadeInUpVariants}
                >
                  A passionate full-stack developer with a knack for creating elegant solutions. 
                  I specialize in building robust and scalable web applications that deliver 
                  exceptional user experiences.
                </motion.p>
              </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section
              id="projects"
              ref={projectsRef}
              className="mb-20 min-h-screen"
              initial="hidden"
              animate={projectsControls}
              variants={staggerVariants}
            >
              <motion.h2 
                className="text-4xl font-bold mb-8 text-center"
                variants={fadeInUpVariants}
              >
                Projects
              </motion.h2>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerVariants}
              >
                {projects.map((project, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-110 transition duration-300"
                    variants={fadeInUpVariants}
                  >
                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 flex items-center">
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Contact Section */}
            <motion.section
              id="contact"
              ref={contactRef}
              className="mb-20 min-h-screen flex items-center justify-center"
              initial="hidden"
              animate={contactControls}
              variants={staggerVariants}
            >
              <div className="text-center">
                <motion.h2 
                  className="text-4xl font-bold mb-8"
                  variants={fadeInUpVariants}
                >
                  Get in Touch
                </motion.h2>
                <motion.div 
                  className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8"
                  variants={staggerVariants}
                >
                  <motion.a 
                    href="https://github.com/cks1234" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition duration-300"
                    variants={fadeInUpVariants}
                  >
                    <Github size={24} />
                    <span>GitHub</span>
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/kwangseok-choi-933509240/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition duration-300"
                    variants={fadeInUpVariants}
                  >
                    <Linkedin size={24} />
                    <span>LinkedIn</span>
                  </motion.a>
                  <motion.a 
                    href="/path-to-your-resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition duration-300"
                    variants={fadeInUpVariants}
                  >
                    <FileText size={24} />
                    <span>Resume</span>
                  </motion.a>
                  <motion.a 
                    href="mailto:cks123456987@gmail.com" 
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition duration-300"
                    variants={fadeInUpVariants}
                  >
                    <Mail size={24} />
                    <span>Email</span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;