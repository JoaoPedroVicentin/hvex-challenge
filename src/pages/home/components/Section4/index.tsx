import { useEffect } from 'react'

import Image from 'next/image'

import {
  AboutOmniColumn,
  Container,
  ImageColumn,
  InfosOmni,
  Title,
} from './styles'

import omniTrafo2 from '../../../../assets/section-4/omni-trafo-2.png'
import monitoramentoDeTensao from '../../../../assets/section-4/monitoramento-de-tensao.svg'
import analiseDePerda from '../../../../assets/section-4/analise-de-perda.svg'
import medicaoDoBalanco from '../../../../assets/section-4/medicao-do-balanco.svg'
import deteccaoDeFaltas from '../../../../assets/section-4/deteccao-de-faltas.svg'
import analiseDeFator from '../../../../assets/section-4/analise-de-fator.svg'
import harmonicasDeCorrente from '../../../../assets/section-4/harmonicas-de-corrente.svg'
import medicaoDeTemperatura from '../../../../assets/section-4/medicao-de-temperatura.svg'
import supervisaoDeBaixaTensao from '../../../../assets/section-4/supervisao-de-baixa-tensao.svg'

import Aos from 'aos'
import 'aos/dist/aos.css'

export function Section4() {
  useEffect(() => {
    Aos.init({ duration: 500, once: true, delay: 50 })
  }, [])

  const datas = [
    {
      id: 1,
      img: monitoramentoDeTensao,
      title: 'Monitoramento de  tensão, corrente e carga;',
    },
    {
      id: 2,
      img: analiseDePerda,
      title: 'Análise de perda de vida útil do transformador;',
    },
    {
      id: 3,
      img: medicaoDoBalanco,
      title: 'Medição do balanço energético de Perdas',
    },
    {
      id: 4,
      img: deteccaoDeFaltas,
      title: 'Detecção de faltas na rede elétrica',
    },
    {
      id: 5,
      img: analiseDeFator,
      title: 'Análise de Fator de potência',
    },
    {
      id: 6,
      img: harmonicasDeCorrente,
      title: 'Harmônicas de corrente e tensão',
    },
    {
      id: 7,
      img: medicaoDeTemperatura,
      title: 'Medição de temperatura interna',
    },
    {
      id: 8,
      img: supervisaoDeBaixaTensao,
      title: 'Supervisão de  baixa tensão ',
    },
  ]

  return (
    <Container>
      <section>
        <ImageColumn>
          <Image src={omniTrafo2} alt="Omni trafo 2" />
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
            {datas.map((data) => {
              return (
                <div
                  key={data.id}
                  data-aos="fade-up"
                  data-aos-delay={data.id * 100}
                >
                  <span>
                    <Image src={data.img} alt={data.title} />
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
