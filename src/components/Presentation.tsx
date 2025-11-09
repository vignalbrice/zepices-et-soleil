"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FADE_UP_ANIMATION } from "@/app/constants";

const Presentation: FC = () => {
  return (
    <section className="mt-10 bg-[#FCE0C5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Service traiteur - Zépices & Soleil",
            serviceType: "Traiteur événementiel",
            description:
              "Cuisine créole colorée, réservation simple et offres spéciales.",
            provider: { "@type": "Organization", name: "Zépices & Soleil" },
          }),
        }}
      />
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
        <motion.div {...FADE_UP_ANIMATION}>
          <h3 className="font-serif text-2xl text-emerald-900">
            Une façon plus saine de manger
            <br /> a désormais sa place.
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-emerald-900/90 leading-relaxed">
            <li className="flex gap-3">
              <span>•</span> Une cuisine créole colorée, des classiques
              revisités, pensée pour sublimer vos événements.
            </li>
            <li className="flex gap-3">
              <span>•</span> Réservation et organisation simples, tout se fait
              depuis votre téléphone.
            </li>
            <li className="flex gap-3">
              <span>•</span> Des offres spéciales et promotions pour encore plus
              de plaisir.
            </li>
          </ul>
          <a
            href="#prestations"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-800 text-emerald-900 px-4 py-1.5 text-sm font-semibold hover:bg-white/60 transition"
          >
            Voir nos prestations <ArrowRight size={16} />
          </a>
        </motion.div>

        <motion.div {...FADE_UP_ANIMATION} className="grid grid-cols-3 gap-3">
          {["/work/plat-1.jpeg", "/work/plat-2.jpeg", "/work/plat-3.jpeg"].map(
            (src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`plat-${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Presentation;
