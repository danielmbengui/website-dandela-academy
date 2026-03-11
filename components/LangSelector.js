'use client'

import { useState } from 'react'
import { useLang } from '../lib/LangContext'
import styles from './LangSelector.module.css'

const LANGS = [
  { code: 'fr', label: 'Français', flag: '🇫🇷', short: 'FR' },
  { code: 'pt', label: 'Português', flag: '🇦🇴', short: 'PT' },
  { code: 'en', label: 'English',  flag: '🇬🇧', short: 'EN' },
]

export default function LangSelector({ scrolled }) {
  const { lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const current = LANGS.find(l => l.code === lang)

  return (
    <div className={styles.wrapper} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false) }} tabIndex={-1}>
      <button
        className={`${styles.trigger} ${scrolled ? styles.triggerScrolled : styles.triggerHero}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Select language"
      >
        <span className={styles.flag}>{current.flag}</span>
        <span className={styles.short}>{current.short}</span>
        <svg
          className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
          width="12" height="12" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className={styles.dropdown}>
          {LANGS.map(l => (
            <button
              key={l.code}
              className={`${styles.option} ${l.code === lang ? styles.optionActive : ''}`}
              onClick={() => { setLang(l.code); setOpen(false) }}
            >
              <span className={styles.flag}>{l.flag}</span>
              <span className={styles.optionLabel}>{l.label}</span>
              {l.code === lang && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
