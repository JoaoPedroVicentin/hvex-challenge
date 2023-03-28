import { Button } from '../../../../components/Button'
import { ContactContainer } from './styles'

export function ContactSection() {
  return (
    <ContactContainer>
      <div>
        <h2>
          Quer saber mais sobre como podemos te ajudar a melhorar a performance
          de seus ativos?
        </h2>
        <Button content="Falar com um consultor" />
      </div>
    </ContactContainer>
  )
}
