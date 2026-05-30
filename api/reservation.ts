import nodemailer from 'nodemailer';

type ReservationPayload = {
  locale?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  guests?: string;
  allergies?: string;
  vehicle?: string;
  website?: string;
};

const emailTo = 'info@e20sanremo.it';
const allowedLocales = new Set(['fr', 'en', 'it']);

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return Response.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}

function clean(value: unknown) {
  return String(value ?? '').trim();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string) {
  return /^\+[0-9][0-9\s().-]{6,}$/.test(value);
}

function fieldRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:14px 18px;border-bottom:1px solid #eadfcb;color:#7b6a35;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">${escapeHtml(label)}</td>
      <td style="padding:14px 18px;border-bottom:1px solid #eadfcb;color:#2a2a2a;font-size:15px;line-height:1.55;">${escapeHtml(value || 'Non renseigné')}</td>
    </tr>
  `;
}

function buildEmailHtml(data: Required<Omit<ReservationPayload, 'website'>>) {
  const labels = data.locale === 'it'
    ? {
        title: 'Nuova richiesta di prenotazione',
        intro: 'Una nuova richiesta è stata inviata dal sito Cena a Palazzo.',
        firstName: 'Nome',
        lastName: 'Cognome',
        email: 'E-mail',
        phone: 'Telefono',
        guests: 'Numero di persone',
        allergies: 'Allergie, intolleranze o informazioni utili',
        vehicle: 'Targa veicolo',
      }
    : data.locale === 'en'
      ? {
          title: 'New booking request',
          intro: 'A new request has been submitted from the Cena a Palazzo website.',
          firstName: 'First name',
          lastName: 'Last name',
          email: 'Email',
          phone: 'Phone',
          guests: 'Number of guests',
          allergies: 'Allergies, intolerances or useful information',
          vehicle: 'Vehicle registration',
        }
      : {
          title: 'Nouvelle demande de réservation',
          intro: 'Une nouvelle demande a été envoyée depuis le site Cena a Palazzo.',
          firstName: 'Prénom',
          lastName: 'Nom',
          email: 'E-mail',
          phone: 'Téléphone',
          guests: 'Nombre de personnes',
          allergies: 'Allergies, intolérances ou informations utiles',
          vehicle: 'Immatriculation du véhicule',
        };

  return `
    <!doctype html>
    <html>
      <body style="margin:0;background:#f7f2e8;padding:32px;font-family:Montserrat,Arial,sans-serif;color:#2a2a2a;">
        <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #d7bf78;">
          <div style="padding:34px 34px 24px;border-bottom:1px solid #eadfcb;">
            <div style="font-family:Georgia,serif;font-style:italic;font-size:34px;line-height:1;color:#2a2a2a;">Cena a Palazzo</div>
            <p style="margin:18px 0 0;color:#8a7530;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;">${escapeHtml(labels.title)}</p>
            <p style="margin:14px 0 0;color:#5d574c;font-size:15px;line-height:1.7;">${escapeHtml(labels.intro)}</p>
          </div>
          <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
            ${fieldRow(labels.firstName, data.firstName)}
            ${fieldRow(labels.lastName, data.lastName)}
            ${fieldRow(labels.email, data.email)}
            ${fieldRow(labels.phone, data.phone)}
            ${fieldRow(labels.guests, data.guests)}
            ${fieldRow(labels.allergies, data.allergies)}
            ${fieldRow(labels.vehicle, data.vehicle)}
          </table>
          <div style="padding:24px 34px;color:#7a7266;font-size:12px;line-height:1.6;">
            E-mail automatique envoyé depuis cenapalazzo.com
          </div>
        </div>
      </body>
    </html>
  `;
}

function buildEmailText(data: Required<Omit<ReservationPayload, 'website'>>) {
  return [
    'Nouvelle demande de réservation Cena a Palazzo',
    '',
    `Langue: ${data.locale}`,
    `Prénom: ${data.firstName}`,
    `Nom: ${data.lastName}`,
    `E-mail: ${data.email}`,
    `Téléphone: ${data.phone}`,
    `Nombre de personnes: ${data.guests}`,
    `Allergies, intolérances ou informations utiles: ${data.allergies}`,
    `Immatriculation du véhicule: ${data.vehicle || 'Non renseigné'}`,
  ].join('\n');
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ReservationPayload;

    if (clean(body.website) !== '') {
      return jsonResponse({ ok: true });
    }

    const data = {
      locale: allowedLocales.has(clean(body.locale)) ? clean(body.locale) : 'fr',
      firstName: clean(body.firstName),
      lastName: clean(body.lastName),
      email: clean(body.email).toLowerCase(),
      phone: clean(body.phone),
      guests: clean(body.guests),
      allergies: clean(body.allergies),
      vehicle: clean(body.vehicle),
    };

    const guestCount = Number(data.guests);
    if (
      data.firstName.length < 2 ||
      data.lastName.length < 2 ||
      !isValidEmail(data.email) ||
      !isValidPhone(data.phone) ||
      !Number.isInteger(guestCount) ||
      guestCount < 1 ||
      guestCount > 20 ||
      data.allergies.length < 2
    ) {
      return jsonResponse({ ok: false, error: 'invalid_fields' }, 400);
    }

    const requiredEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SMTP_FROM'] as const;
    const missingEnv = requiredEnv.filter((name) => !process.env[name]);
    if (missingEnv.length > 0) {
      console.error('Configuration SMTP manquante', { missingEnv });
      return jsonResponse({ ok: false, error: 'smtp_not_configured' }, 500);
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: emailTo,
      replyTo: data.email,
      subject: `Demande de réservation Cena a Palazzo · ${data.firstName} ${data.lastName}`,
      text: buildEmailText(data),
      html: buildEmailHtml(data),
    });

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error('Erreur envoi réservation', error);
    return jsonResponse({ ok: false, error: 'server_error' }, 500);
  }
}

