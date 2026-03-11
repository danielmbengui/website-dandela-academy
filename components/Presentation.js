'use client'

import { useLang } from '../lib/LangContext'
import styles from './Presentation.module.css'

export default function Presentation() {
  const { t } = useLang()
  const p = t.presentation

  const STAT_NUMS = ['5', '2', '100%', 'INEFOP']

  const ATOUT_ICONS = [
    <svg key="0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
    <svg key="1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    <svg key="2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>,
    <svg key="3" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    <svg key="4" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    <svg key="5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
  ]

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Stats bar */}
        <div className={styles.statsBar}>
          {STAT_NUMS.map((n, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statN}>{n}</span>
              <span className={styles.statL}>{p.stats[i]}</span>
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          <div className={styles.left}>
            <div className="section-label">{p.label}</div>
            <h2 className="section-title">
              {p.title[0]}<br /><span>{p.title[1]}</span>
            </h2>
            <p className={styles.text}>{p.text}</p>
            <div className={styles.atouts}>
              {p.atouts.map((a, i) => (
                <div key={i} className={styles.atout}>
                  <div className={styles.atoutIcon}>{ATOUT_ICONS[i]}</div>
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.visualWrap}>
              <div className={styles.mainCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.dots}>
                    <span style={{background:'#FF6B6B'}} /><span style={{background:'#FFE66D'}} /><span style={{background:'#6BCB77'}} />
                  </div>
                  <span className={styles.cardTitle}>Dandela Academy</span>
                </div>
                <div className={styles.cardBody}>
                  <svg viewBox="0 0 320 200" fill="none" className={styles.buildSvg}>
                    <rect x="60" y="35" width="200" height="155" rx="8" fill="#EAF2FF"/>
                    <rect x="60" y="35" width="200" height="50" rx="8" fill="#1565D8" opacity=".15"/>
                    <rect x="90" y="45" width="140" height="30" rx="6" fill="#1565D8"/>
                    <text x="160" y="65" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="white" fontFamily="Sora,sans-serif">DANDELA ACADEMY</text>
                    {[0,1,2].map(i=><g key={i}><rect x={80+i*80} y="100" width="45" height="35" rx="4" fill="white" opacity=".8"/><rect x={80+i*80} y="100" width="45" height="35" rx="4" stroke="#1565D8" strokeWidth="1" opacity=".25"/></g>)}
                    <rect x="130" y="152" width="60" height="38" rx="6" fill="#0D47A1" opacity=".7"/>
                    <circle cx="184" cy="172" r="3" fill="white" opacity=".8"/>
                    <rect x="20" y="188" width="280" height="6" rx="3" fill="#1565D8" opacity=".1"/>
                    <circle cx="35" cy="175" r="10" fill="#FF9F1C" opacity=".5"/>
                    <rect x="24" y="185" width="22" height="16" rx="8" fill="#FF9F1C" opacity=".3"/>
                    <circle cx="285" cy="175" r="10" fill="#1565D8" opacity=".4"/>
                    <rect x="274" y="185" width="22" height="16" rx="8" fill="#1565D8" opacity=".25"/>
                  </svg>
                </div>
              </div>
              <div className={`${styles.ftag} ${styles.t1}`}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1565D8" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                {p.atouts[5] ?? 'Formation certifiée'}
              </div>
              <div className={`${styles.ftag} ${styles.t2}`}>🎓 Cybercafé</div>
              <div className={`${styles.ftag} ${styles.t3}`}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#FF9F1C"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                INEFOP
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
