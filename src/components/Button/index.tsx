import { ButtonContainer } from './styles'

interface ButtonProps {
  content: string
}

// Componente Button usado na Section6 e no Header

export function Button({ content }: ButtonProps) {
  return <ButtonContainer href="/">{content}</ButtonContainer>
}
