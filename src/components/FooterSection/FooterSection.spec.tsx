import { render, screen } from '@testing-library/react'
import { FooterSection } from '.'

describe('Footer component', () => {
  it('renders correctly', () => {
    render(<FooterSection />)

    expect(screen.getByText('Endereço')).toBeInTheDocument()
    expect(screen.getByText('Contato')).toBeInTheDocument()
    expect(screen.getByText('Confira nossas redes')).toBeInTheDocument()
  })
})
