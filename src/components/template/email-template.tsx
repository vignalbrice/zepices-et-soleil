// components/EmailTemplate.tsx
import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export interface EmailTemplateProps {
  name: string;
  email: string;
  phone?: string;
  eventType?: string;
  date?: string;
  message: string;
}

export function EmailTemplate({
  name,
  email,
  phone,
  eventType,
  date,
  message,
}: EmailTemplateProps) {
  const messageLines = (message || "").split("\n").map((line, i) => (
    <React.Fragment key={i}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <Html>
      <Head />
      <Preview>Nouvelle demande de devis — {name}</Preview>
      <Tailwind>
        <Body className="bg-[#FFFDF5] text-[#1B1B1B] m-0 p-6">
          <Container className="mx-auto max-w-[640px] bg-white rounded-xl border border-[#eee] p-6">
            <Heading className="text-xl font-bold text-emerald-800 m-0">
              Demande de devis
            </Heading>

            <Section className="mt-4">
              <table className="w-full text-[14px]">
                <tbody>
                  <tr>
                    <td className="w-[170px] font-semibold text-emerald-800 py-1 align-top">
                      Nom :
                    </td>
                    <td className="py-1">{name}</td>
                  </tr>
                  <tr>
                    <td className="w-[170px] font-semibold text-emerald-800 py-1 align-top">
                      Email :
                    </td>
                    <td className="py-1">{email}</td>
                  </tr>
                  <tr>
                    <td className="w-[170px] font-semibold text-emerald-800 py-1 align-top">
                      Téléphone :
                    </td>
                    <td className="py-1">{phone || "-"}</td>
                  </tr>
                  <tr>
                    <td className="w-[170px] font-semibold text-emerald-800 py-1 align-top">
                      Type d&apos;événement :
                    </td>
                    <td className="py-1">{eventType || "-"}</td>
                  </tr>
                  <tr>
                    <td className="w-[170px] font-semibold text-emerald-800 py-1 align-top">
                      Date :
                    </td>
                    <td className="py-1">{date || "-"}</td>
                  </tr>
                  <tr>
                    <td className="w-[170px] font-semibold text-emerald-800 py-1 align-top">
                      Message :
                    </td>
                    <td className="py-1">{messageLines}</td>
                  </tr>
                </tbody>
              </table>
            </Section>

            <Hr className="border-t border-[#f2f2f2] my-4" />
            <Text className="text-[12px] text-[#6b7280] m-0">
              Envoyé depuis le site <strong>Zépices &amp; Soleil</strong>.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
