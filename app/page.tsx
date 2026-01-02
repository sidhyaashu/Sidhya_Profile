'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Logos from '@/components/sections/Logos';
import BlogPreview from '@/components/sections/BlogPreview';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-0 md:px-10 lg:px-40">
      <Navbar />
      <Hero />
      <Logos />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <BlogPreview />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
