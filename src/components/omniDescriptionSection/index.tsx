import { AboutColumn, InfosColumn, OmniDescriptionContainer } from './styles'

import sistemaProtecao from '../../assets/sistema-de-protecao.svg'
import integracaoDados from '../../assets/integracao-de-dados.svg'
import ativosEletricos from '../../assets/ativos-eletricos.svg'
import comunicacaoInteligente from '../../assets/comunicacao-inteligente.svg'
import Image from 'next/image'

export function OmniDescriptionSection() {
  const datas = [
    {
      img: sistemaProtecao,
      title: 'Sistema de Proteção',
    },
    {
      img: integracaoDados,
      title: 'Integração de Dados',
    },
    {
      img: ativosEletricos,
      title: 'Gestão de Ativos Elétricos',
    },
    {
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
              <div key={data.title}>
                <Image src={data.img} width={100} alt={data.title} />
                <h3>{data.title}</h3>
              </div>
            )
          })}
        </InfosColumn>
      </section>
    </OmniDescriptionContainer>
  )
}
