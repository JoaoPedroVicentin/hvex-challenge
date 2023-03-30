import { render, screen } from '@testing-library/react'
import { Section1 } from '.'

jest.mock('aos/dist/aos.css', () => {
  return {
    Aos() {
      return [null, false]
    },
  }
})

describe('Section1', () => {
  it('renders correctly', () => {
    render(<Section1 />)

    expect(
      screen.getByText(
        'Tenha Informações em tempo real das condições dos ativos e com o monitoramento inteligente',
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'Tenha acesso a informações em tempo real, administração remota de dados importantes da rede elétrica como: tensão, corrente, potência passante, energia, temperatura, sobrecarga entre outros, mapeando seu funcionamento, prevendo a vida útil dos ativos e aferindo perdas técnicas e não técnicas.',
      ),
    ).toBeInTheDocument()
    expect(screen.getByText('Quero mais informações')).toBeInTheDocument()
  })
})
