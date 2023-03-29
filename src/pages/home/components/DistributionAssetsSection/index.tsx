import { DistributionAssetsContainer, ImageColumn, InfosColumn } from './styles'
import CheckIcon from '@mui/icons-material/Check'

import ativosDeDistribuicao from '../../../../assets/distribution-assets/ativos-de-distribuicao.png'
import Image from 'next/image'

export function DistributionAssetsSection() {
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
    <DistributionAssetsContainer>
      <section>
        <InfosColumn>
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
          <Image src={ativosDeDistribuicao} alt="Ativos de distribuição" />
        </ImageColumn>
      </section>
    </DistributionAssetsContainer>
  )
}
