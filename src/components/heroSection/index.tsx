import Image from 'next/image'
import { HeroContainer, InfosColumn, ImageColumn } from './styles'
import omniTrafo from '../../assets/omni-trafo.png'
import Link from 'next/link'

export function HeroSection() {
  return (
    <HeroContainer>
      <section>
        <InfosColumn>
          <h1>
            Tenha Informações em tempo real das condições dos ativos e com o
            monitoramento inteligente
          </h1>
          <h4>
            Tenha acesso a informações em tempo real, administração remota de
            dados importantes da rede elétrica como: tensão, corrente, potência
            passante, energia, temperatura, sobrecarga entre outros, mapeando
            seu funcionamento, prevendo a vida útil dos ativos e aferindo perdas
            técnicas e não técnicas.
          </h4>
          <Link href="">Quero mais informações</Link>
        </InfosColumn>
        <ImageColumn>
          <Image
            src={omniTrafo}
            height={750}
            quality={100}
            priority
            alt="Omni Trafo"
          />
        </ImageColumn>
      </section>
    </HeroContainer>
  )
}
