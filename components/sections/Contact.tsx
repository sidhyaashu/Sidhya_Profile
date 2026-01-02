"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import CompassCurve from "../ui/CompassCurve";


export default function Contact() {
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
      id="contact"
      className="min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden bg-black"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center">
        {/* Curve Visual - Rotated 180deg for "Top" curve effect or kept normal? User said "same scaled curve". Let's keep it normal but positioned creatively. */}
        <div className={`transition-all duration-1000 mb-8 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="w-[600px] h-[200px] overflow-hidden relative opacity-60">
            {/* We offset the curve slightly to show the top arc */}
            <div className="-mt-20">
              <CompassCurve />
            </div>
          </div>
        </div>

        <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest">Open for Opportunities</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Set the product direction <br className="hidden sm:block" />
            with <span className="text-zinc-500">projects and initiatives.</span>
          </h2>

          <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to turn complex problems into elegant engineering solutions? Let's discuss how we can build the future together.
          </p>

          <div className="pt-8">
            <a
              href="mailto:sidhyaasutosh@gmail.com"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all active:scale-95"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <p className="text-zinc-600 text-sm mt-8">
            Prefer social? Find me on <a href="https://www.linkedin.com/in/asutoshsidhya8170/" target="_blank" className="text-zinc-400 hover:text-white underline underline-offset-4">LinkedIn</a> or <a href="https://x.com/Asutosh_sidhyaa" target="_blank" className="text-zinc-400 hover:text-white underline underline-offset-4">Twitter</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
