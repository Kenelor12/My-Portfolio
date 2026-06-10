'use client'

import Link from 'next/link'
import { useApp } from '@/contexts/AppContext'
import { useReveal } from '@/hooks/useReveal'

export default function About() {
  const { t } = useApp()
  const leftRef = useReveal(0)
  const stat1Ref = useReveal(100)
  const stat2Ref = useReveal(200)

  return (
    <section id="about">
      <div className="section-label">{t('about.label')}</div>
      <div className="about-grid">
        <div className="reveal" ref={leftRef}>
          <h2 className="about-title">
            {t('about.title.line1')}
            <br />
            {t('about.title.pre')} <em>{t('about.title.em')}</em>
          </h2>
          <p className="about-text">{t('about.p1')}</p>
          <p className="about-text">{t('about.p2')}</p>
          <Link href="#contact" className="btn-outline" style={{ marginTop: '1rem' }}>
            {t('about.cta')}
          </Link>
        </div>

        <div className="about-right">
          <div className="stat-row reveal" ref={stat1Ref}>
            <div>
              <div className="stat-num">5+</div>
              <div className="stat-desc">{t('about.stat1')}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="stat-num">40+</div>
              <div className="stat-desc">{t('about.stat2')}</div>
            </div>
          </div>
          <div className="stat-row reveal" ref={stat2Ref}>
            <div>
              <div className="stat-num">4</div>
              <div className="stat-desc">{t('about.stat3')}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="stat-num">∞</div>
              <div className="stat-desc">{t('about.stat4')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
