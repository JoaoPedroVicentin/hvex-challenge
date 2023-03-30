import { NextSeo } from 'next-seo'
import { HeaderSection } from '../../components/HeaderSection'
import { FooterSection } from '../../components/FooterSection'
import { WppButton } from '../../components/WppButton'

import { Section1 } from './components/Section1'
import { Section2 } from './components/Section2'
import { Section3 } from './components/Section3'
import { Section4 } from './components/Section4'
import { Section5 } from './components/Section5'
import { Section6 } from './components/Section6'
import { Section7 } from './components/Section7'

// Page - Home

export default function Home() {
  return (
    <>
      {/* Configurando SEO da página */}
      <NextSeo
        title="HVEX | Omni Trafo"
        description="Tenha Informações em tempo real das condições dos ativos e com o monitoramento inteligente"
      />
      {/* Renderizando componentes da page Home */}
      <HeaderSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <FooterSection />
      <WppButton />
    </>
  )
}
