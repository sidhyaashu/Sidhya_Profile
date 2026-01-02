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
    <footer className="border-t border-neutral-800 bg-neutral-950/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Asutosh Sidhya</h3>
            <p className="text-neutral-400 text-sm">
              AI & Software Engineer building intelligent systems that merge
              innovation with real-world impact.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(`#${link}`);
                  }}
                  className="text-neutral-400 hover:text-white text-sm transition-colors capitalize"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Connect</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/asutoshsidhya8170/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/sidhyaashu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/Asutosh_sidhyaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:sidhyaasutosh@gmail.com"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-500 text-sm">
          <p>© {currentYear} Asutosh Sidhya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
