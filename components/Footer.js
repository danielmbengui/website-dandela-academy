'use client'

import Image from 'next/image'
import { useLang } from '../lib/LangContext'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLang()
  const f = t.footer
  const formations = t.formations.items
  const year = new Date().getFullYear()

  const WA_SVG = <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Image
                src="/images/logo.png"
                alt="Dandela Academy"
                width={172}
                height={36}
                className={styles.logoFullWhite}
              />
            </div>
            <p className={styles.tagline}>{f.tagline}</p>
            <p className={styles.desc}>{f.desc}</p>
            <a href="https://wa.me/244955872494" target="_blank" rel="noopener noreferrer" className={styles.wa}>
              {WA_SVG} {f.whatsappLabel}
            </a>
          </div>

          {/* Nav */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{f.nav}</h4>
            <ul className={styles.list}>
              {f.links.map(l => (
                <li key={l.href}><a href={l.href} className={styles.link}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Formations */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{f.form}</h4>
            <ul className={styles.list}>
              {formations.map((formation, i) => (
                <li key={i}><a href="#formations" className={styles.link}>{formation.title}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{f.contact}</h4>
            <ul className={styles.contactList}>
              {[
                { e:'📞', v:'+244 974 502 709', href:'tel:+244974502709' },
                { e:'✉️', v:'info@academy.dandela.com', href:'mailto:info@academy.dandela.com' },
                { e:'📍', v:'Zango III, Luanda, Angola', href:'https://maps.app.goo.gl/6ip8g6cQtmsMC26v5', external:true },
              ].map((c, i) => (
                <li key={i} className={styles.contactItem}>
                  <span>{c.e}</span>
                  <a
                    href={c.href}
                    className={styles.contactLink}
                    target={c.external ? '_blank' : undefined}
                    rel={c.external ? 'noopener noreferrer' : undefined}
                  >
                    {c.v}
                  </a>
                </li>
              ))}
            </ul>
            <div className={styles.inefopBadge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#90CAF9" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              {f.certifiedBadge}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} Dandela Academy — {f.copyright}</span>
          <span className={styles.slogan}>{f.slogan}</span>
        </div>
      </div>
    </footer>
  )
}
