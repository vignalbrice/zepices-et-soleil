"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState<null | "ok" | "ko">(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    try {
      setLoading(true);
      setDone(null);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.ok) {
        setDone("ok");
        form.reset();
      } else {
        setDone("ko");
      }
    } catch {
      setDone("ko");
    } finally {
      setLoading(false);
    }
  };

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Demande de devis - Zépices & Soleil",
            description:
              "Formulaire de contact pour demander un devis traiteur (mariage, anniversaire, entreprise).",
            potentialAction: {
              "@type": "SendAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://zepices-soleil.fr/api/contact",
                httpMethod: "POST",
              },
            },
          }),
        }}
      />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-center font-serif text-2xl text-emerald-900 mb-2">
          Demandez un devis personnalisé
        </h2>
        <p className="text-center text-sm text-emerald-800/70 mb-8">
          Remplissez le formulaire ci-dessous, nous revenons vers vous
          rapidement.
        </p>

        <form
          className="space-y-4 bg-white rounded-2xl shadow border border-black/5 p-6"
          onSubmit={onSubmit}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              onChange={onChange}
              type="text"
              placeholder="Nom & Prénom"
              name="name"
              required
              className="w-full rounded-lg border border-[#f99e1a]/20 px-4 py-2 text-sm outline-none focus:border-[#f99e1a]"
            />
            <input
              name="email"
              onChange={onChange}
              type="email"
              placeholder="Adresse e-mail"
              required
              className="w-full rounded-lg border border-[#f99e1a]/20 px-4 py-2 text-sm outline-none focus:border-[#f99e1a]"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="phone"
              onChange={onChange}
              type="tel"
              placeholder="Téléphone"
              required
              className="w-full rounded-lg border border-[#f99e1a]/20 px-4 py-2 text-sm outline-none focus:border-[#f99e1a]"
            />
            <select
              required
              name="eventType"
              onChange={onChange}
              className="w-full rounded-lg border border-[#f99e1a]/20 px-4 py-2 text-sm outline-none focus:border-[#f99e1a]"
            >
              <option value="">Type d’événement</option>
              <option>Mariage</option>
              <option>Anniversaire</option>
              <option>Entreprise / Privé</option>
              <option>Autre</option>
            </select>
          </div>

          <input
            required
            name="date"
            onChange={onChange}
            type="date"
            placeholder="Date de l’événement"
            className="w-full rounded-lg border border-[#f99e1a]/20 px-4 py-2 text-sm outline-none focus:border-[#f99e1a]"
          />

          <textarea
            name="message"
            onChange={onChange}
            rows={4}
            required
            placeholder="Votre message ou demande de précisions"
            className="w-full rounded-lg border border-[#f99e1a]/20  px-4 py-2 text-sm outline-none focus:border-[#f99e1a] resize-y"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#f99e1a] text-white py-3 font-semibold hover:bg-[#f99e1a]/90 transition disabled:opacity-60"
          >
            {loading ? "Envoi en cours…" : "Envoyer ma demande"}
          </button>

          {done === "ok" && (
            <p className="text-center text-emerald-700 text-sm mt-2">
              Merci ! Votre demande a bien été envoyée. Nous vous répondons très
              vite.
            </p>
          )}
          {done === "ko" && (
            <p className="text-center text-rose-600 text-sm mt-2">
              Oups, l’envoi a échoué. Réessayez ou contactez-nous par email.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
