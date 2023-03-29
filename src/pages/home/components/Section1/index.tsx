import { useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Container, InfosColumn, ImageColumn } from './styles'

import omniTrafo from '../../../../assets/section-1/omni-trafo.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

export function Section1() {
  useEffect(() => {
    Aos.init({ duration: 500, once: true, delay: 150 })
  }, [])

  return (
    <Container>
      <section>
        <InfosColumn data-aos="fade-right">
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
          <Image src={omniTrafo} quality={100} priority alt="Omni Trafo" />
        </ImageColumn>
      </section>
    </Container>
  )
}
