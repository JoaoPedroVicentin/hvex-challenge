import { AboutColumn, InfosColumn, OmniDescriptionContainer } from './styles'

import sistemaProtecao from '../../../../assets/omni-description/sistema-de-protecao.svg'
import integracaoDados from '../../../../assets/omni-description/integracao-de-dados.svg'
import ativosEletricos from '../../../../assets/omni-description/ativos-eletricos.svg'
import comunicacaoInteligente from '../../../../assets/omni-description/comunicacao-inteligente.svg'
import Image from 'next/image'

export function OmniDescriptionSection() {
  const datas = [
    {
      id: 1,
      img: sistemaProtecao,
      title: 'Sistema de Proteção',
    },
    {
      id: 2,
      img: integracaoDados,
      title: 'Integração de Dados',
    },
    {
      id: 3,
      img: ativosEletricos,
      title: 'Gestão de Ativos Elétricos',
    },
    {
      id: 4,
      img: comunicacaoInteligente,
      title: 'Comunicação Inteligente',
    },
  ]

  return (
    <OmniDescriptionContainer>
      <section>
        <AboutColumn>
          <h2>OMNI TRAFO</h2>
          <h2>
            <span>
              É o dispositivo capaz de integrar os transformadores as redes
              inteligentes
            </span>
          </h2>
          <h4>
            O Omni Trafo envia informações em tempo real, permitindo a
            administração remota de dados importantes da rede elétrica, como
            tensão, corrente, potência passante, energia, temperatura,
            sobrecarga entre outros, mapeando seu funcionamento, prevendo a vida
            útil dos ativos e aferindo perdas técnicas e não técnicas.
          </h4>
        </AboutColumn>
        <InfosColumn>
          {datas.map((data) => {
            return (
              <div key={data.id}>
                <Image src={data.img} width={100} alt={data.title} />
                <h5>{data.title}</h5>
              </div>
            )
          })}
        </InfosColumn>
      </section>
    </OmniDescriptionContainer>
  )
}
