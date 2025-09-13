import { WHATSAPP_LINK } from "@/app/constants";
import { PhoneCall } from "lucide-react";
import React, { FC } from "react";

const FloatingButton: FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener"
      className="fixed bottom-6 right-4 bg-[#f99e1a] hover:bg-[#f99e1a]/70 text-white rounded-full p-4 shadow-lg z-50 flex items-center gap-1 transition-all"
      style={{ boxShadow: "0 4px 16px #34946944" }}
      title="Contact Whatsapp"
    >
      <PhoneCall size={24} /> <span className="sr-only">WhatsApp</span>
    </a>
  );
};

export default FloatingButton;
