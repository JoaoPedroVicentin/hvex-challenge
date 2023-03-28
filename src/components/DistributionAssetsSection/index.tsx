import { DistributionAssetsContainer, ImageColumn, InfosColumn } from './styles'
import CheckIcon from '@mui/icons-material/Check'

import ativosDeDistribuicao from '../../assets/distribution-assets/ativos-de-distribuicao.png'
import Image from 'next/image'

export function DistributionAssetsSection() {
  const datas = [
    'Balanço energético',
    'Auto-diagnóstico dos transformadores',
    'Medidor ideal para consumidores comerciais industriais',
    'À prova de fraude',
    'Melhoria dos Indicadores de Continuidade',
    'Maior vida útil do ativo',
    'Acompanhamento em tempo real das condições do equipamento',
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
                <li key={data}>
                  <span>
                    <CheckIcon fontSize="small" />
                  </span>
                  {data}
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
