'use client'

import { useApp } from '@/contexts/AppContext'
import { useReveal } from '@/hooks/useReveal'

const languages = [
  { flag: '🇫🇷', name: 'French', levelKey: 'lang.native', dots: 5 },
  { flag: '🇬🇧', name: 'English', levelKey: 'lang.fluent', dots: 5 },
  { flag: '🇪🇸', name: 'Spanish', levelKey: 'lang.intermediate', dots: 3 },
  { flag: '🇵🇹', name: 'Portuguese', levelKey: 'lang.basic', dots: 2 },
]

function LangCard({ flag, name, levelKey, dots, delay }: (typeof languages)[number] & { delay: number }) {
  const { t } = useApp()
  const ref = useReveal(delay)
  return (
    <div className="lang-card reveal" ref={ref}>
      <div className="lang-flag">{flag}</div>
      <div className="lang-name">{name}</div>
      <div className="lang-level">{t(levelKey)}</div>
      <div className="lang-dots">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className={`lang-dot${i < dots ? ' active' : ''}`} />
        ))}
      </div>
    </div>
  )
}

export default function Languages() {
  const { t } = useApp()
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="section-label">{t('lang.label')}</div>
      <div className="lang-grid">
        {languages.map((lang, i) => (
          <LangCard key={lang.name} {...lang} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}
