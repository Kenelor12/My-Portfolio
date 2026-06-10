'use client'

import { useApp } from '@/contexts/AppContext'
import { useReveal } from '@/hooks/useReveal'

export default function OpenToWork() {
  const { t } = useApp()
  const leftRef = useReveal(0)
  const rightRef = useReveal(150)

  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('highlight-form'))
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="otw-section">
      <div className="otw-title reveal" ref={leftRef}>
        {t('otw.pre')} <em>{t('otw.em')}</em> {t('otw.post')}
      </div>
      <div className="otw-right reveal" ref={rightRef}>
        <div className="otw-status">
          <div className="pulse" />
          {t('otw.status')}
        </div>
        <button className="btn-dark" onClick={handleClick}>
          {t('otw.btn')}
        </button>
      </div>
    </div>
  )
}
