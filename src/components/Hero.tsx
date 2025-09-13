import { Utensils } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";

const Hero: FC = () => {
  return (
    <section id="hero" className="relative">
      <div className="max-w-4xl mx-auto text-center px-4 pt-12 pb-6">
        <p className="mx-auto text-[13px] inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-pink-100 text-[11px] font-bold">
            4.9
          </span>
          Plébiscité par nos clients pour nos saveurs caribéennes
        </p>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mt-5 text-emerald-900">
          Des saveurs inoubliables où <br />
          <span className="text-[#f99e1a]">
            soleil et épices se rencontrent
          </span>
        </h1>

        <a
          href="#prestations"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f99e1a] text-white px-5 py-2 text-sm font-semibold hover:translate-y-[-1px] transition"
        >
          Découvrez nos prestations <Utensils size={16} />
        </a>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/work/plat-7.jpeg"
            alt="Buffet Zépices & Soleil"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
