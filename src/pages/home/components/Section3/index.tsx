import { useEffect } from 'react'

import Image from 'next/image'

import { AboutColumn, InfosColumn, Container } from './styles'

import Aos from 'aos'
import 'aos/dist/aos.css'

// Section - É o dispositivo capaz de integrar os transformadores as redes inteligentes

export function Section3() {
  // Iniciando aos para ativar as animações
  useEffect(() => {
    Aos.init({ duration: 500, once: true, delay: 150 })
  }, [])

  // Armazenando lista da section em um array
  const datas = [
    {
      id: 1,
      img: '/assets/section-3/sistema-de-protecao.svg',
      title: 'Sistema de Proteção',
    },
    {
      id: 2,
      img: '/assets/section-3/integracao-de-dados.svg',
      title: 'Integração de Dados',
    },
    {
      id: 3,
      img: '/assets/section-3/ativos-eletricos.svg',
      title: 'Gestão de Ativos Elétricos',
    },
    {
      id: 4,
      img: '/assets/section-3/comunicacao-inteligente.svg',
      title: 'Comunicação Inteligente',
    },
  ]

  return (
    <Container>
      <section>
        <AboutColumn data-aos="fade-right">
          <h2>OMNI TRAFO</h2>
          <h2>
            <span>
              É o dispositivo capaz de integrar os transformadores as redes
              inteligentes
            </span>
          </h2>
          <h4>
            O Omni Trafo envia informações em tempo real, permitindo a
            administração remota de dados importantes da rede elétrica, como
            tensão, corrente, potência passante, energia, temperatura,
            sobrecarga entre outros, mapeando seu funcionamento, prevendo a vida
            útil dos ativos e aferindo perdas técnicas e não técnicas.
          </h4>
        </AboutColumn>

        <InfosColumn>
          {/* Listando os dados da lista da section */}
          {datas.map((data) => {
            return (
              <div key={data.id}>
                <Image
                  src={data.img}
                  width={100}
                  height={100}
                  alt={data.title}
                />
                <h5>{data.title}</h5>
              </div>
            )
          })}
        </InfosColumn>
      </section>
    </Container>
  )
}
