'use client';

import { useState, useEffect, useRef } from 'react';
import { Pencil, Monitor, Palette, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Pencil,
    title: 'AI & Machine Learning',
    description:
      'Building intelligent systems with Generative AI, NLP, and Deep Learning frameworks.',
  },
  {
    icon: Monitor,
    title: 'Web & Mobile Development',
    description:
      'Creating exceptional web and mobile experiences with modern technologies.',
  },
  {
    icon: Palette,
    title: 'DevOps & Automation',
    description:
      'Implementing CI/CD pipelines and cloud-native solutions for scalable systems.',
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    description:
      'Bringing your vision to life with latest technology and design trends.',
  },
];

export default function About() {
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
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Professional gradient background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      {/* Blue/Teal gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(20,184,166,0.15),transparent_60%)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-12 sm:space-y-16">
        <div className={`text-center space-y-3 sm:space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 leading-tight">
            Collaborate with{' '}
            <span className="text-white">AI and engineering</span> to
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/50 leading-tight">
            create impactful results.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-900/70 hover:scale-105 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 sm:p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                  <service.icon className="h-6 w-6 text-white/70 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`max-w-3xl mx-auto text-center space-y-4 sm:space-y-6 pt-4 sm:pt-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white/90">
            About Me
          </h3>
          <p className="text-white/70 leading-relaxed text-sm sm:text-base md:text-lg px-4">
            I'm <span className="text-white font-semibold">Asutosh Sidhya</span>,
            an AI and Software Engineer passionate about building intelligent,
            scalable, and automation-driven systems that merge innovation with
            real-world impact. My expertise spans Generative AI, Natural Language
            Processing, Deep Learning, IoT, DevOps, and Full-Stack Development.
          </p>
          <p className="text-white/70 leading-relaxed text-sm sm:text-base md:text-lg px-4">
            I love solving complex challenges that combine AI, software engineering,
            and cloud automation to create systems that learn, adapt, and scale.
          </p>
        </div>
      </div>
    </section>
  );
}
