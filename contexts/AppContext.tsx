'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Lang = 'en' | 'fr'

const en: Record<string, string> = {
  'nav.about': 'About', 'nav.skills': 'Skills', 'nav.work': 'Work', 'nav.contact': 'Contact',
  'hero.tag': 'Available for new projects',
  'hero.sub': 'Web Developer & UX/UI Designer crafting digital experiences that are bold, purposeful, and human-centered.',
  'hero.cta1': 'View Work', 'hero.cta2': "Let's Talk", 'hero.scroll': 'Scroll',
  'about.label': 'About me',
  'about.title.line1': 'I build things', 'about.title.pre': 'that', 'about.title.em': 'feel right',
  'about.p1': "I'm a hybrid Web Developer and UX/UI Designer with a passion for turning complex problems into clean, intuitive digital products. From pixel-perfect interfaces to production-ready code — I do both, and I do them well.",
  'about.p2': 'Open to freelance projects, collaborations, and full-time opportunities. If you have a vision, I have the tools and the drive to bring it to life.',
  'about.cta': 'Get in touch →',
  'about.stat1': 'Years of experience', 'about.stat2': 'Projects delivered',
  'about.stat3': 'Languages spoken', 'about.stat4': 'Ideas to explore',
  'skills.label': 'Skills & Tools',
  'skills.cat1': 'Frontend', 'skills.name1': 'Web Development',
  'skills.cat2': 'Design', 'skills.name2': 'UX / UI Design',
  'skills.cat3': 'Backend', 'skills.name3': 'Server & APIs',
  'skills.cat4': 'Tooling', 'skills.name4': 'Dev Ecosystem',
  'skills.cat5': 'Motion', 'skills.name5': 'Animation',
  'skills.cat6': 'Mindset', 'skills.name6': 'Soft Skills',
  'lang.label': 'Language skills',
  'lang.native': 'Native', 'lang.fluent': 'Fluent', 'lang.intermediate': 'Intermediate', 'lang.basic': 'Basic',
  'work.label': 'Selected work',
  'work.1.title': 'Brand Identity & Web App',
  'work.1.desc': 'Full-cycle design and development of a SaaS dashboard — from user research and wireframes to a pixel-perfect React application.',
  'work.2.title': 'E-Commerce Platform',
  'work.2.desc': 'Designed and built a high-converting e-commerce experience with custom CMS integration and mobile-first layout.',
  'work.3.title': 'Mobile-first Design System',
  'work.3.desc': 'Created a scalable design system from scratch with Figma tokens, component library, and documentation for a cross-functional team.',
  'work.4.title': 'Interactive Portfolio Site',
  'work.4.desc': 'Built an animated, fully responsive portfolio for a creative agency featuring scroll-driven animations and 3D elements.',
  'exp.label': 'Other expertise',
  'exp.1.title': 'Project Management',
  'exp.1.desc': 'Experienced in leading small teams, defining roadmaps, and delivering on time using agile methodologies and tools like Notion and Jira.',
  'exp.2.title': 'Brand & Visual Identity',
  'exp.2.desc': 'Crafting cohesive visual identities — logo design, color systems, typography, and brand guidelines that resonate with audiences.',
  'exp.3.title': 'Mobile Design',
  'exp.3.desc': 'Native and cross-platform mobile UI design with deep understanding of iOS/Android guidelines and responsive interaction patterns.',
  'exp.4.title': 'Technical Writing',
  'exp.4.desc': 'Writing clear documentation, case studies, and design specs that bridge the gap between design and engineering teams.',
  'otw.pre': "Let's build something", 'otw.em': 'remarkable', 'otw.post': 'together.',
  'otw.status': 'Open to work', 'otw.btn': 'Start a project →',
  'contact.label': 'Contact', 'contact.title': 'Got a project in mind?',
  'contact.sub': "Whether it's a new product, a redesign, or just an idea you want to explore — I'm ready. Let's create something that stands out.",
  'contact.name.label': 'Your name', 'contact.name.ph': 'John Doe',
  'contact.email.label': 'Email address', 'contact.email.ph': 'john@company.com',
  'contact.msg.label': 'Message', 'contact.msg.ph': 'Tell me about your project…',
  'contact.submit': 'Send message →',
  'footer.copy': 'Designed & built with intent.',
  'project.back': '← Back to portfolio', 'project.tech': 'Tech Stack', 'project.about': 'About this project',
  'project.1.title': 'Brand Identity & SaaS Dashboard',
  'project.1.full': "This project involved end-to-end design and development for a B2B SaaS startup. Starting from discovery workshops with stakeholders, I mapped user journeys and created low-fidelity wireframes before moving into high-fidelity Figma prototypes. The final React application features a modular dashboard with real-time data visualization, custom charting components, and a design system that scales across the entire product.",
  'project.2.title': 'High-Conversion E-Commerce Platform',
  'project.2.full': "A full e-commerce solution built for a fashion brand looking to expand online. The design process focused on reducing friction in the purchase journey, achieved through A/B tested layouts, micro-interactions, and a streamlined checkout flow. The platform integrates with a headless CMS, enabling the marketing team to manage content independently. Performance-optimized with image lazy loading and edge caching.",
  'project.3.title': 'Scalable Mobile-First Design System',
  'project.3.full': "Built a comprehensive design system to unify the product experience across web and mobile platforms for a fintech company. The system includes 120+ Figma components with variants, design tokens exported to JSON for developer consumption, interactive Storybook documentation, and usage guidelines. The system reduced design-to-dev handoff time by 40% and ensured visual consistency across 3 separate product teams.",
  'project.4.title': 'Animated Creative Agency Portfolio',
  'project.4.full': "Developed a visually striking portfolio website for a creative agency that needed to stand out in a competitive market. The site features scroll-driven animations that react to the user's scroll position, custom WebGL 3D elements in the hero section, and a case study layout system that presents work in a compelling narrative format. Achieved a perfect Lighthouse performance score through careful code-splitting and asset optimization.",
}

