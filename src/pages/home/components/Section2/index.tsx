import { useEffect } from 'react'

import Image from 'next/image'

import { ImageColumn, InfosColumn, Container } from './styles'

import inteligentEnergy from '../../../../assets/section-2/inteligent-energy.png'

import CheckIcon from '@mui/icons-material/Check'

import Aos from 'aos'
import 'aos/dist/aos.css'

export function Section2() {
  useEffect(() => {
    Aos.init({ duration: 500, once: true, delay: 150 })
  }, [])

  const datas = [
    {
      id: 1,
      content: 'Monitoramento inteligente de ativos',
    },
    {
      id: 2,
      content: 'Comunicação Modular',
    },
    {
      id: 3,
      content: 'Business Inteligence',
    },
    {
      id: 4,
      content: 'Redução de Perdas técnicas e Não técnicas',
    },
  ]

  return (
    <Container>
      <section>
        <ImageColumn>
          <Image
            src={inteligentEnergy}
            quality={100}
            alt="Ilustrations about inteligent energy"
          />
        </ImageColumn>
        <InfosColumn data-aos="fade-right">
          <h2>Seja bem-vindo a era da energia inteligente</h2>
          <h4>
            As redes inteligentes são um caminho sem volta, o desenvolvimento e
            disceminação de dispositivos de medição e monitoramento são as
            ferramentas para redução de custos, perdas e trazem mais
            previsibilidade para as utilities de energia.
          </h4>
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
      </section>
    </Container>
  )
}
