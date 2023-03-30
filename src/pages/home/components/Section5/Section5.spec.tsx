import { render, screen } from '@testing-library/react'
import { Section5 } from '.'

jest.mock('aos/dist/aos.css', () => {
  return {
    Aos() {
      return [null, false]
    },
  }
})

describe('Section5', () => {
  it('renders correctly', () => {
    render(<Section5 />)

    expect(
      screen.getByText(
        'Desenvolvido para melhorar a performance dos ativos de distribuição',
      ),
    ).toBeInTheDocument()
  })
})
