import Image from 'next/image'
import Link from 'next/link'

import { Container, InfosColumn, ImageColumn } from './styles'

import 'aos/dist/aos.css'

// Section - Tenha Informações em tempo real das condições dos ativos e com o monitoramento inteligente

export function Section1() {
  return (
    <Container>
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
          <Link href="/">Quero mais informações</Link>
        </InfosColumn>
        <ImageColumn>
          <Image
            src="/assets/section-1/omni-trafo.png"
            width={568}
            height={817}
            priority
            alt="Omni Trafo"
          />
        </ImageColumn>
      </section>
    </Container>
  )
}
