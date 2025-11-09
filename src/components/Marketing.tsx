import React, { FC } from "react";

const Marketing: FC = () => (
  <section className="bg-[#FCE0C5] text-emerald-900">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPageElement",
          name: "Bloc marketing - Des plats adaptés à toutes les envies",
          description:
            "Des entrées savoureuses aux plats généreux, notre menu s’adapte à toutes les envies, régimes et occasions.",
        }),
      }}
    />
    <div className="max-w-5xl mx-auto px-6 py-10 text-center">
      <p className="font-serif text-2xl leading-relaxed">
        Des entrées savoureuses 🥗 aux plats généreux 🍲, notre menu s’adapte à
        toutes les envies, régimes et occasions. Soleil garanti dans l’assiette
        !
      </p>
    </div>
  </section>
);
export default Marketing;
