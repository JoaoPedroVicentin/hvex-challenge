import { render, screen } from '@testing-library/react'
import { Section6 } from '.'

describe('Section6', () => {
  it('renders correctly', () => {
    render(<Section6 />)

    expect(
      screen.getByText(
        'Quer saber mais sobre como podemos te ajudar a melhorar a performance de seus ativos?',
      ),
    ).toBeInTheDocument()
  })
})
