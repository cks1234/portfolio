import React from 'react';
import AnimatedText from './AnimatedText';

interface AboutSectionProps {
  isDark: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isDark }) => {
  return (
    <div className="text-center">
      <AnimatedText isDark={isDark}>
        Hello, I'm Sam Choi
      </AnimatedText>

      <div className={`text-xl ${isDark ? 'text-gray-400' : 'text-amber-800'} max-w-2xl mx-auto font-bold`}>
        <p className="mb-4">🚀 Currently working on enterprise-level React applications</p>
        <br/>
        <p className="mb-4">💡 Passionate about clean code and software architecture</p>
        <br/>
        <p>🌱 Always learning and exploring new technologies</p>
      </div>
    </div>
  );
};

export default AboutSection;