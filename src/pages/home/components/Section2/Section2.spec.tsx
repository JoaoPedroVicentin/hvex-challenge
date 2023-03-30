import { render, screen } from '@testing-library/react'
import { Section2 } from '.'

jest.mock('aos/dist/aos.css', () => {
  return {
    Aos() {
      return [null, false]
    },
  }
})

describe('Section2', () => {
  it('renders correctly', () => {
    render(<Section2 />)

    expect(
      screen.getByText('Seja bem-vindo a era da energia inteligente'),
    ).toBeInTheDocument()
  })
})
