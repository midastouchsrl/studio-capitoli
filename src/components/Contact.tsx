'use client';

import { Mail, Instagram, Facebook, Calendar, Check, ArrowRight, MapPin } from 'lucide-react';

const CALENDLY_URL = "https://calendly.com/studiocapitoli-info/30min?utm_source=website&utm_medium=contact&utm_content=cta_button";
const INSTAGRAM_URL = "https://www.instagram.com/studio_capitoli";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100024050736705";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "info@studiocapitoli.it",
    href: "mailto:info@studiocapitoli.it",
    description: "Scrivici per qualsiasi richiesta"
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@studio_capitoli",
    href: INSTAGRAM_URL,
    description: "Seguici per aggiornamenti"
  },
  {
    icon: Facebook,
    title: "Facebook",
    value: "Studio Capitoli",
    href: FACEBOOK_URL,
    description: "La nostra pagina Facebook"
  },
  {
    icon: Calendar,
    title: "Appuntamento",
    value: "Prenota una call",
    href: CALENDLY_URL,
    description: "Consulenza gratuita"
  }
];

const benefits = [
  "Analisi gratuita della tua situazione fiscale",
  "Consigli pratici e immediati",
  "Nessun impegno, solo valore"
];

export default function Contact() {
  return (
    <section id="contatti" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a5a45]/10 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-[#1a5a45] rounded-full" />
              <span className="text-[#1a5a45] text-sm font-medium">Contatti</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Iniziamo a{' '}
              <span className="text-[#1a5a45]">collaborare</span>
            </h2>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Prenota una consulenza gratuita di 30 minuti per discutere le tue
              esigenze. Senza impegno, solo per conoscerci.
            </p>

            {/* Contact Methods */}
            <div className="space-y-3 mb-10">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#1a5a45]/10 flex items-center justify-center text-[#1a5a45] group-hover:bg-[#1a5a45] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 group-hover:text-[#1a5a45] transition-colors">
                        {method.title}
                      </div>
                      <div className="text-[#1a5a45] font-medium text-sm truncate">{method.value}</div>
                      <div className="text-gray-500 text-xs">{method.description}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#1a5a45] transition-colors" />
                  </a>
                );
              })}
            </div>

            {/* Address */}
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <MapPin className="w-5 h-5 text-[#1a5a45]" />
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Largo Saturno</span>, Marina di San Nicola, RM
              </div>
            </div>
          </div>

          {/* Right - CTA Card */}
          <div>
            <div className="bg-gradient-to-br from-[#1a5a45] to-[#0f3528] rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
              {/* Pattern */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '20px 20px'
                }}
              />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7" />
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Prenota la tua consulenza gratuita
                </h3>

                <p className="text-white/70 mb-8 leading-relaxed">
                  30 minuti per conoscerci, capire le tue esigenze e mostrarti
                  come possiamo aiutarti a far crescere il tuo business.
                </p>

                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-white/90">
                      <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 w-full px-8 py-4 bg-white text-[#1a5a45] font-semibold rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Prenota Ora su Calendly</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>

                <p className="text-center text-white/50 text-sm mt-4">
                  Disponibilità immediata
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
