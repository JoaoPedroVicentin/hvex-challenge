import { useEffect } from 'react'

import Image from 'next/image'

import { ImageColumn, InfosColumn, Container } from './styles'

import CheckIcon from '@mui/icons-material/Check'

import Aos from 'aos'
import 'aos/dist/aos.css'

// Section - Seja bem-vindo a era da energia inteligente

export function Section2() {
  // Iniciando aos para ativar as animações
  useEffect(() => {
    Aos.init({ duration: 500, once: true, delay: 150 })
  }, [])

  // Armazenando lista da section em um array
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
            width={553}
            height={681}
            src="/assets/section-2/smart-energy.png"
            alt="Ilustrations about smart energy"
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
            {/* Listando os dados da lista da section */}
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
