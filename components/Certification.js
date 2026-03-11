'use client'

import { useLang } from '../lib/LangContext'
import styles from './Certification.module.css'

const HL_ICONS = [
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="16 13 12 17 8 13"/><line x1="12" y1="17" x2="12" y2="11"/></svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
]

export default function Certification() {
  const { t } = useLang()
  const c = t.certification

  return (
    <section className={styles.section} id="certification">
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">{c.label}</div>
          <h2 className="section-title">
            {c.title[0]}<br /><span>{c.title[1]}</span>
          </h2>
          <p className="section-subtitle">{c.subtitle}</p>
        </div>

        <div className={styles.highlights}>
          {c.highlights.map((h, i) => (
            <div key={i} className={styles.highlight}>
              <div className={styles.hlIcon}>{HL_ICONS[i]}</div>
              <div>
                <h3 className={styles.hlTitle}>{h.title}</h3>
                <p className={styles.hlDesc}>{h.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate visual */}
        <div className={styles.certWrap}>
          <div className={styles.certCard}>
            <div className={styles.certHeader}>
              <div className={styles.certLogo}>
                <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
                  <rect width="28" height="28" rx="8" fill="#1565D8"/>
                  <path d="M7 20V8h5.5C16.09 8 18.5 10.2 18.5 14s-2.41 6-6 6H7zm2.5-2h3c2.21 0 3.5-1.57 3.5-4s-1.29-4-3.5-4h-3v8z" fill="white"/>
                  <circle cx="21" cy="9" r="3" fill="#FF9F1C"/>
                </svg>
                <span>Dandela Academy</span>
              </div>
              <div className={styles.certBadge}>INEFOP</div>
            </div>
            <div className={styles.certBody}>
              <p className={styles.certTitle}>{c.certTitle}</p>
              <div className={styles.certRule}/>
              <p className={styles.certText}>{c.certBody}</p>
              <div className={styles.certRule}/>
              <div className={styles.certFooter}>
                <div className={styles.certSig}><div className={styles.sigLine}/><span>Direction</span></div>
                <svg width="64" height="64" viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="27" fill="none" stroke="#1565D8" strokeWidth="2" strokeDasharray="4 2"/>
                  <circle cx="30" cy="30" r="21" fill="#EAF2FF"/>
                  <text x="30" y="27" textAnchor="middle" fontSize="7" fontWeight="800" fill="#1565D8" fontFamily="Sora,sans-serif">DANDELA</text>
                  <text x="30" y="37" textAnchor="middle" fontSize="6" fill="#1565D8" fontFamily="sans-serif">ACADEMY</text>
                </svg>
                <div className={styles.certSig}><div className={styles.sigLine}/><span>INEFOP</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className={styles.partners}>
          <h3 className={styles.partnersTitle}>{c.partnersTitle}</h3>
          <p className={styles.partnersSub}>{c.partnersSub}</p>
          <div className={styles.partnersGrid}>
            {c.partners.map((p, i) => (
              <div key={i} className={styles.partner}>
                <div className={styles.partnerLogo} style={{ color: p.color, borderColor: p.color + '20', background: p.color + '10' }}>
                  <span>{p.abbr}</span>
                </div>
                <div className={styles.partnerName}>{p.name}</div>
                <div className={styles.partnerDesc}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
