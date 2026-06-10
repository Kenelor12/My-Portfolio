'use client'

import { useApp } from '@/contexts/AppContext'
import Cursor from './Cursor'
import Nav from './Nav'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Languages from './Languages'
import Work from './Work'
import Expertise from './Expertise'
import OpenToWork from './OpenToWork'
import Contact from './Contact'
import Footer from './Footer'
import ProjectDetail from './ProjectDetail'

export default function PortfolioView() {
  const { currentProject } = useApp()

  return (
    <>
      <Cursor />
      <Nav />
      {currentProject ? (
        <ProjectDetail />
      ) : (
        <>
          <Hero />
          <About />
          <Skills />
          <Languages />
          <Work />
          <Expertise />
          <OpenToWork />
          <Contact />
          <Footer />
        </>
      )}
    </>
  )
}
