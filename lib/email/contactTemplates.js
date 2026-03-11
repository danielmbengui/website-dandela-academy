function escapeHtml(value = '') {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export function buildAdminContactEmail(data) {
  const name = escapeHtml(data.name || 'N/A')
  const email = escapeHtml(data.email || 'N/A')
  const phone = escapeHtml(data.phone_number || 'N/A')
  const type = escapeHtml(data.type || 'other')
  const message = escapeHtml(data.message || 'Aucun message')

  return `
    <h2>Nouvelle demande de contact</h2>
    <p><strong>Nom:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telephone:</strong> ${phone}</p>
    <p><strong>Formation / Type:</strong> ${type}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replaceAll('\n', '<br />')}</p>
  `
}

export function buildUserContactEmail(data) {
  const name = escapeHtml(data.name || '')

  return `
    <h2>Demande recue avec succes</h2>
    <p>Bonjour ${name || 'cher candidat'},</p>
    <p>Merci d'avoir contacte Dandela Academy. Notre equipe reviendra vers vous tres prochainement.</p>
    <p>Cordialement,<br />Dandela Academy</p>
  `
}
