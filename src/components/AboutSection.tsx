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

      </div>
    </div>
  );
};

export default AboutSection;