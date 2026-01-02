'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      if (isMobileMenuOpen) {
        setMenuHeight(menuRef.current.scrollHeight + 24);
      } else {
        setMenuHeight(0);
      }
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen
          ? 'w-[95%] max-w-[400px]'
          : isScrolled
            ? 'w-[90%] sm:w-auto max-w-4xl'
            : 'w-[95%] sm:w-auto max-w-5xl'
        }`}
    >
      <div
        className={`relative backdrop-blur-xl border transition-all duration-500 overflow-hidden ${isMobileMenuOpen
            ? 'bg-zinc-900/95 border-zinc-700 shadow-2xl rounded-[28px]'
            : 'bg-black/50 border-white/10 shadow-lg hover:border-white/20 rounded-full'
          }`}
        style={{
          padding: isMobileMenuOpen ? '20px' : '8px 24px',
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo placeholder for mobile only */}
          <div className={`md:hidden font-bold transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 delay-100' : 'opacity-0 w-0 overflow-hidden'}`}>
            <span className="text-white">Menu</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                      ? 'text-white bg-white/10 shadow-inner'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <button
            className={`md:hidden relative w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/10 ${!isMobileMenuOpen && 'ml-auto'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <Menu className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'}`} />
              <X className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'}`} />
            </div>
          </button>
        </div>

        <div
          ref={menuRef}
          className="md:hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            maxHeight: isMobileMenuOpen ? `${menuHeight}px` : '0px',
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
        >
          <div className="flex flex-col gap-2 pt-6 pb-2">
            {navItems.map((item, index) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 border border-transparent ${isActive
                      ? 'text-white bg-white/10 translate-x-1 border-white/5'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5 hover:translate-x-1'
                    }`}
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
