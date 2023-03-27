import { HeroSection } from '../../components/heroSection'
import { OmniDescriptionSection } from '../../components/omniDescriptionSection'
import { SmartEnergySection } from '../../components/smartEnergySection'
import { HomeContainer } from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <HeroSection />
      <SmartEnergySection />
      <OmniDescriptionSection />
    </HomeContainer>
  )
}
