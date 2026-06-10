'use client'

import { useApp } from '@/contexts/AppContext'

export default function Footer() {
  const { t } = useApp()
  return (
    <footer>
      <div className="footer-name">Charles Ken W.E. — Portfolio 2026</div>
      <div className="footer-copy">{t('footer.copy')}</div>
    </footer>
  )
}
