import { PHONE_NUMBER } from "@/app/constants";
import { MenuIcon, PhoneCall } from "lucide-react";
import React, { FC, useState } from "react";

const Navbar: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-[#f99e1a] grid place-items-center text-white font-bold">
            Z
          </div>
          <span className="font-serif text-lg">Zépices &amp; Soleil</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:text-[#f99e1a]/70 transition" href="#hero">
            Accueil
          </a>
          <a className="hover:text-[#f99e1a]/70 transition" href="#prestations">
            Prestations
          </a>
          <a className="hover:text-[#f99e1a]/70 transition" href="#galerie">
            Réalisations
          </a>
          <a className="hover:text-[#f99e1a]/70 transition" href="#contact">
            Contact
          </a>
        </nav>

        <a
          href={`tel:+33${PHONE_NUMBER.replace(/ /g, "").slice(1)}`}
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-[#f99e1a]/70 text-[#f99e1a]/80 px-4 py-1.5 text-sm font-semibold hover:bg-[#f99e1a]/10 transition"
        >
          <PhoneCall size={16} />
          {PHONE_NUMBER}
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-black/10"
          aria-label="menu"
        >
          <MenuIcon size={18} />
        </button>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm">
            <a onClick={() => setOpen(false)} href="#hero">
              Accueil
            </a>
            <a onClick={() => setOpen(false)} href="#prestations">
              Prestations
            </a>
            <a onClick={() => setOpen(false)} href="#galerie">
              Réalisations
            </a>
            <a onClick={() => setOpen(false)} href="#contact">
              Contact
            </a>
            <a
              href={`tel:+33${PHONE_NUMBER.replace(/ /g, "").slice(1)}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#f99e1a]/70 text-[#f99e1a]/80 px-4 py-2 font-semibold mt-2"
            >
              <PhoneCall size={16} />
              {PHONE_NUMBER}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
