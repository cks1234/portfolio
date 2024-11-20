import React from 'react';

interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number;
  }[];
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
          <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
          <div className="space-y-4">
            {category.skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{skill.name}</span>
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>{skill.level}%</span>
                </div>
                <div className={`h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillSection;