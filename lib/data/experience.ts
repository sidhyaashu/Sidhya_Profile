import { Terminal, Cpu, Database, Brain, LucideIcon, Rocket, Key } from 'lucide-react';

export interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  company: string;
  description: string[];
  tags: string[];
  icon: LucideIcon;
  shortDescription?: string; // For the card view
}

export const experiences: ExperienceItem[] = [
  {
    id: 'eshura-co-founder',
    period: 'Oct 2025 – Present',
    title: 'Co-Founder',
    company: 'ESHURA',
    icon: Rocket, // Using Rocket for founder role
    shortDescription: 'Leading technical vision and product strategy.',
    description: [
      'Leading the technical vision and product strategy for ESHURA, overseeing full-stack development and AI integration.',
      'Architecting scalable intelligent systems that merge innovation with real-world impact.',
      'Driving core decisions on tech stack, cloud infrastructure, and security compliance.',
    ],
    tags: ['Co-Founder', 'Full-Stack', 'AI Strategy', 'Leadership'],
  },
  {
    id: 'devops-engineer-intern-gameonix',
    period: 'Oct 2025 – Present',
    title: 'DevOps Engineer Intern',
    company: 'Gameonix Esports & Gaming',
    icon: Terminal,
    shortDescription: 'Building CI/CD pipelines and cloud deployment systems.',
    description: [
      'Building and maintaining CI/CD pipelines and cloud deployment systems using Docker, GitHub Actions, and Amazon EKS',
      'Implementing GitOps workflows with ArgoCD and Kubernetes to enhance scalability and automation',
      'Strengthening DevSecOps practices with Trivy, SonarQube, and OWASP for secure cloud-native deployments',
    ],
    tags: ['DevOps', 'Kubernetes', 'AWS', 'CI/CD'],
  },
  {
    id: 'msm-events-founder',
    period: 'Aug 2024 - Dec 2025',
    title: 'Associate Founder',
    company: 'MSM Events & Advertisement',
    icon: Key,
    shortDescription: 'Optimizing workflow efficiency through software solutions.',
    description: [
      'Co-founded and managed event operations, focusing on digital transformation.',
      'Optimized workflow efficiency through custom software solutions and automation.',
      'Led the integration of digital tools to streamline event management processes.',
    ],
    tags: ['Founder', 'Operations', 'Digital Transformation'],
  },
  {
    id: 'sde-intern-entrepreneur-growth-labs',
    period: 'Jun 2025 – Nov 2025',
    title: 'SDE Intern',
    company: 'Entrepreneur Growth Labs',
    icon: Cpu,
    shortDescription: 'Developing AI Agents and automation frameworks.',
    description: [
      'Developed AI Agents and MCP-based automation frameworks for enterprise workflows',
      'Created LLM-powered chatbots and AI SaaS systems for business automation',
      'Integrated automation tools like n8n, Make, and Google Sheets API to streamline AI workflows',
    ],
    tags: ['AI', 'LLM', 'Automation', 'SaaS'],
  },
  {
    id: 'sde-intern-techno-billion',
    period: 'Mar 2025 – Jun 2025',
    title: 'SDE Intern',
    company: 'Techno Billion AI',
    icon: Database,
    shortDescription: 'Building AI-powered web applications and EdTech features.',
    description: [
      'Built AI-powered web applications using React.js, Next.js, Express.js, and PostgreSQL',
      'Integrated intelligent EdTech features using LLMs and Generative AI',
      'Contributed to full-stack AI development for educational innovation platform',
    ],
    tags: ['React', 'Next.js', 'AI', 'EdTech'],
  },
  {
    id: 'winter-research-intern-brainware',
    period: 'Jan 2025 – Feb 2025',
    title: 'Winter Research Intern',
    company: 'Brainware University',
    icon: Brain,
    shortDescription: 'Conducting NLP-based research for adaptive learning.',
    description: [
      'Conducted NLP-based handwriting analysis research to identify knowledge gaps',
      'Used LLMs to generate personalized learning content for students',
      'Merged AI research with EdTech innovation for adaptive learning ecosystems',
    ],
    tags: ['NLP', 'Research', 'LLM', 'EdTech'],
  },
];
