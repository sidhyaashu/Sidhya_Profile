'use client';

import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Asutosh Sidhya</h3>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              AI & Software Engineer building intelligent systems that merge
              innovation with real-world impact.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-white font-semibold text-sm sm:text-base">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(`#${link}`);
                  }}
                  className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors capitalize"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-white font-semibold text-sm sm:text-base">Connect</h4>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="https://www.linkedin.com/in/asutoshsidhya8170/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-white/70" />
              </a>
              <a
                href="https://github.com/sidhyaashu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6 text-white/70" />
              </a>
              <a
                href="https://x.com/Asutosh_sidhyaa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-white/70" />
              </a>
              <a
                href="mailto:sidhyaasutosh@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white/70" />
              </a>
            </div>
            <p className="text-white/60 text-xs sm:text-sm">
              Open to collaborations and opportunities
            </p>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-zinc-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-white/50 text-xs sm:text-sm">
              © {currentYear} Asutosh Sidhya. All rights reserved.
            </p>
            <p className="text-white/50 text-xs sm:text-sm">
              Built with Love and Passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

