import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  icon: LucideIcon;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

interface SkillSectionProps {
  isDark: boolean;
  skills: SkillCategory[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ isDark, skills }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((category) => (
        <div
          key={category.category}
          className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white shadow-lg'}`}
        >
          <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
          <div className="grid grid-cols-2 gap-4">
            {category.skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <Icon 
                    size={32} 
                    className={`mb-2 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}
                  />
                  <span className={`text-sm font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillSection;