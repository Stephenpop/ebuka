
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface TimelineEvent {
  id: number;
  year: string;
  role: string;
  company: string;
  location?: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export type PageType = 'home' | 'about' | 'projects' | 'services' | 'contact';
