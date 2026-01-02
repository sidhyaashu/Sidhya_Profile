'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
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
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate menu height for smooth animation
  useEffect(() => {
    if (menuRef.current) {
      if (isMobileMenuOpen) {
        // Set height to actual content height
        const height = menuRef.current.scrollHeight;
        setMenuHeight(height);
      } else {
        setMenuHeight(0);
      }
    }
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate border-radius for smooth transition
  const borderRadius = isMobileMenuOpen ? '1rem' : '9999px';

  return (
    <nav
      className={`fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
        isScrolled || isMobileMenuOpen
          ? 'w-[95%] sm:w-[90%] max-w-4xl'
          : 'w-[90%] sm:w-[85%] max-w-3xl'
      }`}
    >
      <div
        className="navbar-container backdrop-blur-md bg-white/10 border border-white/20 px-4 sm:px-6 py-2 sm:py-3 shadow-lg"
        style={{
          borderRadius: isMobileMenuOpen ? (window.innerWidth >= 768 ? '9999px' : '1rem') : '9999px',
          backgroundColor: isScrolled || isMobileMenuOpen ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.1)',
          boxShadow: isScrolled || isMobileMenuOpen 
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
            : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div className="flex items-center justify-between">
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 mx-auto">
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
                  className={`text-sm lg:text-base font-medium transition-colors relative group ${
                    isActive
                      ? 'text-white'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          <button
            className="md:hidden cursor-pointer text-white hover:text-white/80 transition-all duration-300 p-1 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? 'opacity-0 rotate-90 scale-0'
                    : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <X
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? 'opacity-100 rotate-0 scale-100'
                    : 'opacity-0 -rotate-90 scale-0'
                }`}
              />
            </div>
          </button>
        </div>

        <div
          ref={menuRef}
          className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: `${menuHeight}px`,
            opacity: isMobileMenuOpen ? 1 : 0,
            marginTop: isMobileMenuOpen ? '1rem' : '0',
            paddingTop: isMobileMenuOpen ? '1rem' : '0',
            borderTop: isMobileMenuOpen ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid transparent',
          }}
        >
          <div className="space-y-2 pb-2">
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
                  className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/10 shadow-sm'
                      : 'text-white/90 hover:text-white hover:bg-white/5'
                  } ${
                    isMobileMenuOpen ? 'menu-item-enter' : ''
                  }`}
                  style={{
                    animationDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
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

