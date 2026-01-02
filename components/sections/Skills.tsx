'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Brain,
  Code2,
  Workflow,
  Cloud,
  Zap,
  Bot,
  Target,
  Sparkles,
} from 'lucide-react';

const skillCategories = [
  {
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
    icon: Bot,
    title: 'AI Agents',
    skills: [
      'LangChain',
      'CrewAI',
      'LangGraph',
      'Google SDK',
      'MCP',
      'A2A',
      'AutoGen',
      'Semantic Kernel',
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(16,185,129,0.15),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Skills & Tools
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            Technologies I work with to build innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-neutral-900 border-neutral-800"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-white/70" />
                  </div>
                  <CardTitle className="text-lg text-white">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-neutral-800 text-white/80 rounded-full border border-neutral-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <Card className="bg-neutral-900 border-neutral-800 p-6">
            <div className="flex items-center gap-4 mb-4">
              <Target className="h-6 w-6 text-white/70" />
              <CardTitle className="text-xl text-white">Vision</CardTitle>
            </div>
            <p className="text-white/70 leading-relaxed">
              Building AI-driven ecosystems that seamlessly connect data,
              intelligence, and automation, creating transformative digital
              experiences.
            </p>
          </Card>

          <Card className="bg-neutral-900 border-neutral-800 p-6">
            <div className="flex items-center gap-4 mb-4">
              <Sparkles className="h-6 w-6 text-white/70" />
              <CardTitle className="text-xl text-white">Mission</CardTitle>
            </div>
            <p className="text-white/70 leading-relaxed">
              Revolutionizing the EdTech industry by combining AI, creativity,
              and entrepreneurship to empower learners, educators, and
              innovators globally.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
