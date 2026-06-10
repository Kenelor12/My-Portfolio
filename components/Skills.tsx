'use client'

import { useEffect, useRef } from 'react'
import { useApp } from '@/contexts/AppContext'

const skillData = [
  { catKey: 'skills.cat1', nameKey: 'skills.name1', tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'TypeScript'], width: '90%' },
  { catKey: 'skills.cat2', nameKey: 'skills.name2', tags: ['Figma', 'Prototyping', 'Wireframing', 'Design Systems', 'User Research'], width: '88%' },
  { catKey: 'skills.cat3', nameKey: 'skills.name3', tags: ['Node.js', 'REST APIs', 'Python', 'SQL', 'Firebase'], width: '75%' },
  { catKey: 'skills.cat4', nameKey: 'skills.name4', tags: ['Git', 'VS Code', 'Docker', 'Vercel', 'Tailwind'], width: '85%' },
  { catKey: 'skills.cat5', nameKey: 'skills.name5', tags: ['CSS Animations', 'GSAP', 'Framer Motion', 'Lottie'], width: '78%' },
  { catKey: 'skills.cat6', nameKey: 'skills.name6', tags: ['Problem Solving', 'Collaboration', 'Adaptability', 'Leadership'], width: '95%' },
]

function SkillCell({ catKey, nameKey, tags, width, delay }: (typeof skillData)[number] & { delay: number }) {
  const { t } = useApp()
  const cellRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cellRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`
          el.classList.add('revealed')
          if (fillRef.current) fillRef.current.style.width = width
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [width, delay])

  return (
    <div className="skill-cell reveal" ref={cellRef}>
      <div className="skill-cat">{t(catKey)}</div>
      <div className="skill-name">{t(nameKey)}</div>
      <div className="skill-tags">
        {tags.map(tag => <span key={tag} className="skill-tag">{tag}</span>)}
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: '0%' }} ref={fillRef} />
      </div>
    </div>
  )
}

export default function Skills() {
  const { t } = useApp()
  return (
    <section id="skills" style={{ paddingTop: 0 }}>
      <div className="section-label">{t('skills.label')}</div>
      <div className="skills-grid">
        {skillData.map((skill, i) => (
          <SkillCell key={skill.nameKey} {...skill} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}
