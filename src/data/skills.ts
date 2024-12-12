import {
  Braces,
  Code2,
  Database,
  FileJson,
  Globe,
  Layout,
  Server,
  Terminal,
  Wind
} from 'lucide-react';

export const skills = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", icon: Code2 },
      { name: "TypeScript", icon: FileJson },
      { name: "HTML/CSS", icon: Layout },
      { name: "Tailwind CSS", icon: Wind }
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Globe },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database }
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git", icon: Braces },
      { name: "Docker", icon: Terminal },
      { name: "AWS EC2", icon: Server }
    ]
  }
];