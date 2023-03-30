import { useEffect } from 'react'

import Image from 'next/image'

import { Container, ImageColumn, InfosColumn } from './styles'

import CheckIcon from '@mui/icons-material/Check'

import Aos from 'aos'
import 'aos/dist/aos.css'

export function Section5() {
  useEffect(() => {
    Aos.init({ duration: 500, once: true, delay: 150 })
  }, [])

  const datas = [
    {
      id: 1,
      content: 'Balanço energético',
    },
    {
      id: 2,
      content: 'Auto-diagnóstico dos transformadores',
    },
    {
      id: 3,
      content: 'Medidor ideal para consumidores comerciais industriais',
    },
    {
      id: 4,
      content: 'À prova de fraude',
    },
    {
      id: 5,
      content: 'Melhoria dos Indicadores de Continuidade',
    },
    {
      id: 6,
      content: 'Maior vida útil do ativo',
    },
    {
      id: 7,
      content: 'Acompanhamento em tempo real das condições do equipamento',
    },
  ]

  return (
    <Container>
      <section>
        <InfosColumn data-aos="fade-right">
          <h2>
            Desenvolvido para melhorar a performance dos ativos de distribuição
          </h2>

          <ul>
            {datas.map((data) => {
              return (
                <li key={data.id}>
                  <span>
                    <CheckIcon fontSize="small" />
                  </span>
                  {data.content}
                </li>
              )
            })}
          </ul>
        </InfosColumn>
        <ImageColumn>
          <Image
            src="/assets/section-5/ativos-de-distribuicao.png"
            width={851}
            height={879}
            alt="Ativos de distribuição"
          />
        </ImageColumn>
      </section>
    </Container>
  )
}
