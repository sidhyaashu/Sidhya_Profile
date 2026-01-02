'use client';

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
  return (
    <section
      id="about"
      className="relative w-full py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.2),transparent_60%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/90 leading-tight">
            About Me
          </h2>
          <p className="text-white/70 leading-relaxed text-base sm:text-lg md:text-xl">
            I'm <span className="text-white font-semibold">Asutosh Sidhya</span>,
            an AI and Software Engineer passionate about building intelligent,
            scalable, and automation-driven systems that merge innovation with
            real-world impact. My expertise spans Generative AI, Natural Language
            Processing, Deep Learning, IoT, DevOps, and Full-Stack Development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-colors duration-300"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-white/70" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
