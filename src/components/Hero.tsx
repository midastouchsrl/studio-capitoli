'use client';

import { ArrowRight, Calendar, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const CALENDLY_URL = "https://calendly.com/studiocapitoli-info/30min?utm_source=website&utm_medium=hero&utm_content=cta_button";

const stats = [
  { value: 'Tutta Italia', label: 'Copertura nazionale' },
  { value: '17+', label: 'Anni di esperienza' },
  { value: '100%', label: 'A distanza' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          quality={80}
          sizes="100vw"
        />
        {/* Gradient Overlay - Brand colors */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              135deg,
              rgba(15, 53, 40, 0.92) 0%,
              rgba(19, 68, 53, 0.88) 40%,
              rgba(26, 90, 69, 0.85) 100%
            )`
          }}
        />
        {/* Bottom fade for smooth transition */}
        <div
          className="absolute inset-x-0 bottom-0 h-32"
          style={{
            background: 'linear-gradient(to top, rgba(15, 53, 40, 1) 0%, transparent 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in">
            <span className="text-white">Consulenza fiscale</span>
            <br />
            <span className="text-white">per la tua </span>
            <span className="text-[#d4b896]">crescita</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-xl leading-relaxed animate-fade-in animation-delay-100">
            Dal 2008 affianchiamo <span className="text-white font-medium">PMI e liberi professionisti</span> nella gestione fiscale, societaria e contabile. Servizi anche a distanza in tutta Italia.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in animation-delay-200">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#1a5a45] font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02]"
            >
              <Calendar className="w-5 h-5" />
              <span>Prenota una Consulenza</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servizi"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-sm"
            >
              Scopri i Servizi
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center animate-fade-in animation-delay-300">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex items-center">
                <div className="text-center px-6 sm:px-10">
                  <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-[#d4b896] text-sm font-medium">{stat.label}</div>
                </div>
                {index < stats.length - 1 && (
                  <div className="w-px h-12 bg-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#servizi"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
      >
        <span className="text-sm font-medium">Scopri</span>
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
