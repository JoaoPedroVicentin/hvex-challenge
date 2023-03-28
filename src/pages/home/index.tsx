import { AboutOmniSection } from '../../components/aboutOmniSection'
import { HeroSection } from '../../components/heroSection'
import { OmniDescriptionSection } from '../../components/omniDescriptionSection'
import { SmartEnergySection } from '../../components/smartEnergySection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <SmartEnergySection />
      <OmniDescriptionSection />
      <AboutOmniSection />
    </>
  )
}
