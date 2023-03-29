import { ImageColumn, InfosColumn, SmartEnergyContainer } from './styles'
import CheckIcon from '@mui/icons-material/Check'
import inteligentEnergy from '../../../../assets/smart-energy/inteligent-energy.png'
import Image from 'next/image'

export function SmartEnergySection() {
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
    </SmartEnergyContainer>
  )
}
