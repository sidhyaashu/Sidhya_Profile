'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Brain,
  Code2,
  Workflow,
  Cloud,
  Zap,
  Target,
  Sparkles,
  Bot,
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
      'MCP (Model Context Protocol)',
      'A2A (Agent-to-Agent)',
      'AutoGen',
      'Semantic Kernel',
    ],
  },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Professional gradient background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      {/* Green/Teal gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(16,185,129,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_70%,rgba(20,184,166,0.15),transparent_60%)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-8 sm:space-y-12">
        <div className={`text-center space-y-3 sm:space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Skills & Tools
          </h2>
          <p className="text-white/60 text-sm sm:text-base md:text-lg">
            Technologies I work with to build innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-900/70 hover:scale-105 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                    <category.icon className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-base sm:text-lg text-white">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-1 text-xs bg-zinc-800/50 text-white/80 rounded-full border border-zinc-700/50 hover:bg-zinc-800 hover:border-zinc-600 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 sm:h-6 sm:w-6 text-white/70" />
                <CardTitle className="text-lg sm:text-xl text-white">Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                Building AI-driven ecosystems that seamlessly connect data,
                intelligence, and automation, creating transformative digital
                experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-white/70" />
                <CardTitle className="text-lg sm:text-xl text-white">Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                Revolutionizing the EdTech industry by combining AI, creativity,
                and entrepreneurship to empower learners, educators, and
                innovators globally.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
