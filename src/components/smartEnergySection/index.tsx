import { ImageColumn, InfosColumn, SmartEnergyContainer } from './styles'
import CheckIcon from '@mui/icons-material/Check'
import inteligentEnergy from '../../assets/inteligent-energy.png'
import Image from 'next/image'

export function SmartEnergySection() {
  const datas = [
    'Monitoramento inteligente de ativos',
    'Melhoria dos indicadores de continuidade',
    'Comunicação Modular',
    'Business Inteligence',
    'Redução de Perdas técnicas e Não técnicas',
  ]

  return (
    <SmartEnergyContainer>
      <section>
        <ImageColumn>
          <Image
            src={inteligentEnergy}
            quality={100}
            alt="Ilustrations about inteligent energy"
          />
        </ImageColumn>
        <InfosColumn>
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
      </section>
    </SmartEnergyContainer>
  )
}
