export interface CompetencyGroup {
  category: string;
  items: string[];
  icon: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  duration?: string;
  location: string;
  highlights: string[];
  projects?: string[];
  technologies: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
}

export interface AchievementItem {
  title: string;
  description: string;
}

export interface TestScenario {
  id: string;
  name: string;
  description: string;
  steps: string[];
  codeSample: {
    language: string;
    code: string;
  };
}
