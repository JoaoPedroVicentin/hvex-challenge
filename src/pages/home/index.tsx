import { NextSeo } from 'next-seo'

import { AboutOmniSection } from './components/AboutOmniSection'
import { ContactSection } from './components/ContactSection'
import { DistributionAssetsSection } from './components/DistributionAssetsSection'
import { HeroSection } from './components/HeroSection'
import { OmniDescriptionSection } from './components/OmniDescriptionSection'
import { QuestionSections } from './components/QuestionsSection'
import { SmartEnergySection } from './components/SmartEnergySection'

export default function Home() {
  return (
    <>
      <NextSeo
        title=" HVEX | Omni Trafo"
        description="Tenha Informações em tempo real das condições dos ativos e com o monitoramento inteligente"
      />
      <HeroSection />
      <SmartEnergySection />
      <OmniDescriptionSection />
      <AboutOmniSection />
      <DistributionAssetsSection />
      <ContactSection />
      <QuestionSections />
    </>
  )
}
