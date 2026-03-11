import { sendEmail } from '../../../../lib/email/sendEmail'
import { buildAdminContactEmail } from '../../../../lib/email/contactTemplates'

export const runtime = 'nodejs'

export async function POST(request) {
  try {
    const payload = await request.json()
    const adminEmail = process.env.CONTACT_ADMIN_EMAIL

    if (!adminEmail) {
      return Response.json(
        { ok: false, error: 'CONTACT_ADMIN_EMAIL non configuree' },
        { status: 500 }
      )
    }

    if (!payload?.name || !payload?.phone_number) {
      return Response.json(
        { ok: false, error: 'Champs obligatoires manquants' },
        { status: 400 }
      )
    }

    await sendEmail({
      to: adminEmail,
      subject: `Nouveau contact - ${payload.name}`,
      html: buildAdminContactEmail(payload),
      replyTo: payload.email || undefined,
    })

    return Response.json({ ok: true })
  } catch (error) {
    return Response.json(
      { ok: false, error: error.message || 'Erreur serveur' },
      { status: 500 }
    )
  }
}
