import { render, screen } from '@testing-library/react'
import { Section7 } from '.'

describe('Section7', () => {
  it('renders correctly', () => {
    render(<Section7 />)

    expect(screen.getByText('Perguntas Frequentes')).toBeInTheDocument()
  })
})
