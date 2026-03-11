'use client'

import { LangProvider } from '../lib/LangContext'
import Navbar from './Navbar'
import Hero from './Hero'
import Presentation from './Presentation'
import Formations from './Formations'
import Espaces from './Espaces'
import Pourquoi from './Pourquoi'
import Equipe from './Equipe'
import Certification from './Certification'
import Contact from './Contact'
import Footer from './Footer'

export default function HomeClient() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <Presentation />
        <Formations />
        <Espaces />
        <Pourquoi />
        <Equipe />
        <Certification />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  )
}