const fr: Record<string, string> = {
  'nav.about': 'À propos', 'nav.skills': 'Compétences', 'nav.work': 'Projets', 'nav.contact': 'Contact',
  'hero.tag': 'Disponible pour de nouveaux projets',
  'hero.sub': "Développeur Web & Designer UX/UI créant des expériences digitales audacieuses, intentionnelles et centrées sur l'humain.",
  'hero.cta1': 'Voir mes projets', 'hero.cta2': 'Me contacter', 'hero.scroll': 'Défiler',
  'about.label': 'À propos de moi',
  'about.title.line1': 'Je crée des choses', 'about.title.pre': 'qui', 'about.title.em': 'sonnent juste',
  'about.p1': "Je suis un Développeur Web et Designer UX/UI hybride, passionné par la transformation de problèmes complexes en produits digitaux clairs et intuitifs. Des interfaces pixel-perfect au code prêt pour la production — je fais les deux, et je les fais bien.",
  'about.p2': "Ouvert aux projets freelance, aux collaborations et aux opportunités à temps plein. Si vous avez une vision, j'ai les outils et la motivation pour la concrétiser.",
  'about.cta': 'Prendre contact →',
  'about.stat1': "Années d'expérience", 'about.stat2': 'Projets livrés',
  'about.stat3': 'Langues parlées', 'about.stat4': 'Idées à explorer',
  'skills.label': 'Compétences & Outils',
  'skills.cat1': 'Frontend', 'skills.name1': 'Développement Web',
  'skills.cat2': 'Design', 'skills.name2': 'UX / UI Design',
  'skills.cat3': 'Backend', 'skills.name3': 'Serveur & APIs',
  'skills.cat4': 'Outils', 'skills.name4': 'Écosystème Dev',
  'skills.cat5': 'Motion', 'skills.name5': 'Animation',
  'skills.cat6': 'Savoir-être', 'skills.name6': 'Soft Skills',
  'lang.label': 'Compétences linguistiques',
  'lang.native': 'Natif', 'lang.fluent': 'Courant', 'lang.intermediate': 'Intermédiaire', 'lang.basic': 'Basique',
  'work.label': 'Projets sélectionnés',
  'work.1.title': 'Identité de marque & Web App',
  'work.1.desc': "Conception et développement complet d'un tableau de bord SaaS — de la recherche utilisateur aux wireframes jusqu'à l'application React.",
  'work.2.title': 'Plateforme E-Commerce',
  'work.2.desc': "Conception et développement d'une expérience e-commerce à fort taux de conversion avec intégration CMS et mise en page mobile-first.",
  'work.3.title': 'Design System Mobile-first',
  'work.3.desc': "Création d'un design system évolutif avec des tokens Figma, une bibliothèque de composants et une documentation pour une équipe cross-fonctionnelle.",
  'work.4.title': 'Site Portfolio Interactif',
  'work.4.desc': "Création d'un portfolio animé et entièrement responsive pour une agence créative avec des animations pilotées par le défilement et des éléments 3D.",
  'exp.label': 'Autres expertises',
  'exp.1.title': 'Gestion de projet',
  'exp.1.desc': "Expérimenté dans la direction de petites équipes, la définition de feuilles de route et la livraison dans les délais avec des méthodes agiles et des outils comme Notion et Jira.",
  'exp.2.title': 'Identité de marque & Visuelle',
  'exp.2.desc': "Création d'identités visuelles cohérentes — design de logo, systèmes de couleurs, typographie et charte graphique qui résonnent avec les audiences.",
  'exp.3.title': 'Design Mobile',
  'exp.3.desc': "Design UI mobile natif et multiplateforme avec une compréhension approfondie des directives iOS/Android et des patterns d'interaction responsive.",
  'exp.4.title': 'Rédaction Technique',
  'exp.4.desc': "Rédaction de documentation claire, d'études de cas et de spécifications design qui font le pont entre les équipes design et ingénierie.",
  'otw.pre': 'Construisons quelque chose', 'otw.em': 'de remarquable', 'otw.post': 'ensemble.',
  'otw.status': 'Disponible', 'otw.btn': 'Démarrer un projet →',
  'contact.label': 'Contact', 'contact.title': 'Un projet en tête ?',
  'contact.sub': "Que ce soit un nouveau produit, une refonte ou simplement une idée à explorer — je suis prêt. Créons quelque chose qui se démarque.",
  'contact.name.label': 'Votre nom', 'contact.name.ph': 'Jean Dupont',
  'contact.email.label': 'Adresse e-mail', 'contact.email.ph': 'jean@entreprise.com',
  'contact.msg.label': 'Message', 'contact.msg.ph': 'Parlez-moi de votre projet…',
  'contact.submit': 'Envoyer →',
  'footer.copy': 'Conçu & construit avec intention.',
  'project.back': '← Retour au portfolio', 'project.tech': 'Stack technique', 'project.about': 'À propos de ce projet',
  'project.1.title': 'Identité de marque & Tableau de bord SaaS',
  'project.1.full': "Ce projet impliquait une conception et un développement de bout en bout pour une startup SaaS B2B. Partant d'ateliers de découverte avec les parties prenantes, j'ai cartographié les parcours utilisateurs et créé des wireframes basse-fidélité avant de passer à des prototypes Figma haute-fidélité. L'application React finale comprend un tableau de bord modulaire avec visualisation de données en temps réel et un design system évolutif.",
  'project.2.title': 'Plateforme E-Commerce à fort taux de conversion',
  'project.2.full': "Une solution e-commerce complète développée pour une marque de mode souhaitant se développer en ligne. Le processus de conception s'est concentré sur la réduction des frictions dans le parcours d'achat, grâce à des mises en page testées A/B, des micro-interactions et un flux de paiement simplifié. La plateforme s'intègre à un CMS headless, permettant à l'équipe marketing de gérer le contenu de manière indépendante.",
  'project.3.title': 'Design System Mobile-First Évolutif',
  'project.3.full': "Création d'un design system complet pour unifier l'expérience produit sur les plateformes web et mobile pour une fintech. Le système comprend plus de 120 composants Figma avec variantes, des design tokens exportés en JSON, une documentation interactive Storybook et des guides d'utilisation. Le système a réduit le temps de transfert design-dev de 40%.",
  'project.4.title': "Portfolio d'Agence Créative Animé",
  'project.4.full': "Développement d'un site portfolio visuellement saisissant pour une agence créative. Le site présente des animations pilotées par le défilement, des éléments 3D WebGL personnalisés dans la section héros et un système de mise en page pour les études de cas. Un score Lighthouse parfait a été atteint grâce à un code-splitting minutieux et une optimisation des assets.",
}

interface AppContextType {
  lang: Lang
  toggleLang: () => void
  t: (key: string) => string
  currentProject: string | null
  openProject: (id: string) => void
  closeProject: () => void
}

const AppContext = createContext<AppContextType>({} as AppContextType)

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const [currentProject, setCurrentProject] = useState<string | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-lang') as Lang | null
    if (saved === 'en' || saved === 'fr') setLang(saved)
  }, [])

  const toggleLang = () => {
    setLang(prev => {
      const next = prev === 'en' ? 'fr' : 'en'
      localStorage.setItem('portfolio-lang', next)
      return next
    })
  }

  const t = (key: string): string => (lang === 'en' ? en : fr)[key] ?? key

  const openProject = (id: string) => {
    setCurrentProject(id)
    window.scrollTo({ top: 0 })
  }

  const closeProject = () => {
    setCurrentProject(null)
    setTimeout(() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }), 80)
  }

  return (
    <AppContext.Provider value={{ lang, toggleLang, t, currentProject, openProject, closeProject }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
