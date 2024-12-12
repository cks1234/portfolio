import React from 'react';

interface AnimatedTextProps {
  children: string;
  isDark: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, isDark }) => {
  return (
    <h2 className={`
      text-9xl 
      font-bold 
      mb-12 
      bg-clip-text 
      text-transparent 
      animate-gradient-xy 
      bg-[length:400%_400%]
      ${isDark 
        ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500'
        : 'bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-500'
      }
    `}>
      {children}
    </h2>
  );
};

export default AnimatedText;