import React from 'react';

interface MouseGradientProps {
  mousePosition: { x: number; y: number };
  isDark: boolean;
}

const MouseGradient: React.FC<MouseGradientProps> = ({ mousePosition, isDark }) => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, ${
          isDark ? 'rgba(45, 55, 72, 0.15)' : 'rgba(59, 130, 246, 0.15)'
        }, transparent 80%)`,
      }}
    />
  );
};

export default MouseGradient;