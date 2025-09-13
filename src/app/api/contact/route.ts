import { NextRequest } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/template/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (body.website) return Response.json({ ok: true }); // honeypot

    const { name, email, phone, eventType, date, message } = body;
    const subject = `Nouvelle demande de devis — ${name} (${eventType || "Événement"})`;

    const { data, error } = await resend.emails.send({
      from: 'Zépices & Soleil <contact@zepices-et-soleil.fr>', // change to your verified domain later
      to: [process.env.NEXT_PUBLIC_EMAIL_ADDRESS!],
      subject,
      react: EmailTemplate({ name, email, phone, eventType, date, message }),
      replyTo: email,
    });

    if (error) return Response.json({ ok: false, error }, { status: 500 });
    return Response.json({ ok: true, data });
  } catch (error) {
    return Response.json({ ok: false, error: String(error) }, { status: 500 });
  }
}
