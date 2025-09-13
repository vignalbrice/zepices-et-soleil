import { CalendarDays, HeartHandshake, Smile } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";

const HowItWorks: FC = () => {
  return (
    <>
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-center font-serif text-3xl text-[#FF7A1A] mb-6">
          – Le meilleur du goût est ici –
        </h3>
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow">
          <Image
            src="/work/plat-4.jpeg"
            alt="Buffet caribéen"
            fill
            className="object-cover bg-gradient-to-t from-black/70 to-transparent transition-opacity opacity-100"
          />
        </div>
      </section>

      {/* HOW IT WORKS – version FR */}
      <section className="max-w-5xl mx-auto px-4 pb-4">
        <h4 className="text-center font-serif text-xl text-emerald-900">
          Comment ça marche ?
        </h4>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5 ">
          {[
            { icon: HeartHandshake, title: "Choisissez vos plats" },
            { icon: CalendarDays, title: "Réservez / Demandez un devis" },
            { icon: Smile, title: "Savourez le jour J" },
          ].map(({ icon: Icon, title }, i) => (
            <div
              key={i}
              className="rounded-2xl border border-black/10 bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-3 h-12 w-12 grid place-items-center rounded-full bg-[#f99e1a]/10">
                <Icon />
              </div>
              <div className="font-semibold text-emerald-900">{title}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
