'use client'

import { useLang } from '../lib/LangContext'
import styles from './Formations.module.css'

const COLORS = [
  { color:'#1565D8', bg:'#EAF2FF' },
  { color:'#1565D8', bg:'#EAF2FF' },
  { color:'#107C41', bg:'#E8F5E9' },
  { color:'#C43E1C', bg:'#FBE9E7' },
  { color:'#FF9F1C', bg:'#FFF4E0' },
]

const ICONS = [
  <svg key="0" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  <svg key="1" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  <svg key="2" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/></svg>,
  <svg key="3" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>,
  <svg key="4" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
]

export default function Formations() {
  const { t } = useLang()
  const f = t.formations

  return (
    <section className={styles.section} id="formations">
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">{f.label}</div>
          <h2 className="section-title">
            {f.title[0]}<br /><span>{f.title[1]}</span>
          </h2>
          <p className="section-subtitle">{f.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {f.items.map((item, i) => {
            const c = COLORS[i]
            return (
              <div key={i} className={`${styles.card} ${item.featured ? styles.featured : ''} card`}>
                {item.featured && (
                  <div className={styles.featuredBadge}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="#FF9F1C"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    {f.featured}
                  </div>
                )}
                <div className={styles.iconWrap} style={{ background: c.bg, color: c.color }}>{ICONS[i]}</div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.desc}</p>
                <ul className={styles.points}>
                  {item.points.map((pt, j) => (
                    <li key={j} className={styles.point}>
                      <span className={styles.dot} style={{ background: c.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={styles.cta} style={{ color: c.color, borderColor: c.color + '33' }}>
                  {f.learnMore}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            )
          })}
        </div>

        <div className={styles.bottom}>
          <p>{f.bottomText}<strong>{f.bottomHL}</strong>{f.bottomText2 ?? ''}</p>
          <a href="#contact" className="btn-primary">{f.bottomCta}</a>
        </div>
      </div>
    </section>
  )
}
