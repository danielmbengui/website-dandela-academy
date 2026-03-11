'use client'

import Image from 'next/image'
import { useLang } from '../lib/LangContext'
import styles from './Espaces.module.css'

const SPACE_COLORS = [
  { color: '#1565D8', bg: '#EAF2FF', tagBg: 'rgba(21,101,216,0.12)', checkColor: '#1565D8' },
  { color: '#FF9F1C', bg: '#FFF4E0', tagBg: 'rgba(255,159,28,0.12)', checkColor: '#FF9F1C' },
  { color: '#0D47A1', bg: '#E3F2FD', tagBg: 'rgba(13,71,161,0.12)', checkColor: '#0D47A1' },
]

// Picsum seeds chosen to evoke: tech office, cafe, classroom
const PHOTOS = [
  { src: 'https://picsum.photos/seed/cybertech01/800/480', alt: 'Cybercafé Dandela Academy' },
  { src: 'https://picsum.photos/seed/cafecozy44/800/480', alt: 'Cafétéria Dandela Academy' },
  { src: 'https://picsum.photos/seed/classroom77/800/480', alt: 'Salle de cours Dandela Academy' },
]

const ICONS = [
  // Computer/screen icon
  <svg key="0" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
  </svg>,
  // Coffee icon
  <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
  </svg>,
  // Book icon
  <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>,
]

export default function Espaces() {
  const { t } = useLang()
  const e = t.espaces

  return (
    <section className={styles.section} id="espaces">
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">{e.label}</div>
          <h2 className="section-title">
            {e.title[0]}<br /><span>{e.title[1]}</span>
          </h2>
          <p className="section-subtitle">{e.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {e.items.map((item, i) => {
            const c = SPACE_COLORS[i]
            return (
              <div key={i} className={styles.card}>
                {/* Photo */}
                <div className={styles.photoWrap}>
                  <Image
                    src={PHOTOS[i].src}
                    alt={PHOTOS[i].alt}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className={styles.photo}
                  />
                  {/* Overlay gradient */}
                  <div className={styles.overlay} style={{ background: `linear-gradient(to top, ${c.color}cc 0%, transparent 60%)` }} />
                  {/* Tag chip */}
                  <span className={styles.tag} style={{ color: c.color, background: 'rgba(255,255,255,0.95)' }}>
                    {item.tag}
                  </span>
                  {/* Tagline on photo */}
                  <p className={styles.photoTagline}>{item.tagline}</p>
                </div>

                {/* Body */}
                <div className={styles.body}>
                  <div className={styles.iconWrap} style={{ background: c.bg, color: c.color }}>
                    {ICONS[i]}
                  </div>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.desc}>{item.desc}</p>
                  <ul className={styles.features}>
                    {item.features.map((f, j) => (
                      <li key={j} className={styles.feature}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c.checkColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
