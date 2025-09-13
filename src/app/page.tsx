"use client";

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import FooterCard from "@/components/FooterCard";
import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Presentation from "@/components/Presentation";
import Prestations from "@/components/Prestations";
import Marketing from "@/components/Marketing";
import HowItWorks from "@/components/HowItWorks";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF5] text-[#1B1B1B]">
      {/* NAVBAR */}
      <Navbar />
      {/* HERO */}
      <Hero />
      {/* HIGHLIGHT ORANGE – texte ancien adapté */}
      <Presentation />
      {/* PRESTATIONS – 3 cartes issues de l’ancien contenu */}
      <Prestations />
      {/* BLOC VERT – phrase marketing FR */}
      <Marketing />
      {/* HOW IT WORKS – 3 étapes avec icônes */}
      <HowItWorks />
      {/* TEMOIGNAGE ORANGE – reprend un avis de l'ancien contenu */}
      <Testimonials />
      {/* CTA FOOTER CARD */}
      <FooterCard />
      {/* FORMULAIRE DE CONTACT / DEVIS */}
      <ContactForm />
      {/* FOOTER avec infos FR d'origine */}
      <Footer />
      {/* Bouton flottant WhatsApp (mobile) */}
      <FloatingButton />
    </main>
  );
}
