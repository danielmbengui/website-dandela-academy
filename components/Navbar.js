'use client'

import { useState, useEffect } from 'react'
import { useLang } from '../lib/LangContext'
import LangSelector from './LangSelector'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: t.nav.accueil,       href: '#accueil' },
    { label: t.nav.formations,    href: '#formations' },
    { label: t.nav.espaces,       href: '#espaces' },
    { label: t.nav.equipe,        href: '#equipe' },
    { label: t.nav.certification, href: '#certification' },
    { label: t.nav.contact,       href: '#contact' },
  ]

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#accueil" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="#1565D8"/>
              <path d="M7 20V8h5.5C16.09 8 18.5 10.2 18.5 14s-2.41 6-6 6H7zm2.5-2h3c2.21 0 3.5-1.57 3.5-4s-1.29-4-3.5-4h-3v8z" fill="white"/>
              <circle cx="21" cy="9" r="3" fill="#FF9F1C"/>
            </svg>
          </div>
          <span className={styles.logoText}>
            Dandela <strong>Academy</strong>
          </span>
        </a>

        {/* Desktop links */}
        <ul className={styles.links}>
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className={styles.controls}>
          <LangSelector scrolled={scrolled} />
          <a href="#contact" className={`btn-primary ${styles.cta}`}>{t.nav.cta}</a>
        </div>

        {/* Hamburger */}
        <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={menuOpen ? styles.open1 : styles.line} />
          <span className={menuOpen ? styles.open2 : styles.line} />
          <span className={menuOpen ? styles.open3 : styles.line} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map(link => (
            <a key={link.href} href={link.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className={styles.mobileLangRow}>
            <LangSelector scrolled={true} />
          </div>
          <a href="#contact" className={`btn-primary ${styles.mobileCta}`} onClick={() => setMenuOpen(false)}>
            {t.nav.cta}
          </a>
        </div>
      )}
    </nav>
  )
}
