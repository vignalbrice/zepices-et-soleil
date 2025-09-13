import { Quote, Star } from "lucide-react";
import Image from "next/image";
import React, { useMemo } from "react";

const testimonials = [
  {
    name: "Sophie L.",
    text: "Un repas incroyable, un service chaleureux. Nos invités se sont régalés !",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jean-Marc R.",
    text: "Ambiance festive, plats créoles délicieux, on recommande à 100% !",
    img: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    name: "Karine D.",
    text: "Des couleurs, des saveurs et beaucoup de soleil dans nos assiettes.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Testimonials = () => {
  const mainTestimonial = useMemo(() => testimonials[0], []);

  return (
    <section className="mt-10 bg-[#FF7A1A]">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-[1.2fr,1fr] gap-8 items-center">
        <div className="text-white">
          <Quote className="opacity-70" />
          <p className="mt-3 text-[15px] leading-relaxed">
            “{mainTestimonial.text}”
          </p>
          <div className="mt-5 flex items-center gap-3">
            <Image
              src={mainTestimonial.img}
              alt={mainTestimonial.name}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div>
              <div className="text-sm font-semibold">
                {mainTestimonial.name}
              </div>
              <div className="flex gap-1 text-yellow-100">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/work/plat-8.jpeg"
              alt="Équipe Zépices & Soleil"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 hidden sm:block">
            <div className="rounded-2xl bg-white p-3 shadow-md flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-[#f99e1a] grid place-items-center text-white text-[11px] font-bold">
                Z
              </div>
              <div className="text-sm font-semibold text-emerald-900">
                « Toute l’équipe vous remercie pour votre confiance ! »
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
