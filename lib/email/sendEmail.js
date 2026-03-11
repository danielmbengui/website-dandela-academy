const RESEND_API_URL = 'https://api.resend.com/emails'

export async function sendEmail({ to, subject, html, replyTo }) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL

  if (!apiKey) {
    throw new Error('RESEND_API_KEY non configuree')
  }

  if (!from) {
    throw new Error('CONTACT_FROM_EMAIL non configuree')
  }

  const payload = {
    from,
    to: Array.isArray(to) ? to : [to],
    subject,
    html,
  }

  if (replyTo) {
    payload.reply_to = replyTo
  }

  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const details = await response.text()
    throw new Error(`Erreur envoi email: ${details}`)
  }

  return response.json()
}
