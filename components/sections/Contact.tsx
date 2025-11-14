'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/asutoshsidhya8170/',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/sidhyaashu',
      label: 'GitHub',
    },
    {
      icon: Twitter,
      href: 'https://x.com/Asutosh_sidhyaa',
      label: 'Twitter',
    },
    {
      icon: Mail,
      href: 'mailto:sidhyaasutosh@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Professional gradient background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      {/* Yellow/Orange gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.2),transparent_60%)]" />
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,146,60,0.15),transparent_60%)]" /> */}
      
      <div className="relative z-10 max-w-4xl mx-auto w-full space-y-8 sm:space-y-12">
        <div className={`text-center space-y-3 sm:space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Get In Touch
          </h2>
          <p className="text-white/60 text-sm sm:text-base md:text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <Card className={`bg-zinc-900/50 border-zinc-800 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <CardContent className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Let's Connect
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                  Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <a href="mailto:contact@example.com" className="text-sm sm:text-base">
                    sidhyaasutosh@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Follow me</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white/70" />
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={`bg-zinc-900/50 border-zinc-800 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/90 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2 sm:py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/90 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 sm:py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/90 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-2 sm:py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                    placeholder="Your message..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full cursor-pointer bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg py-2 sm:py-3 transition-all duration-300 hover:scale-105"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

