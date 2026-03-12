'use client'

import { useLang } from '../lib/LangContext'
import styles from './Hero.module.css'
import InefopLinkText from './InefopLinkText'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero
  const INEFOP_URL = 'https://www.inefop.gov.ao/'

  return (
    <section className={styles.hero} id="accueil">
      <div className={styles.bg}>
        <div className={styles.grad} />
        <div className={styles.grid} />
        <div className={`${styles.circle} ${styles.c1}`} />
        <div className={`${styles.circle} ${styles.c2}`} />
        {[...Array(6)].map((_,i) => <div key={i} className={styles.line} style={{top:`${15+i*16}%`,animationDelay:`${i*.45}s`}} />)}
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.left}>
          <div className={`${styles.badge} animate-in`}>
            <span className={styles.dot} />
            <InefopLinkText text={h.badge} />
          </div>

          <h1 className={`${styles.title} animate-in d1`}>
            {h.title[0]}<br />
            <span>{h.title[1]}</span><br />
            {h.title[2]}
          </h1>

          <p className={`${styles.subtitle} animate-in d2`}>{h.subtitle}</p>

          <div className={`${styles.buttons} animate-in d3`}>
            <a href="#formations" className="btn-primary">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              {h.btn1}
            </a>
            <a href="#contact" className={styles.btnOutline}>
              {h.btn2}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div className={`${styles.stats} animate-in d4`}>
            {[
              { n: h.stat1n, l: h.stat1l },
              { n: h.stat2n, l: h.stat2l },
              { n: h.stat3n, l: h.stat3l },
            ].map((s,i) => (
              <div key={i} className={styles.stat}>
                <span className={styles.statN}>
                  <InefopLinkText text={s.n} />
                </span>
                <span className={styles.statL}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.right} animate-in d2`}>
          <div className={styles.card}>
            <svg viewBox="0 0 460 360" fill="none" className={styles.svg}>
              {/* Desks row */}
              {[0,1,2].map(i=>(
                <g key={i}>
                  <rect x={30+i*140} y="180" width="115" height="70" rx="10" fill="rgba(255,255,255,0.12)"/>
                  <rect x={38+i*140} y="190" width="99" height="52" rx="6" fill="rgba(234,242,255,0.9)"/>
                  <rect x={46+i*140} y="198" width="55" height="7" rx="3" fill="#1565D8" opacity=".35"/>
                  <rect x={46+i*140} y="210" width="75" height="5" rx="2.5" fill="#1565D8" opacity=".18"/>
                  <rect x={46+i*140} y="220" width="60" height="5" rx="2.5" fill="#1565D8" opacity=".12"/>
                  {/* person */}
                  <circle cx={87+i*140} cy="155" r="18" fill="rgba(255,255,255,0.25)"/>
                  <circle cx={87+i*140} cy="148" r="11" fill={i===0?'#FF9F1C':i===1?'rgba(255,255,255,0.7)':'rgba(255,159,28,0.5)'}/>
                  <rect x={70+i*140} y="159" width="34" height="25" rx="12" fill="rgba(255,255,255,0.18)"/>
                </g>
              ))}
              {/* Teacher */}
              <rect x="150" y="80" width="160" height="50" rx="10" fill="rgba(255,255,255,0.15)"/>
              <rect x="160" y="88" width="140" height="34" rx="6" fill="rgba(255,255,255,0.12)"/>
              <circle cx="230" cy="55" r="20" fill="rgba(255,255,255,0.3)"/>
              <circle cx="230" cy="48" r="13" fill="#FF9F1C"/>
              <rect x="212" y="60" width="36" height="28" rx="14" fill="rgba(255,255,255,0.2)"/>
              {/* floating card 1 */}
              <g style={{animation:'floatA 4s ease-in-out infinite'}}>
                <rect x="0" y="40" width="110" height="60" rx="12" fill="white" opacity=".96"/>
                <circle cx="22" cy="62" r="12" fill="#EAF2FF"/>
                <path d="M17 62l4 4 6-6" stroke="#1565D8" strokeWidth="2" strokeLinecap="round"/>
                <rect x="40" y="56" width="56" height="7" rx="3" fill="#0D47A1" opacity=".3"/>
                <rect x="40" y="68" width="40" height="5" rx="2" fill="#E4E9F2"/>
              </g>
              {/* floating card 2 */}
              <g style={{animation:'floatB 5s ease-in-out infinite .6s'}}>
                <rect x="350" y="30" width="105" height="56" rx="12" fill="white" opacity=".96"/>
                <rect x="365" y="45" width="44" height="7" rx="3" fill="#1565D8" opacity=".3"/>
                <rect x="365" y="57" width="65" height="5" rx="2" fill="#E4E9F2"/>
                <rect x="440" y="40" width="8" height="8" rx="2" fill="#FF9F1C"/>
              </g>
              {/* INEFOP badge */}
              <g
                style={{animation:'floatC 3.5s ease-in-out infinite 1.2s', cursor: 'pointer'}}
                role="link"
                tabIndex={0}
                onClick={() => window.open(INEFOP_URL, '_blank', 'noopener,noreferrer')}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    window.open(INEFOP_URL, '_blank', 'noopener,noreferrer')
                  }
                }}
              >
                <rect x="350" y="180" width="100" height="48" rx="12" fill="#FF9F1C" opacity=".95"/>
                <text x="400" y="200" textAnchor="middle" fontSize="11" fontWeight="800" fill="white" fontFamily="Sora,sans-serif">INEFOP</text>
                <text x="400" y="217" textAnchor="middle" fontSize="9" fill="white" opacity=".85" fontFamily="sans-serif">{`${h.stat3l} ✓`}</text>
              </g>
              {/* floor */}
              <rect x="0" y="260" width="460" height="8" rx="4" fill="rgba(255,255,255,0.08)"/>
            </svg>

            <style>{`
              @keyframes floatA{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
              @keyframes floatB{0%,100%{transform:translateY(0)}50%{transform:translateY(-13px)}}
              @keyframes floatC{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
            `}</style>

            <div className={styles.floatBadge}>
              <div className={styles.fIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1565D8" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <div>
                <div className={styles.fTitle}>{h.badgeTitle}</div>
                <div className={styles.fSub}>{h.badgeSub}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.mouse}><div className={styles.wheel}/></div>
        <span>{h.scrollLabel}</span>
      </div>
    </section>
  )
}
