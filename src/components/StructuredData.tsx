export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://studiocapitoli.it/#business",
        name: "Studio Capitoli",
        alternateName: "Studio Capitoli - Tributarista",
        description: "Consulenza fiscale, contabile e societaria per PMI e liberi professionisti. Servizi anche a distanza in tutta Italia.",
        url: "https://studiocapitoli.it",
        logo: "https://studiocapitoli.it/logo.png",
        image: "https://studiocapitoli.it/og-image.jpg",
        email: "info@studiocapitoli.it",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Largo Saturno",
          addressLocality: "Marina di San Nicola",
          addressRegion: "RM",
          addressCountry: "IT",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "41.9",
          longitude: "12.4",
        },
        areaServed: {
          "@type": "Country",
          name: "Italia",
        },
        serviceType: [
          "Consulenza Fiscale",
          "Contabilità",
          "Consulenza Tributaria",
          "Gestione Societaria",
          "Dichiarazione dei Redditi",
          "Regime Forfettario",
        ],
        priceRange: "€€",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        sameAs: [
          "https://www.instagram.com/studio_capitoli",
          "https://www.facebook.com/profile.php?id=100024050736705",
        ],
        founder: {
          "@type": "Person",
          name: "Alessio Capitoli",
          jobTitle: "Tributarista",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://studiocapitoli.it/#website",
        url: "https://studiocapitoli.it",
        name: "Studio Capitoli",
        description: "Consulenza fiscale e contabile per PMI e professionisti",
        publisher: {
          "@id": "https://studiocapitoli.it/#business",
        },
        inLanguage: "it-IT",
      },
      {
        "@type": "Person",
        "@id": "https://studiocapitoli.it/#person",
        name: "Alessio Capitoli",
        jobTitle: "Tributarista",
        worksFor: {
          "@id": "https://studiocapitoli.it/#business",
        },
        description: "Tributarista iscritto all'Albo di Roma con oltre 17 anni di esperienza nella consulenza fiscale e contabile.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
