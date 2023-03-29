import Image from 'next/image'
import {
  AboutOmniColumn,
  AboutOmniContainer,
  ImageColumn,
  InfosOmni,
  Title,
} from './styles'

import omniTrafo2 from '../../../../assets/about-omni/omni-trafo-2.png'
import monitoramentoDeTensao from '../../../../assets/about-omni/monitoramento-de-tensao.svg'
import analiseDePerda from '../../../../assets/about-omni/analise-de-perda.svg'
import medicaoDoBalanco from '../../../../assets/about-omni/medicao-do-balanco.svg'
import deteccaoDeFaltas from '../../../../assets/about-omni/deteccao-de-faltas.svg'
import analiseDeFator from '../../../../assets/about-omni/analise-de-fator.svg'
import harmonicasDeCorrente from '../../../../assets/about-omni/harmonicas-de-corrente.svg'
import medicaoDeTemperatura from '../../../../assets/about-omni/medicao-de-temperatura.svg'
import supervisaoDeBaixaTensao from '../../../../assets/about-omni/supervisao-de-baixa-tensao.svg'

export function AboutOmniSection() {
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
    <AboutOmniContainer>
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
                <div key={data.id}>
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
    </AboutOmniContainer>
  )
}
