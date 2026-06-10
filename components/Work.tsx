'use client'

import { useApp } from '@/contexts/AppContext'
import { useReveal } from '@/hooks/useReveal'

const projects = [
  { id: '1', num: '01', badgeKeys: ['React', 'Figma', 'UX Research'] },
  { id: '2', num: '02', badgeKeys: ['Next.js', 'Tailwind', 'UI Design'] },
  { id: '3', num: '03', badgeKeys: ['Figma', 'Design Systems', 'Documentation'] },
  { id: '4', num: '04', badgeKeys: ['GSAP', 'HTML/CSS/JS', 'Motion Design'], borderBottom: true },
]

function WorkItem({ id, num, badgeKeys, borderBottom, delay }: (typeof projects)[number] & { delay: number }) {
  const { t, openProject } = useApp()
  const ref = useReveal<HTMLDivElement>(delay)

  return (
    <div
      className="work-item reveal"
      ref={ref}
      style={borderBottom ? { borderBottom: '1px solid var(--border)', cursor: 'pointer' } : { cursor: 'pointer' }}
      onClick={() => openProject(id)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && openProject(id)}
    >
      <div className="work-num">{num}</div>
      <div>
        <div className="work-title">{t(`work.${id}.title`)}</div>
        <div className="work-desc">{t(`work.${id}.desc`)}</div>
        <div className="work-badges">
          {badgeKeys.map(b => <span key={b} className="work-badge">{b}</span>)}
        </div>
      </div>
      <div className="work-arrow">↗</div>
    </div>
  )
}

export default function Work() {
  const { t } = useApp()
  return (
    <section id="work" style={{ paddingTop: 0 }}>
      <div className="section-label">{t('work.label')}</div>
      <div className="work-list">
        {projects.map((p, i) => (
          <WorkItem key={p.id} {...p} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}
