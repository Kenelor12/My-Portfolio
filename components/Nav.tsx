'use client'

import { useState } from 'react'
import { useApp } from '@/contexts/AppContext'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, toggleLang, t } = useApp()

  const links = [
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#work', label: t('nav.work') },
    { href: '#contact', label: t('nav.contact') },
  ]

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav>
        <div className="logo">CKW</div>
        <div className="nav-links">
          {links.map(({ href, label }) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
        <div className="nav-actions">
          <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
            {lang === 'en' ? 'FR' : 'EN'}
          </button>
          <button
            className={`hamburger${menuOpen ? ' is-open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      <div className={`nav-mobile${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        {links.map(({ href, label }) => (
          <a key={href} href={href} className="nav-mobile-link" onClick={close}>
            {label}
          </a>
        ))}
        <button className="lang-toggle" onClick={() => { toggleLang(); close() }}>
          {lang === 'en' ? 'FR' : 'EN'}
        </button>
      </div>
    </>
  )
}
