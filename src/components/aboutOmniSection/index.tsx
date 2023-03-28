import Image from 'next/image'
import {
  AboutOmniColumn,
  AboutOmniContainer,
  ImageColumn,
  InfosOmni,
  Title,
} from './styles'

import omniTrafo2 from '../../assets/aboutOmniAssets/omni-trafo-2.png'
import monitoramentoDeTensao from '../../assets/aboutOmniAssets/monitoramento-de-tensao.svg'
import analiseDePerda from '../../assets/aboutOmniAssets/analise-de-perda.svg'
import medicaoDoBalanco from '../../assets/aboutOmniAssets/medicao-do-balanco.svg'
import deteccaoDeFaltas from '../../assets/aboutOmniAssets/deteccao-de-faltas.svg'
import analiseDeFator from '../../assets/aboutOmniAssets/analise-de-fator.svg'
import harmonicasDeCorrente from '../../assets/aboutOmniAssets/harmonicas-de-corrente.svg'
import medicaoDeTemperatura from '../../assets/aboutOmniAssets/medicao-de-temperatura.svg'
import supervisaoDeBaixaTensao from '../../assets/aboutOmniAssets/supervisao-de-baixa-tensao.svg'

export function AboutOmniSection() {
  const datas = [
    {
      img: monitoramentoDeTensao,
      title: 'Monitoramento de  tensão, corrente e carga;',
    },
    {
      img: analiseDePerda,
      title: 'Análise de perda de vida útil do transformador;',
    },
    {
      img: medicaoDoBalanco,
      title: 'Medição do balanço energético de Perdas',
    },
    {
      img: deteccaoDeFaltas,
      title: 'Detecção de faltas na rede elétrica',
    },
    {
      img: analiseDeFator,
      title: 'Análise de Fator de potência',
    },
    {
      img: harmonicasDeCorrente,
      title: 'Harmônicas de corrente e tensão',
    },
    {
      img: medicaoDeTemperatura,
      title: 'Medição de temperatura interna',
    },
    {
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
                <div key={data.title}>
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
