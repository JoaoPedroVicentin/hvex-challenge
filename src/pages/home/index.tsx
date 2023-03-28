import { AboutOmniSection } from './components/AboutOmniSection'
import { ContactSection } from './components/ContactSection'
import { DistributionAssetsSection } from './components/DistributionAssetsSection'
import { HeroSection } from './components/HeroSection'
import { OmniDescriptionSection } from './components/OmniDescriptionSection'
import { SmartEnergySection } from './components/SmartEnergySection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <SmartEnergySection />
      <OmniDescriptionSection />
      <AboutOmniSection />
      <DistributionAssetsSection />
      <ContactSection />
    </>
  )
}
