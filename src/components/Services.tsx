'use client';

import { Calculator, BarChart3, Building2, Users, FileCheck, Briefcase, Check, Calendar } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/studiocapitoli-info/30min?utm_source=website&utm_medium=services&utm_content=cta_button";

const services = [
  {
    icon: Calculator,
    title: "Consulenza Fiscale",
    description: "Pianificazione fiscale e tributaria per ottimizzare il carico fiscale.",
    features: ["Dichiarazioni fiscali", "Pianificazione tributaria", "Assistenza IVA", "Regime forfettario"]
  },
  {
    icon: BarChart3,
    title: "Contabilità",
    description: "Gestione completa della contabilità aziendale e tenuta dei registri.",
    features: ["Contabilità ordinaria", "Contabilità semplificata", "Bilanci", "Reporting periodico"]
  },
  {
    icon: Building2,
    title: "Gestione Societaria",
    description: "Supporto completo per società di persone e di capitali.",
    features: ["Apertura partita IVA", "Gestione SRL", "Chiusura partita IVA", "Adempimenti societari"]
  },
  {
    icon: Users,
    title: "Paghe e Contributi",
    description: "Elaborazione buste paga e gestione del personale.",
    features: ["Elaborazione paghe", "Buste paga", "Contributi INPS/INAIL", "Certificazione Unica"]
  },
  {
    icon: Briefcase,
    title: "Professionisti",
    description: "Servizi dedicati a medici, periti, consulenti e liberi professionisti.",
    features: ["Regime forfettario", "Contribuenti minimi", "Fatturazione elettronica", "F24 e scadenze"]
  },
  {
    icon: FileCheck,
    title: "Imprese e Attività",
    description: "Consulenza per artigiani, commercianti, B&B e affittacamere.",
    features: ["Artigiani e commercianti", "Taxi e NCC", "B&B e affittacamere", "Amministratori condominiali"]
  }
];

export default function Services() {
  return (
    <section id="servizi" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a5a45]/10 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#1a5a45] rounded-full" />
            <span className="text-[#1a5a45] text-sm font-medium">I Nostri Servizi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Soluzioni per il tuo{' '}
            <span className="text-[#1a5a45]">business</span>
          </h2>
          <p className="text-lg text-gray-600">
            Consulenza fiscale, societaria e contabile. Servizi anche a distanza in tutta Italia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#1a5a45]/10 flex items-center justify-center text-[#1a5a45] mb-5">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-[#1a5a45]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#1a5a45]" strokeWidth={3} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Non trovi il servizio che cerchi? Contattaci per una consulenza personalizzata.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a5a45] text-white font-semibold rounded-xl hover:bg-[#134435] transition-all shadow-lg hover:shadow-xl"
          >
            <Calendar className="w-5 h-5" />
            Prenota una Consulenza
          </a>
        </div>
      </div>
    </section>
  );
}
