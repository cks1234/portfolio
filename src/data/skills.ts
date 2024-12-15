import ReactIcon from '../Icons/React.svg';
import TypeScriptIcon from '../Icons/TypeScript.svg';
import HTMLIcon from '../Icons/HTML.svg';
import CSSIcon from '../Icons/CSS.svg';
import TailwindIcon from '../Icons/TailwindCSS.svg';
import NodeJSIcon from '../Icons/NodeJS.svg';
import ExpressIcon from '../Icons/Express.svg';
import MongoDBIcon from '../Icons/MongoDB.svg';
import MySQLIcon from '../Icons/MySQL.svg';
import GitIcon from '../Icons/Git.svg';
import DockerIcon from '../Icons/Docker.svg';
import AWSIcon from '../Icons/AWS.svg';
import phpIcon from '../Icons/php.svg';

export const skills = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "HTML", icon: HTMLIcon },
      { name: "CSS", icon: CSSIcon },
      { name: "Tailwind CSS", icon: TailwindIcon },
      { name: "PHP", icon: phpIcon }
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Express", icon: ExpressIcon },
      { name: "MongoDB", icon: MongoDBIcon },
      { name: "MySQL", icon:MySQLIcon }
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git", icon: GitIcon },
      { name: "Docker", icon: DockerIcon },
      { name: "AWS", icon: AWSIcon }
    ]
  }
];