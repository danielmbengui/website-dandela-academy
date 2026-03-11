import { sendEmail } from '../../../../lib/email/sendEmail'
import { buildUserContactEmail } from '../../../../lib/email/contactTemplates'

export const runtime = 'nodejs'

export async function POST(request) {
  try {
    const payload = await request.json()

    if (!payload?.email) {
      return Response.json({ ok: true, skipped: true })
    }

    await sendEmail({
      to: payload.email,
      subject: 'Votre demande a bien ete recue',
      html: buildUserContactEmail(payload),
    })

    return Response.json({ ok: true })
  } catch (error) {
    return Response.json(
      { ok: false, error: error.message || 'Erreur serveur' },
      { status: 500 }
    )
  }
}
