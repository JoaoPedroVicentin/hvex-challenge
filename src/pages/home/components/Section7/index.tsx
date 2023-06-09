import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
  Arrow,
  Container,
} from './styles'

// Section - Perguntas Frequentes

export function Section7() {
  // Armazenando lista da section em um array
  const datas = [
    {
      id: 1,
      question:
        'Pra que tipo de transformador é feito o medidor inteligente da HVEX (Omni Trafo)?',
      response:
        'O Omni trafo foi desenvolvido para integrar transformadores de distribuição as redes inteligentes, o dispositivo é ideal para concessionárias, fabricantes de transformadores, ou empresas privadas que desejam ter mais controle e informações de sua rede elétrica.',
    },
    {
      id: 2,
      question:
        'O omni trafo pode ser utilizado como um medidor de qualidade de energia (qualimetro)?',
      response:
        'Não, nesse caso recomendamos a utilização de um modelo específico.',
    },
    {
      id: 3,
      question:
        'O omni trafo pode ser utilizado como um medidor de faturamento?',
      response:
        'Não, nesse caso não recomendamos o nosso medidor, nesse caso recomendamos modelos especificados pelo módulo do PRODIST e homologados pela concessionária.',
    },
    {
      id: 4,
      question:
        'Ele pode ser instalado em transformadores que já estão em campo ?',
      response:
        'Sim, o dispositivo pode ser instalado em equipamentos em operação, porem a aferição de temperatura do topo de óleo será apenas ambiente.',
    },
  ]

  return (
    <Container>
      <section>
        <h2>Perguntas Frequentes</h2>

        <AccordionRoot type="multiple">
          {/* Listando os dados da lista da section */}
          {datas.map((data) => {
            return (
              // Div das pergunta utilizando componente Accordion do Radix
              <AccordionItem key={data.id} value={`${data.id}`}>
                <AccordionHeader>
                  <AccordionTrigger>
                    <h5>{data.question}</h5>
                    <Arrow />
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <h5>{data.response}</h5>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </AccordionRoot>
      </section>
    </Container>
  )
}
