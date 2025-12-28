'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, Mail, Calendar } from 'lucide-react';

const CALENDLY_URL = "https://calendly.com/studiocapitoli-info/30min?utm_source=website&utm_medium=footer&utm_content=cta_button";
const INSTAGRAM_URL = "https://www.instagram.com/studio_capitoli";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100024050736705";

const footerLinks = {
  servizi: [
    { name: 'Consulenza Fiscale', href: '#servizi' },
    { name: 'Contabilità', href: '#servizi' },
    { name: 'Startup & PMI', href: '#servizi' },
    { name: 'Consulenza del Lavoro', href: '#servizi' },
  ],
  studio: [
    { name: 'Chi Siamo', href: '#chi-siamo' },
    { name: 'I Nostri Vantaggi', href: '#vantaggi' },
    { name: 'Contatti', href: '#contatti' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.png"
                alt="Studio Capitoli"
                width={140}
                height={42}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Consulenza fiscale e contabile su misura per professionisti e imprese.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#1a5a45] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#1a5a45] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@studiocapitoli.it"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#1a5a45] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Servizi */}
          <div>
            <h4 className="font-semibold mb-5">Servizi</h4>
            <ul className="space-y-3">
              {footerLinks.servizi.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio */}
          <div>
            <h4 className="font-semibold mb-5">Lo Studio</h4>
            <ul className="space-y-3">
              {footerLinks.studio.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-semibold mb-5">Inizia Ora</h4>
            <p className="text-gray-400 text-sm mb-5">
              Prenota una consulenza gratuita.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#1a5a45] text-white text-sm font-semibold rounded-xl hover:bg-[#134435] transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Prenota Consulenza
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {currentYear} Studio Capitoli. Tutti i diritti riservati.</p>
            <p>Alessio Capitoli - Tributarista</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
