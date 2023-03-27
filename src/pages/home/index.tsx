import { HeroSection } from '../../components/heroSection'
import { SmartEnergySection } from '../../components/smartEnergySection'
import { HomeContainer } from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <HeroSection />
      <SmartEnergySection />
    </HomeContainer>
  )
}
