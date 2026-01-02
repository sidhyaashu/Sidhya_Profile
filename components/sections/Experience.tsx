'use client';

import { useState, useEffect, useRef } from 'react';
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
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Professional gradient background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      {/* Purple/Blue gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(147,51,234,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.15),transparent_60%)]" />
      
      <div className="relative z-10 max-w-5xl mx-auto w-full space-y-8 sm:space-y-12">
        <div className={`text-center space-y-3 sm:space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Experience Timeline
          </h2>
          <p className="text-white/60 text-sm sm:text-base md:text-lg">
            My professional journey through AI, software development, and DevOps
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-900/70 hover:scale-[1.02] hover:shadow-xl ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <div className="space-y-1 sm:space-y-2">
                    <CardTitle className="text-lg sm:text-xl text-white">
                      {exp.title}
                    </CardTitle>
                    <p className="text-white/80 font-medium text-sm sm:text-base">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span className="text-xs sm:text-sm whitespace-nowrap">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <ul className="space-y-2 sm:space-y-3">
                  {exp.description.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-white/70 text-xs sm:text-sm leading-relaxed flex items-start"
                    >
                      <span className="mr-2 sm:mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-white/50 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-zinc-800 text-white/80 hover:bg-zinc-700 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 sm:p-8 text-center space-y-3 sm:space-y-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl sm:text-2xl font-bold text-white">Education</h3>
          <div className="space-y-2">
            <p className="text-white/90 font-semibold text-sm sm:text-base">
              Bachelor of Technology (B.Tech) – Computer Science & Engineering
            </p>
            <p className="text-white/70 text-sm sm:text-base">
              Specialization: Artificial Intelligence & Machine Learning
            </p>
            <p className="text-white/60 text-xs sm:text-sm">
              Brainware University | Batch 2023 – 2027
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
