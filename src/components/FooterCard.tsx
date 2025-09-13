import React, { FC } from "react";

const FooterCard: FC = () => {
  return (
    <section id="book" className="py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-black/10 shadow px-6 py-8 text-center">
        <div className="mx-auto h-8 w-8 rounded-full bg-[#f99e1a] text-white grid place-items-center font-bold">
          Z
        </div>
        <h3 className="mt-4 font-serif text-2xl text-emerald-900">
          Envie d’un devis rapide ?
        </h3>
        <p className="mt-2 text-sm text-[#f99e1a]/70">
          Traiteur événements, mariages et fêtes privées — cuisine Caraïbe
          pleine de soleil. Dites-nous tout, on s’occupe du reste !
        </p>
        <a
          href="#contact"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#f99e1a] text-white px-5 py-2 text-sm font-semibold hover:translate-y-[-1px] transition"
        >
          Demander un devis
        </a>
      </div>
    </section>
  );
};

export default FooterCard;
