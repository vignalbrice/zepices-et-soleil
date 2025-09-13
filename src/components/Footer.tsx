import { EMAIL_ADDRESS, PHONE_NUMBER, WHATSAPP_LINK } from "@/app/constants";
import { Instagram, Mail, PhoneCall } from "lucide-react";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-[13px]">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#f99e1a] grid place-items-center text-white font-bold">
              Z
            </div>
            <span className="font-serif text-lg">Zépices &amp; Soleil</span>
          </div>
          <div className="mt-3 space-y-1 text-[#f99e1a]/80">
            <div>📞 {PHONE_NUMBER}</div>
            <a className="underline" href={`mailto:${EMAIL_ADDRESS}`}>
              {EMAIL_ADDRESS}
            </a>
            <div className="flex gap-2 pt-2">
              <a
                href={WHATSAPP_LINK}
                className="inline-flex items-center gap-2 rounded-full border border-[#f99e1a]/70 text-[#f99e1a]/80 px-3 py-1 font-semibold hover:bg-[#f99e1a]/10 transition"
              >
                <PhoneCall size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="font-semibold mb-2">Navigation</div>
          <ul className="space-y-1">
            <li>
              <a href="#hero" className="hover:text-[#f99e1a]/80">
                Accueil
              </a>
            </li>
            <li>
              <a href="#prestations" className="hover:text-[#f99e1a]/80">
                Prestations
              </a>
            </li>
            <li>
              <a href="#galerie" className="hover:text-[#f99e1a]/80">
                Réalisations
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#f99e1a]/80">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-2">Suivez-nous</div>
          <ul className="space-y-1">
            <li className="flex items-center gap-2 group">
              <Instagram size={16} />{" "}
              <a
                className="group-hover:text-[#f99e1a]/70"
                href="https://www.instagram.com/zepices.soleil?igsh=aGEwY3NydGtjNGxm"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />{" "}
              <a
                className="hover:text-[#f99e1a]/70"
                href={`mailto:${EMAIL_ADDRESS}`}
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-[12px] text-center py-6 text-[#f99e1a]/70">
        © {year} Zépices &amp; Soleil — Traiteur événements, mariages &amp;
        Caraïbes. • Mentions légales
      </div>
    </footer>
  );
};

export default Footer;
