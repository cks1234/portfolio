export interface Skill {
    name: string;
    icon: string;
  }
  
  export interface SkillCategory {
    category: string;
    skills: Skill[];
  }
  
  export interface SkillSectionProps {
    isDark: boolean;
    skills: SkillCategory[];
  }