'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    period: 'Oct 2025 – Present',
    title: 'DevOps Engineer Intern',
    company: 'Gameonix Esports & Gaming',
    description: [
      'Building and maintaining CI/CD pipelines and cloud deployment systems using Docker, GitHub Actions, and Amazon EKS',
      'Implementing GitOps workflows with ArgoCD and Kubernetes to enhance scalability and automation',
      'Strengthening DevSecOps practices with Trivy, SonarQube, and OWASP for secure cloud-native deployments',
    ],
    tags: ['DevOps', 'Kubernetes', 'AWS', 'CI/CD'],
  },
  {
    period: 'Jun 2025 – Nov 2025',
    title: 'Software Development Engineer (SDE) Intern',
    company: 'Entrepreneur Growth Labs',
    description: [
      'Developed AI Agents and MCP-based automation frameworks for enterprise workflows',
      'Created LLM-powered chatbots and AI SaaS systems for business automation',
      'Integrated automation tools like n8n, Make, and Google Sheets API to streamline AI workflows',
    ],
    tags: ['AI', 'LLM', 'Automation', 'SaaS'],
  },
  {
    period: 'Mar 2025 – Jun 2025',
    title: 'Software Development Engineer (SDE) Intern',
    company: 'Techno Billion AI',
    description: [
      'Built AI-powered web applications using React.js, Next.js, Express.js, and PostgreSQL',
      'Integrated intelligent EdTech features using LLMs and Generative AI',
      'Contributed to full-stack AI development for educational innovation platform',
    ],
    tags: ['React', 'Next.js', 'AI', 'EdTech'],
  },
  {
    period: 'Jan 2025 – Feb 2025',
    title: 'Winter Research Intern',
    company: 'Brainware University',
    description: [
      'Conducted NLP-based handwriting analysis research to identify knowledge gaps',
      'Used LLMs to generate personalized learning content for students',
      'Merged AI research with EdTech innovation for adaptive learning ecosystems',
    ],
    tags: ['NLP', 'Research', 'LLM', 'EdTech'],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(147,51,234,0.15),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Experience Timeline
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            My professional journey through AI, software development, and DevOps
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-neutral-900 border-neutral-800"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="space-y-1">
                    <CardTitle className="text-xl text-white">
                      {exp.title}
                    </CardTitle>
                    <p className="text-white/80 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-white/70 text-sm leading-relaxed flex items-start"
                    >
                      <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-white/50" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-neutral-800 text-white/80 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
          <div className="space-y-2">
            <p className="text-white/90 font-semibold text-lg">
              Bachelor of Technology (B.Tech) – Computer Science & Engineering
            </p>
            <p className="text-white/70">
              Specialization: Artificial Intelligence & Machine Learning
            </p>
            <p className="text-white/60 text-sm">
              Brainware University | Batch 2023 – 2027
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
