'use client';

import { Shield, Zap, Users, Lightbulb, Calendar } from 'lucide-react';

const CALENDLY_URL = "https://calendly.com/studiocapitoli-info/30min?utm_source=website&utm_medium=about&utm_content=cta_button";

const values = [
  {
    icon: Shield,
    title: "Affidabilità",
    description: "17 anni di esperienza"
  },
  {
    icon: Zap,
    title: "Efficienza",
    description: "Servizi anche a distanza"
  },
  {
    icon: Users,
    title: "Specializzazione",
    description: "PMI e professionisti"
  },
  {
    icon: Lightbulb,
    title: "Proattività",
    description: "Sempre aggiornati"
  }
];

export default function About() {
  return (
    <section id="chi-siamo" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a5a45]/10 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-[#1a5a45] rounded-full" />
              <span className="text-[#1a5a45] text-sm font-medium">Chi Siamo</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Il tuo partner per il{' '}
              <span className="text-[#1a5a45]">successo fiscale</span>
            </h2>

            <div className="space-y-4 text-gray-600 mb-8">
              <p className="text-lg leading-relaxed">
                <strong className="text-gray-900">Studio Capitoli</strong> opera dal 2008 fornendo
                consulenza fiscale, societaria e tenuta della contabilità a{' '}
                <strong className="text-gray-900">PMI e liberi professionisti</strong>.
              </p>
              <p className="leading-relaxed">
                <strong className="text-gray-900">Alessio Capitoli</strong>, Tributarista iscritto
                all&apos;Albo di Roma (Matricola AB_000157), offre servizi professionali anche a
                distanza in tutta Italia, garantendo la stessa qualità e attenzione di una
                consulenza in presenza.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-gray-50">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#1a5a45]/10 flex items-center justify-center text-[#1a5a45] flex-shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm">{value.title}</h4>
                      <p className="text-xs text-gray-500 truncate">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1a5a45] text-white font-semibold rounded-xl hover:bg-[#134435] transition-all shadow-lg hover:shadow-xl"
            >
              <Calendar className="w-5 h-5" />
              Conosciamoci
            </a>
          </div>

          {/* Right - Quote Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#1a5a45] to-[#0f3528] rounded-3xl p-8 lg:p-10 text-white">
              {/* Pattern */}
              <div
                className="absolute inset-0 opacity-5 rounded-3xl"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '24px 24px'
                }}
              />

              <div className="relative">
                {/* Quote Icon */}
                <svg className="w-10 h-10 text-white/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-8">
                  &ldquo;La contabilità non è solo F24. È capire come sta andando
                  la tua attività e aiutarti a farla crescere.&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                    AC
                  </div>
                  <div>
                    <div className="font-semibold">Alessio Capitoli</div>
                    <div className="text-white/60 text-sm">Tributarista</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
