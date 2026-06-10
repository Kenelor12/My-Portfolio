'use client'

import Link from 'next/link'
import { useApp } from '@/contexts/AppContext'
import { useReveal } from '@/hooks/useReveal'

export default function Hero() {
  const { t } = useApp()
  const tagRef = useReveal(0)
  const h1Ref = useReveal(100)
  const subRef = useReveal(200)
  const ctasRef = useReveal(300)

  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-tag reveal" ref={tagRef}>{t('hero.tag')}</div>
      <h1 className="reveal" ref={h1Ref}>
        Charles
        <br />
        Ken <em>W.E.</em>
      </h1>
      <p className="hero-sub reveal" ref={subRef}>{t('hero.sub')}</p>
      <div className="hero-ctas reveal" ref={ctasRef}>
        <Link href="#work" className="btn-primary">{t('hero.cta1')}</Link>
        <Link href="#contact" className="btn-outline">{t('hero.cta2')}</Link>
      </div>
      <div className="hero-scroll">{t('hero.scroll')}</div>
    </section>
  )
}
