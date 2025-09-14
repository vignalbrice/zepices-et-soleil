export const EMAIL_ADDRESS =
  process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "contact@zepices-soleil.fr";

export const PHONE_NUMBER =
  process.env.NEXT_PUBLIC_PHONE_NUMBER || "+33 6 16 24 77 81";

export const WHATSAPP_LINK =
  process.env.NEXT_PUBLIC_WHATSAPP_LINK ||
  "https://wa.me/330616247781";

export const FADE_UP_ANIMATION = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  viewport: { once: true, margin: "-80px" },
};