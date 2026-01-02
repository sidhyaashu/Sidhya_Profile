'use client';

import { useState, useEffect, useRef } from 'react';
import { Pencil, Monitor, Palette, Code, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Pencil,
    title: 'AI & Machine Learning',
    description:
      'Building intelligent systems with Generative AI, NLP, and Deep Learning frameworks.',
  },
  {
    icon: Monitor,
    title: 'Web & Mobile Dev',
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
    title: 'Full-Stack Engineering',
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
      className="min-h-screen bg-black text-white flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* 1. Header Section */}
        <div className={`mb-20 sm:mb-28 max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
            Meet the engineer <br />
            who builds the future.
          </h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 md:items-start">
            <p className="text-zinc-500 text-lg sm:text-xl max-w-xl leading-relaxed">
              I'm <span className="text-zinc-200 font-semibold">Asutosh Sidhya</span>.
              I build intelligent, scalable systems that merge innovation with real-world impact.
              From AI agents to cloud automation, I engineering solutions that scale.
            </p>
            <Link href="#contact" className="inline-flex items-center text-purple-400 font-medium hover:text-purple-300 transition-colors group">
              Let's work together <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 2. Metrics / Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24 border-t border-zinc-800 pt-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col gap-2">
            <span className="text-5xl font-bold text-white tracking-tight">20+</span>
            <span className="text-zinc-500 text-sm font-medium">Projects Delivered</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-5xl font-bold text-white tracking-tight">3+</span>
            <span className="text-zinc-500 text-sm font-medium">Years Experience</span>
          </div>
          <div className="col-span-1 md:col-span-2 flex items-center">
            <p className="text-zinc-600 text-sm leading-relaxed max-w-md">
              Committed to writing clean, efficient code and deploying robust applications that solve complex problems for businesses and users alike.
            </p>
          </div>
        </div>

        {/* 3. Feature/Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 sm:p-10 hover:bg-zinc-900/50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                <div className="absolute top-8 right-8 text-zinc-700 group-hover:text-purple-500/50 transition-colors">
                  <Icon className="w-24 h-24 opacity-20" />
                </div>

                <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>
                    <div className="mt-6 flex items-center text-sm font-medium text-zinc-500 group-hover:text-white transition-colors">
                      Read story <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

