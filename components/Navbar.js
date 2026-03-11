'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
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
          <Image
            src="/images/logo.png"
            alt="Dandela Academy"
            width={172}
            height={36}
            className={`${styles.logoFull} ${!scrolled ? styles.logoFullWhite : ''}`}
            priority
          />
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
