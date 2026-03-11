'use client'

import Image from 'next/image'
import { useLang } from '../lib/LangContext'
import styles from './Certification.module.css'

const HL_ICONS = [
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="16 13 12 17 8 13"/><line x1="12" y1="17" x2="12" y2="11"/></svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
]

const BLGLogo = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="29" cy="29" rx="17" ry="17" fill="#E8231A" transform="rotate(-45 29 29)" />
    <ellipse cx="51" cy="29" rx="17" ry="17" fill="#F5C200" transform="rotate(45 51 29)" />
    <ellipse cx="29" cy="51" rx="17" ry="17" fill="#1A72B8" transform="rotate(45 29 51)" />
    <ellipse cx="51" cy="51" rx="17" ry="17" fill="#2BA84A" transform="rotate(-45 51 51)" />
    <circle cx="40" cy="40" r="17" fill="white" />
    <text x="40" y="44.5" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="900" fill="#1a1a1a" letterSpacing="0.5">BLG</text>
  </svg>
)

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
          <p className={`section-subtitle ${styles.subtitle}`}>{c.subtitle}</p>
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
        {
          /*
          <div className={styles.certWrap}>
          <div className={styles.certCard}>
            <div className={styles.certHeader}>
              <div className={styles.certLogo}>
                <Image
                  src="/images/logo.png"
                  alt="Dandela Academy"
                  width={160}
                  height={33}
                  className={styles.certLogoWhite}
                />
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
          */
        }

        {/* Partners */}
        <div className={styles.partners}>
          <h3 className={styles.partnersTitle}>{c.partnersTitle}</h3>
          <p className={styles.partnersSub}>{c.partnersSub}</p>
          <div className={styles.partnersGrid}>
            {c.partners.map((p, i) => {
              const partnerCard = (
                <div className={`${styles.partner} ${p.link ? styles.partnerClickable : ''}`}>
                  <div className={styles.partnerLogo} style={{ color: p.color, borderColor: p.color + '20', background: p.color + '10' }}>
                    {p.customLogo === 'blg' ? (
                      <BLGLogo size={56} />
                    ) : p.logo ? (
                      <Image
                        src={p.logo}
                        alt={p.name}
                        width={56}
                        height={56}
                        className={styles.partnerLogoImage}
                      />
                    ) : (
                      <span>{p.abbr}</span>
                    )}
                  </div>
                  <div className={styles.partnerName}>{p.name}</div>
                  <div className={styles.partnerDesc}>{p.desc}</div>
                </div>
              )

              if (p.link) {
                return (
                  <a
                    key={i}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.partnerLink}
                  >
                    {partnerCard}
                  </a>
                )
              }

              return <div key={i}>{partnerCard}</div>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
