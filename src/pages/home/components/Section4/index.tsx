import { useEffect } from 'react'

import Image from 'next/image'

import {
  AboutOmniColumn,
  Container,
  ImageColumn,
  InfosOmni,
  Title,
} from './styles'

import Aos from 'aos'
import 'aos/dist/aos.css'

// Section - Monitoramento inteligente de transformadores de distribuição

export function Section4() {
  // Iniciando aos para ativar as animações
  useEffect(() => {
    Aos.init({ duration: 500, once: true, delay: 50 })
  }, [])

  // Armazenando lista da section em um array
  const datas = [
    {
      id: 1,
      img: '/assets/section-4/monitoramento-de-tensao.svg',
      title: 'Monitoramento de  tensão, corrente e carga;',
    },
    {
      id: 2,
      img: '/assets/section-4/analise-de-perda.svg',
      title: 'Análise de perda de vida útil do transformador;',
    },
    {
      id: 3,
      img: '/assets/section-4/medicao-do-balanco.svg',
      title: 'Medição do balanço energético de Perdas',
    },
    {
      id: 4,
      img: '/assets/section-4/deteccao-de-faltas.svg',
      title: 'Detecção de faltas na rede elétrica',
    },
    {
      id: 5,
      img: '/assets/section-4/analise-de-fator.svg',
      title: 'Análise de Fator de potência',
    },
    {
      id: 6,
      img: '/assets/section-4/harmonicas-de-corrente.svg',
      title: 'Harmônicas de corrente e tensão',
    },
    {
      id: 7,
      img: '/assets/section-4/medicao-de-temperatura.svg',
      title: 'Medição de temperatura interna',
    },
    {
      id: 8,
      img: '/assets/section-4/supervisao-de-baixa-tensao.svg',
      title: 'Supervisão de  baixa tensão ',
    },
  ]

  return (
    <Container>
      <section>
        <ImageColumn>
          <Image
            src="/assets/section-4/omni-trafo-2.png"
            width={541}
            height={778}
            alt="Omni trafo 2"
          />
        </ImageColumn>

        <AboutOmniColumn>
          <Title>
            <h2>OMNI TRAFO</h2>
          </Title>
          <h2>Monitoramento inteligente de transformadores de distribuição</h2>
          <h4>
            O Omni trafo é uma solução consolidada para monitoramento de ativos.
            Através deste equipamento, informações importantes da rede são
            enviadas em tempo real , permitindo, assim, a administração remota
            de dados como:
          </h4>
          <InfosOmni>
            {/* Listando os dados da lista da section */}
            {datas.map((data) => {
              return (
                <div
                  key={data.id}
                  data-aos="fade-up"
                  data-aos-delay={data.id * 100}
                >
                  <span>
                    <Image
                      src={data.img}
                      width={40}
                      height={40}
                      alt={data.title}
                    />
                  </span>
                  <h5>{data.title}</h5>
                </div>
              )
            })}
          </InfosOmni>
        </AboutOmniColumn>
      </section>
    </Container>
  )
}
