import { Brain, Code2, Workflow, Cloud, Zap, Bot, Target, Sparkles, LucideIcon } from 'lucide-react';

export interface SkillCategory {
    id: string;
    title: string;
    icon: LucideIcon;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        id: 'ai-ml',
        icon: Brain,
        title: 'AI & Machine Learning',
        skills: [
            'Generative AI',
            'NLP',
            'LLMs',
            'TensorFlow',
            'PyTorch',
            'Scikit-learn',
            'LangChain',
            'LlamaIndex',
        ],
    },
    {
        id: 'full-stack',
        icon: Code2,
        title: 'Full-Stack Development',
        skills: [
            'React.js',
            'Next.js',
            'Node.js',
            'Express.js',
            'FastAPI',
            'PostgreSQL',
            'MongoDB',
            'TypeScript',
        ],
    },
    {
        id: 'devops',
        icon: Workflow,
        title: 'DevOps & Automation',
        skills: [
            'GitHub Actions',
            'Jenkins',
            'Docker',
            'Kubernetes',
            'ArgoCD',
            'Terraform',
            'Ansible',
            'Grafana',
        ],
    },
    {
        id: 'cloud',
        icon: Cloud,
        title: 'Cloud Platforms',
        skills: [
            'AWS (EKS, EC2, S3)',
            'Google Cloud',
            'Render',
            'Vercel',
            'CloudFormation',
        ],
    },
    {
        id: 'automation',
        icon: Zap,
        title: 'Workflow Automation',
        skills: [
            'n8n',
            'Make',
            'Zapier',
            'Google Apps Script',
            'REST APIs',
            'Webhooks',
        ],
    },
    {
        id: 'ai-agents',
        icon: Bot,
        title: 'AI Agents',
        skills: [
            'LangChain',
            'CrewAI',
            'LangGraph',
            'Google SDK',
            'MCP (Model Context Protocol)',
            'A2A (Agent-to-Agent)',
            'AutoGen',
            'Semantic Kernel',
        ],
    },
];

export const coreValues = [
    {
        title: 'Vision',
        icon: Target,
        description: 'Building AI-driven ecosystems that seamlessly connect data, intelligence, and automation, creating transformative digital experiences.'
    },
    {
        title: 'Mission',
        icon: Sparkles,
        description: 'Revolutionizing the EdTech industry by combining AI, creativity, and entrepreneurship to empower learners, educators, and innovators globally.'
    }
];
