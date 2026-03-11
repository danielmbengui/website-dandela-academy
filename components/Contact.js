'use client'

import { useState } from 'react'
import { useLang } from '../lib/LangContext'
import styles from './Contact.module.css'
import { API_EMAIL_ADMIN_CONTACT, API_EMAIL_CONTACT } from '../lib/constants/constants_api'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  const [form, setForm] = useState({ nom:'', email:'', tel:'', formation:'', msg:'' })
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    setSubmitting(true)

    try {
      const dataSend = {
        name: form.nom,
        email: form.email,
        phone_number: form.tel,
        type: form.formation || 'other',
        message: form.msg || '',
      }

      const [adminRes] = await Promise.allSettled([
        fetch(API_EMAIL_ADMIN_CONTACT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataSend),
        }),
        fetch(API_EMAIL_CONTACT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataSend),
        }),
      ])

      if (adminRes.status === 'fulfilled' && adminRes.value.ok) {
        setSent(true)
        setForm({ nom: '', email: '', tel: '', formation: '', msg: '' })
      } else {
        setErrorMessage('Une erreur est survenue lors de l’envoi. Réessayez dans quelques instants.')
      }
    } catch {
      setErrorMessage('Une erreur est survenue lors de l’envoi. Réessayez dans quelques instants.')
    } finally {
      setSubmitting(false)
    }
  }

  const WA_SVG = <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>

  const INFOS = [
    { icon:<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.96-1.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, label:c.labels.phone, value:'+244 974 502 709', href:'tel:+244974502709' },
    { icon:<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label:c.labels.email, value:'info@academy.dandela.com', href:'mailto:info@academy.dandela.com' },
    { icon:<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, label:c.labels.address, value:'Zango III, Luanda, Angola', href:'https://maps.app.goo.gl/6ip8g6cQtmsMC26v5', external:true },
  ]

  return (
    <section className={styles.section} id="contact">
      <div className={styles.bg}>
        <div className={styles.grad}/>
        <div className={styles.grid}/>
        <div className={`${styles.blob} ${styles.b1}`}/>
        <div className={`${styles.blob} ${styles.b2}`}/>
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <div className={styles.badge}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#FF9F1C"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            {c.badge}
          </div>
          <h2 className={styles.title}>
            {c.title[0]}<br /><span>{c.title[1]}</span>
          </h2>
          <p className={styles.subtitle}>{c.subtitle}</p>

          <div className={styles.infos}>
            {INFOS.map((info, i) => (
              <div key={i} className={styles.infoItem}>
                <div className={styles.infoIcon}>{info.icon}</div>
                <div>
                  <div className={styles.infoLabel}>{info.label}</div>
                  <a
                    href={info.href}
                    className={styles.infoLink}
                    target={info.external ? '_blank' : undefined}
                    rel={info.external ? 'noopener noreferrer' : undefined}
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <a href="https://wa.me/244955872494" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            {WA_SVG} {c.wa}
          </a>
        </div>

        <div className={styles.right}>
          <div className={styles.formCard}>
            {sent ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1565D8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className={styles.successTitle}>{c.successTitle}</h3>
                <p className={styles.successText}>{c.successText}</p>
                <button className="btn-primary" onClick={() => setSent(false)}>{c.newReq}</button>
              </div>
            ) : (
              <>
                <h3 className={styles.formTitle}>{c.formTitle}</h3>
                <p className={styles.formSub}>{c.formSub}</p>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.field}>
                    <label className={styles.label}>{c.fields.nom}</label>
                    <input type="text" name="nom" className={styles.input} placeholder={c.fields.nomPh} value={form.nom} onChange={e=>setForm(f=>({...f,nom:e.target.value}))} required disabled={submitting} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>{c.fields.email}</label>
                    <input type="email" name="email" className={styles.input} placeholder={c.fields.emailPh} value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} required disabled={submitting} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>{c.fields.tel}</label>
                    <input type="tel" name="tel" className={styles.input} placeholder={c.fields.telPh} value={form.tel} onChange={e=>setForm(f=>({...f,tel:e.target.value}))} disabled={submitting} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>{c.fields.formation}</label>
                    <select name="formation" className={styles.input} value={form.formation} onChange={e=>setForm(f=>({...f,formation:e.target.value}))} disabled={submitting}>
                      <option value="">{c.fields.formationPh}</option>
                      {c.options.map(o=><option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>{c.fields.msg}</label>
                    <textarea name="msg" className={`${styles.input} ${styles.textarea}`} placeholder={c.fields.msgPh} rows={4} value={form.msg} onChange={e=>setForm(f=>({...f,msg:e.target.value}))} disabled={submitting} />
                  </div>
                  {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                  <button type="submit" className={`btn-primary ${styles.submit}`} disabled={submitting}>
                    {submitting ? 'Envoi...' : c.submit}
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
