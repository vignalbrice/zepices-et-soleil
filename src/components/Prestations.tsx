"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION } from "@/app/constants";
import Image from "next/image";

const Prestations: FC = () => {
  return (
    <section id="prestations" className="max-w-6xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            name: "Prestations - Zépices & Soleil",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "Mariage" },
              },
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "Anniversaire" },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Événements d’entreprise & privés",
                },
              },
            ],
          }),
        }}
      />
      <h4 className="text-center text-[13px] mb-6 text-emerald-900">
        Nous sommes là pour vous
      </h4>
      <div className="grid md:grid-cols-3 gap-5">
        {[
          { title: "Mariage", img: "/mariage.png" },
          { title: "Anniversaire", img: "/birthday.jpg" },
          {
            title: "Événements d’entreprise & privés",
            img: "/company-events.jpg",
          },
        ].map((c, i) => (
          <motion.article
            {...FADE_UP_ANIMATION}
            key={i}
            className="bg-white rounded-2xl overflow-hidden shadow border border-black/5"
          >
            <div className="relative h-56" key={c.img}>
              <Image src={c.img} alt={c.title} fill className="object-cover" />
            </div>
            <div className="p-4 flex flex-col" key={c.title}>
              <h5 className="font-serif text-lg">{c.title}</h5>
              <div className="my-3 flex items-center justify-between">
                <div className="text-[12px] text-emerald-900/70">
                  Service traiteur • Sur-mesure • Saveurs Caraïbes
                </div>
              </div>
              <a
                href="#contact"
                className="text-center w-auto  gap-2 rounded-full border border-emerald-800 text-emerald-900 px-3 py-1 text-[12px] font-semibold hover:bg-emerald-50"
              >
                Demander un devis
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Prestations;
