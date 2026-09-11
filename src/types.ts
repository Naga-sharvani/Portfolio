export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  badge: string;
  accentColor: string;
  metrics: { label: string; value: string }[];
}

export interface Experience {
  role: string;
  organization: string;
  subOrg: string;
  period: string;
  status: string;
  location?: string;
  bullets: string[];
  tags: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level: string; note?: string }[];
}

export interface Achievement {
  id: string;
  title: string;
  organization?: string;
  description: string;
  yearOrHighlight: string;
  iconName: string;
}
