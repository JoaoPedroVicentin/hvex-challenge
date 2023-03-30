import { ButtonContainer } from './styles'

interface ButtonProps {
  content: string
}

export function Button({ content }: ButtonProps) {
  return <ButtonContainer href="/">{content}</ButtonContainer>
}
