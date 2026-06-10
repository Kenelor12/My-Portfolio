'use client'

import { useApp } from '@/contexts/AppContext'

const projectTech: Record<string, string[]> = {
  '1': ['React', 'TypeScript', 'Figma', 'Node.js', 'PostgreSQL', 'UX Research', 'Design Systems'],
  '2': ['Next.js', 'Tailwind CSS', 'Shopify API', 'Figma', 'Framer Motion', 'UI Design'],
  '3': ['Figma', 'Design Tokens', 'Storybook', 'React', 'CSS Variables', 'Documentation'],
  '4': ['GSAP', 'Three.js', 'HTML5', 'CSS3', 'JavaScript', 'Motion Design', 'WebGL'],
}

export default function ProjectDetail() {
  const { currentProject, closeProject, t } = useApp()
  if (!currentProject) return null

  const tech = projectTech[currentProject] ?? []
  const num = currentProject.padStart(2, '0')

  return (
    <div className="project-detail">
      <button onClick={closeProject} className="project-back">
        {t('project.back')}
      </button>
      <div className="project-num">{num}</div>
      <h1 className="project-detail-title">{t(`project.${currentProject}.title`)}</h1>
      <div className="project-section-label">{t('project.about')}</div>
      <p className="project-full-desc">{t(`project.${currentProject}.full`)}</p>
      <div className="project-section-label">{t('project.tech')}</div>
      <div className="project-tech-list">
        {tech.map(item => (
          <span key={item} className="project-tech-tag">{item}</span>
        ))}
      </div>
    </div>
  )
}
