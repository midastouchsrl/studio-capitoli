'use client';

import { Monitor, Bell, Eye, Clock, Target, BookOpen, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: "Approccio Digitale",
    description: "Gestione documentale cloud-based, firma digitale e comunicazione in tempo reale."
  },
  {
    icon: Bell,
    title: "Consulenza Proattiva",
    description: "Ti aggiorniamo su novità normative e opportunità fiscali prima che tu ce lo chieda."
  },
  {
    icon: Eye,
    title: "Trasparenza Totale",
    description: "Tariffe chiare, nessun costo nascosto. Preventivi dettagliati sempre."
  },
  {
    icon: Clock,
    title: "Risposta Rapida",
    description: "Garantiamo risposta entro 24 ore. Per le urgenze, siamo sempre reperibili."
  },
  {
    icon: Target,
    title: "Specializzazione",
    description: "Focus su startup, liberi professionisti e PMI. Parliamo la tua lingua."
  },
  {
    icon: BookOpen,
    title: "Formazione Continua",
    description: "Aggiornamento costante sulle normative. Webinar e guide gratuite per te."
  }
];

export default function WhyUs() {
  return (
    <section id="vantaggi" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a5a45]/10 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#1a5a45] rounded-full" />
            <span className="text-[#1a5a45] text-sm font-medium">I Nostri Vantaggi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Perché scegliere{' '}
            <span className="text-[#1a5a45]">Studio Capitoli</span>
          </h2>
          <p className="text-lg text-gray-600">
            Non siamo un semplice studio di commercialisti. Siamo il tuo partner
            strategico per la crescita e la tranquillità fiscale.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#1a5a45]/20 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#1a5a45]/10 flex items-center justify-center text-[#1a5a45] mb-5 group-hover:bg-[#1a5a45] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                {/* Number */}
                <span className="inline-block px-2.5 py-1 text-xs font-semibold text-[#1a5a45] bg-[#1a5a45]/10 rounded-full mb-3">
                  0{index + 1}
                </span>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#1a5a45] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-6 lg:p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#1a5a45]/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#1a5a45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xl font-bold text-gray-900">Prima consulenza gratuita</div>
                <div className="text-gray-500">Senza impegno, per conoscerci meglio</div>
              </div>
            </div>
            <a
              href="#contatti"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a5a45] text-white font-semibold rounded-xl hover:bg-[#134435] transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Inizia Ora
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
